const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// 设置Canvas尺寸
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 粒子系统参数配置
const config = {
    maxParticles: 100,   // 最大粒子数量
    particleSize: 3,    // 基础粒子大小
    moveSpeed: 0.2,      // 粒子移动速度
    lineDistance: 90,    // 连线触发距离
    hueChange: 4         // 颜色变化速度
};

// 粒子数组
let particles = [];

// 粒子类
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * config.particleSize + 1;
        this.speedX = Math.random() * 4 - 2; // X轴速度
        this.speedY = Math.random() * 4 - 2; // Y轴速度
        this.hue = Math.random() * 260;      // 色相值
        this.alpha = 1;                      // 透明度
    }

    update() {
        // 移动粒子
        this.x += this.speedX * config.moveSpeed;
        this.y += this.speedY * config.moveSpeed;

        // 逐渐缩小和消失
        if(this.size > 0.2) this.size -= 0.1;
        if(this.alpha > 0) this.alpha -= 0.008;

        // 颜色循环变化
        this.hue = (this.hue + config.hueChange) % 360;
    }

    draw() {
        ctx.fillStyle = `hsla(${this.hue}, 70%, 50%, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// 鼠标移动监听
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    generateParticles();
});

// 生成新粒子
function generateParticles() {
    // 控制粒子数量
    if(particles.length > config.maxParticles) return;

    for(let i = 0; i < 3; i++) { // 每次生成3个粒子
        particles.push(new Particle(
            mouseX + Math.random() * 20 - 10,
            mouseY + Math.random() * 20 - 10
        ));
    }
}

// 绘制连线
function drawLines() {
    for(let i = 0; i < particles.length; i++) {
        for(let j = i; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];

            // 计算两点间距离
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            // 在指定距离内绘制连线
            if(distance < config.lineDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `hsla(${(p1.hue + p2.hue)/2}, 70%, 50%,
                                          ${0.5 - distance/config.lineDistance})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    }
}

// 动画循环
function animate() {
    // 清空画布（使用半透明填充实现拖尾效果）
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 更新并绘制粒子
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // 移除不可见的粒子
        if(particle.alpha <= 0 || particle.size <= 0.2) {
            particles.splice(index, 1);
        }
    });

    drawLines(); // 绘制连线
    requestAnimationFrame(animate);
}

animate(); // 启动动画