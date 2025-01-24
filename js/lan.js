function getImgs() {
    return document.querySelectorAll('img');
}

// 获取到浏览器顶部的距离
function getTop(e) {
    return e.offsetTop;
}

// 懒加载实现
function lazyload(imgs) {
    // 可视区域高度
    var h = window.innerHeight;
    //滚动区域高度
    var s = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < imgs.length; i++) {
        //图片距离顶部的距离大于可视区域和滚动区域之和时懒加载
        if ((h + s) > getTop(imgs[i])) {
            // 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s
            (function (i) {
                setTimeout(function () {
                    // 不加立即执行函数 i 会等于9
                    // 隐形加载图片或其他资源，
                    //创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载
                    var temp = new Image();
                    if (imgs[i].getAttribute('data-src') != null) {
                        temp.src = imgs[i].getAttribute('data-src'); // 只会请求一次
                        // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
                        temp.onload = function () {
                            // 获取自定义属性data-src，用真图片替换假图片
                            imgs[i].src = imgs[i].getAttribute('data-src');
                        };
                    }
                }, 2000);
            })(i);
        }
    }
}

//window.onload = imgeLazyLoad;
function imgeLazyLoad() {
    // 滚屏函数
    window.onscroll = function () {
        // 获取图片列表，即img标签列表
        var imgs = getImgs();
        lazyload(imgs);
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // 鼠标点击效果
    body.addEventListener('click', function (event) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        body.appendChild(ripple);

        const x = event.clientX - 25;
        const y = event.clientY - 25;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.addEventListener('animationend', function () {
            ripple.remove();
        });
    });

    // 雪花飘落特效
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const x = Math.random() * window.innerWidth;
        const initialY = Math.random() * -50; // 初始Y坐标在视口上方某处
        const speed = Math.random() * 1 + 0.5; // 雪花下落速度
        const rotationSpeed = Math.random() * 2 + 3; // 雪花旋转速度

        snowflake.style.left = `${x}px`;
        snowflake.style.top = `${initialY}px`;

        // 自定义属性用于存储速度和旋转速度，以便后续可能的动态调整
        snowflake.setAttribute('data-speed', speed);
        snowflake.setAttribute('data-rotation-speed', rotationSpeed);

        // 动态计算动画时长并应用
        snowflake.style.animationDuration = `${speed}s, ${rotationSpeed}s`;
        snowflake.style.webkitAnimationDuration = `${speed}s, ${rotationSpeed}s`;

        body.appendChild(snowflake);

        const move = () => {
            let pos = parseInt(snowflake.style.top, 10);
            pos += speed / 60; // 每秒更新60次，因此速度除以60

            if (pos > window.innerHeight) {
                snowflake.remove();
            } else {
                snowflake.style.top = `${pos}px`;
                requestAnimationFrame(move);
            }
        };

        requestAnimationFrame(move);
    }

    // 创建一定数量的雪花
    const snowflakeCount = 50;
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }
});

// 禁止鼠标右键
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// 禁止F12按钮（部分浏览器可能无法完全禁止）
document.addEventListener('keydown', function (event) {
    // F12的键码是123
    // if (event.keyCode === 123) {
    //     event.preventDefault();
    //     return false;
    // }
// 也可以禁止其他常用的开发者工具快捷键，如Ctrl+Shift+I等
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        return false;
    }
});