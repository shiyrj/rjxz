// 本地数据，包括名称和对应的链接
const data = [
    { name: 'Adobe 2025全家桶', link1: 'https://pan.xunlei.com/s/VOEIRhnG4Ya62p5mkrjh2i07A1?pwd=wubh#', link2: '#' },
    { name: 'Adobe 2024全家桶', link1: 'https://pan.xunlei.com/s/VOEISY63JT9qrwPnhuWoKVSrA1?pwd=394u#', link2: '#' },
    { name: 'Adobe 2023全家桶', link1: 'https://pan.xunlei.com/s/VOEISdD_keaC4Rnt4ItiOy1wA1?pwd=9k8y#', link2: '#' },
    { name: 'Adobe 2022全家桶', link1: 'https://pan.xunlei.com/s/VOEIUKSo8YakUoKzRvHyRAdpA1?pwd=czm6#', link2: '#' },
    { name: 'Adobe 2021全家桶', link1: 'https://pan.xunlei.com/s/VOEIUTB9CkjvYimnTGWvXZiwA1?pwd=f4ma#', link2: '#' },
    { name: 'Adobe 2020全家桶', link1: 'https://pan.xunlei.com/s/VOEIUacX8YakUoKzRvHyRIF4A1?pwd=tccz#', link2: '#' },
    { name: 'Adobe 2019全家桶', link1: 'https://pan.xunlei.com/s/VOEIUklzzkZkQ432H1zRQPOLA1?pwd=hiwi#', link2: '#' },
    { name: 'Adobe 2018全家桶', link1: 'https://pan.xunlei.com/s/VOEIUqeBRLgaEjUv-8JqOjjNA1?pwd=828j#', link2: '#' },
    { name: 'Photoshop(PS)2025', link1: 'https://pan.xunlei.com/s/VOEIVCEPkeaC4Rnt4ItiPv8BA1?pwd=aeum#', link2: '#' },
    { name: 'Photoshop(PS)2024', link1: 'https://pan.xunlei.com/s/VOEIVHVMHtBWt6akwBrXCGBKA1?pwd=x2kq#', link2: '#' },
    { name: 'Photoshop(PS)2023', link1: 'https://pan.xunlei.com/s/VOEIVMwJf47rQvePICwLpUIIA1?pwd=kvbe#', link2: '#' },
    { name: 'Photoshop(PS)2022', link1: 'https://pan.xunlei.com/s/VOEIVR_8imJ5xX98QGS_QvBoA1?pwd=innc#', link2: '#' },
    { name: 'Photoshop(PS)2021', link1: 'https://pan.xunlei.com/s/VOEK9cXtGmf-20uxzOzN1KpkA1?pwd=u7qn#', link2: '#' },
    { name: 'Photoshop(PS)2020', link1: 'https://pan.xunlei.com/s/VOEK9g0HaMAPYfBmNUWDNnm8A1?pwd=gwiq#', link2: '#' },
    { name: 'Photoshop(PS)2019', link1: 'https://pan.xunlei.com/s/VOEK9jwsaMAPYfBmNUWDNqlgA1?pwd=ijj6#', link2: '#' },
    { name: 'Photoshop(PS)2018', link1: 'https://pan.xunlei.com/s/VOEK9muTDOAkeHJQzQaYukUWA1?pwd=wdj4#', link2: '#' },
    { name: 'Photoshop(PS)2017', link1: 'https://pan.xunlei.com/s/VOEK9pwq8HiN-rT80AMboCj6A1?pwd=rp64#', link2: '#' },
    { name: 'Photoshop(PS)CS6', link1: 'https://pan.xunlei.com/s/VOEK9v-jwj8BlTmeR44wVdI7A1?pwd=wpds#', link2: '#' },
    { name: 'Premiere(PR)2025', link1: 'https://pan.xunlei.com/s/VOEKBRIwhhPtuR3NAlMDDGNcA1?pwd=9e5n#', link2: '#' },
    { name: 'Premiere(PR)2024', link1: 'https://pan.xunlei.com/s/VOEKDzle1lSI7evBd1_k7iYcA1?pwd=dkuh#', link2: '#' },
    { name: 'Premiere(PR)2023', link1: 'https://pan.xunlei.com/s/VOEKESFbwj8BlTmeR44wYcf7A1?pwd=y2p5#', link2: '#' },
    { name: 'Premiere(PR)2022', link1: 'https://pan.xunlei.com/s/VOEZPS6DlRQsP37Bn7xlV5EkA1?pwd=f8e4#', link2: '#' },
    { name: 'Premiere(PR)2021', link1: 'https://pan.xunlei.com/s/VOEZPfKkIKIYf3b9KSeNdYzNA1?pwd=cbxt#', link2: '#' },
    { name: 'Premiere(PR)2020', link1: 'https://pan.xunlei.com/s/VOEZPpG-JmWs3zbXouHRLWcFA1?pwd=tdi3#', link2: '#' },
    { name: 'Premiere(PR)2019', link1: 'https://pan.xunlei.com/s/VOEZQ02kxbGbhJitRez0oJ7bA1?pwd=ygnp#', link2: '#' },
    { name: 'Premiere(PR)2018', link1: 'https://pan.xunlei.com/s/VOEZR5MFSU8IGFgxHJt2PyPlA1?pwd=bbfj#', link2: '#' },
    { name: 'Premiere(PR)2017', link1: 'https://pan.xunlei.com/s/VOEZREAfL06S0oFzxAj2RQbKA1?pwd=um63#', link2: '#' },

    { name: 'Acrobat 2024', link1: 'https://pan.xunlei.com/s/VOEZRdaAPSWx_-SK6OAzFXTCA1?pwd=bkny#', link2: '#' },
    { name: 'Acrobat 2023', link1: 'https://pan.xunlei.com/s/VOEZRzFxyWlCfGOmSPJ1w5WpA1?pwd=kibq#', link2: '#' },
    { name: 'Acrobat 2022', link1: 'https://pan.xunlei.com/s/VOEZS6G-HOlVD9uHyIm18PLQA1?pwd=5i7y#', link2: '#' },
    { name: 'Acrobat 2021', link1: 'https://pan.xunlei.com/s/VOEZSUQEHTqVnGx-4AZi-FhPA1?pwd=c9ut#', link2: '#' },
    { name: 'Acrobat 2020', link1: 'https://pan.xunlei.com/s/VOEZSchXyAhQHJcxqJoLneIwA1?pwd=eaws#', link2: '#' },

    { name: 'After Effects(AE)2025', link1: 'https://pan.xunlei.com/s/VOEZTB-ltIhYpjAA6xBboTKTA1?pwd=jt9k#', link2: '#' },
    { name: 'After Effects(AE)2024', link1: 'https://pan.xunlei.com/s/VOEZTIsOCY0G0kzC0gaIx3uCA1?pwd=ujzw#', link2: '#' },
    { name: 'After Effects(AE)2023', link1: 'https://pan.xunlei.com/s/VOEZTQJvxbGbhJitRez0qIWsA1?pwd=wap8#', link2: '#' },
    { name: 'After Effects(AE)2022', link1: 'https://pan.xunlei.com/s/VOEZTXXKyAhQHJcxqJoLoDnHA1?pwd=vgk2#', link2: '#' },
    { name: 'After Effects(AE)2021', link1: 'https://pan.xunlei.com/s/VOEZVRfETmi3r5axx3QCbMdsA1?pwd=33zn#', link2: '#' },
    { name: 'After Effects(AE)2020', link1: 'https://pan.xunlei.com/s/VOEZV_qgJ-S-M_fGekxqiSLRA1?pwd=6jsy#', link2: '#' },
    { name: 'After Effects(AE)2018', link1: 'https://pan.xunlei.com/s/VOEZVlfznKyMckrGh2XaLyx1A1?pwd=ngsv#', link2: '#' },
    { name: 'After Effects(AE)2017', link1: 'https://pan.xunlei.com/s/VOEZVtD-W_67fEruMOO_3sv6A1?pwd=v7ir#', link2: '#' },

    { name: 'Animate(An)2024', link1: 'https://pan.xunlei.com/s/VOEZWVV5kbk5Y4zs1mFu8QRuA1?pwd=yr8p#', link2: '#' },
    { name: 'Animate(An)2023', link1: 'https://pan.xunlei.com/s/VOEZWbFL1AOv9YzMqC9242BqA1?pwd=uucj#', link2: '#' },
    { name: 'Animate(An)2022', link1: 'https://pan.xunlei.com/s/VOEZZHcVYvn22OfpqRRQuCpYA1?pwd=krv8#', link2: '#' },
    { name: 'Animate(An)2021', link1: 'https://pan.xunlei.com/s/VOEZZOVMt9Ep_CXOFtefoIODA1?pwd=59gb#', link2: '#' },
    { name: 'Animate(An)2020', link1: 'https://pan.xunlei.com/s/VOEZZYG3xbGbhJitRez0uUpqA1?pwd=ru6m#', link2: '#' },
    { name: 'Animate(An)2019', link1: 'https://pan.xunlei.com/s/VOEZZfAoYUdaC_xsb12qAuOXA1?pwd=4m8g#', link2: '#' },
    { name: 'Animate(An)2018', link1: 'https://pan.xunlei.com/s/VOEZZmWup9Hp23sx4Ix47_H3A1?pwd=69tj#', link2: '#' },
    { name: 'Animate(An)2017', link1: 'https://pan.xunlei.com/s/VOEZZtext9Ep_CXOFtefobBFA1?pwd=t3vp#', link2: '#' },

    { name: 'Audition(Au)2025', link1: 'https://pan.xunlei.com/s/VOEZ_tF1lRQsP37Bn7xlb9NoA1?pwd=gp6e#', link2: '#' },
    { name: 'Audition(Au)2024', link1: 'https://pan.xunlei.com/s/VOEZ_zx1wn7kwp16TSQAgO8OA1?pwd=75px#', link2: '#' },
    { name: 'Audition(Au)2023', link1: 'https://pan.xunlei.com/s/VOEZa6TDnKyMckrGh2XaPN7YA1?pwd=fyee#', link2: '#' },
    { name: 'Audition(Au)2022', link1: 'https://pan.xunlei.com/s/VOEZaEzTyAhQHJcxqJoLt1BOA1?pwd=sx8h#', link2: '#' },
    { name: 'Audition(Au)2021', link1: 'https://pan.xunlei.com/s/VOEZaLivYUdaC_xsb12qBxo7A1?pwd=yebb#', link2: '#' },
    { name: 'Audition(Au)2020', link1: 'https://pan.xunlei.com/s/VOEZa_glkbk5Y4zs1mFuBQmbA1?pwd=invu#', link2: '#' },
    { name: 'Audition(Au)2019', link1: 'https://pan.xunlei.com/s/VOEZaiLED31AE28YmnNTPWkAA1?pwd=imku#', link2: '#' },
    { name: 'Audition(Au)2018', link1: 'https://pan.xunlei.com/s/VOEZapDNt9Ep_CXOFtefpqr3A1?pwd=9bk5#', link2: '#' },
    { name: 'Audition(Au)2017', link1: 'https://pan.xunlei.com/s/VOEZaw-uSU8IGFgxHJt2WyiyA1?pwd=rt8m#', link2: '#' },

    { name: 'Bridge(Br)2025', link1: 'https://pan.xunlei.com/s/VOEZnTZYMtcmj_zSxEFWNoOiA1?pwd=636u#', link2: '#' },

    { name: 'Dimension 2022', link1: 'https://pan.xunlei.com/s/VOEZrCLYnKyMckrGh2Xa_OPHA1?pwd=erjm#', link2: '#' },

    { name: 'Dreamweaver(DW)2021', link1: 'https://pan.xunlei.com/s/VOEZsyNmwn7kwp16TSQAt4D2A1?pwd=mpi9#', link2: '#' },
    { name: 'Dreamweaver(DW)2020', link1: 'https://pan.xunlei.com/s/VOEZt84msSs0sunbMym18dD2A1?pwd=kxuc#', link2: '#' },
    { name: 'Dreamweaver(DW)2019', link1: 'https://pan.xunlei.com/s/VOEZtGgZnLI8CL2jznnRhQ8bA1?pwd=z4uu#', link2: '#' },
    { name: 'Dreamweaver(DW)2018', link1: 'https://pan.xunlei.com/s/VOEZtPVXt9Ep_CXOFteg0u3XA1?pwd=8aat#', link2: '#' },
    { name: 'Dreamweaver(DW)2017', link1: 'https://pan.xunlei.com/s/VOEZtX9kMtcmj_zSxEFWR_P2A1?pwd=p42x#', link2: '#' },

    { name: 'illustrator(Ai)2025', link1: 'https://pan.xunlei.com/s/VOEZtoUGU-TBFZ0EnxIy3DypA1?pwd=wnzz#', link2: '#' },
    { name: 'illustrator(Ai)2024', link1: 'https://pan.xunlei.com/s/VOEZu3zh_7XNxteNQjrqthIfA1?pwd=fme6#', link2: '#' },
    { name: 'illustrator(Ai)2023', link1: 'https://pan.xunlei.com/s/VOEZuBkRhr6W53jfBS8SgNvzA1?pwd=z2b3#', link2: '#' },
    { name: 'illustrator(Ai)2022', link1: 'https://pan.xunlei.com/s/VOEZuiqJTmi3r5axx3QCsizTA1?pwd=zdrz#', link2: '#' },
    { name: 'illustrator(Ai)2021', link1: 'https://pan.xunlei.com/s/VOEZvw84U-TBFZ0EnxIy4aX7A1?pwd=3i96#', link2: '#' },
    { name: 'illustrator(Ai)2020', link1: 'https://pan.xunlei.com/s/VOEZw5QdvwLSLdLN4BG0fhVzA1?pwd=ean9#', link2: '#' },
    { name: 'illustrator(Ai)2019', link1: 'https://pan.xunlei.com/s/VOEZwDXzhr6W53jfBS8ShemWA1?pwd=c6dp#', link2: '#' },
    { name: 'illustrator(Ai)2018', link1: 'https://pan.xunlei.com/s/VOEZwL0A66OdohAAe4Nh_0rPA1?pwd=955u#', link2: '#' },
    { name: 'illustrator(Ai)2017', link1: 'https://pan.xunlei.com/s/VOEZwS3i6qXUiqiO3uUlma58A1?pwd=mibk#', link2: '#' },
    { name: 'illustrator(Ai)2015', link1: 'https://pan.xunlei.com/s/VOEZwYoYsSs0sunbMym1Ayn8A1?pwd=n8fg#', link2: '#' },
    { name: 'illustrator(Ai)CS6', link1: 'https://pan.xunlei.com/s/VOEZwfX1J-S-M_fGekxr-UHIA1?pwd=2ypx#', link2: '#' },
    { name: 'illustrator(Ai)CS5', link1: 'https://pan.xunlei.com/s/VOEZwoTZkbk5Y4zs1mFuPgyTA1?pwd=pnry#', link2: '#' },

    { name: 'InCopy(Ic)2025', link1: 'https://pan.xunlei.com/s/VOEZx3EzIKIYf3b9KSeNzgFBA1?pwd=4uv4#', link2: '#' },

    { name: 'InDesign(Id)2025', link1: 'https://pan.xunlei.com/s/VOEZxMPkwn7kwp16TSQAvm3WA1?pwd=g6bx#', link2: '#' },

    { name: 'Lightroom(Lrc)2025', link1: 'https://pan.xunlei.com/s/VOEZxoaPsSs0sunbMym1BhgfA1?pwd=4s7b#', link2: '#' },
    { name: 'Lightroom(Lrc)2024', link1: 'https://pan.xunlei.com/s/VOE_-GvB-IMQk2enoy0wCnajA1?pwd=dpg8#', link2: '#' },
    { name: 'Lightroom(Lrc)2023', link1: 'https://pan.xunlei.com/s/VOE_-PM1W_67fEruMOO_NuYgA1?pwd=qxp7#', link2: '#' },
    { name: 'Lightroom(Lrc)2022', link1: 'https://pan.xunlei.com/s/VOE_-XcCRi7Hps989ZgIytllA1?pwd=f5tn#', link2: '#' },
    { name: 'Lightroom(Lrc)2021', link1: 'https://pan.xunlei.com/s/VOE_-fRvIDpU_wkHuDTGWBQSA1?pwd=vaxz#', link2: '#' },
    { name: 'Lightroom(Lrc)2020', link1: 'https://pan.xunlei.com/s/VOE_-n_ZIDpU_wkHuDTGWEuWA1?pwd=twdv#', link2: '#' },
    { name: 'Lightroom(Lrc)2019', link1: 'https://pan.xunlei.com/s/VOE_-wKORi7Hps989ZgIz5s6A1?pwd=5yk2#', link2: '#' },
    { name: 'Lightroom(Lrc)2018', link1: 'https://pan.xunlei.com/s/VOEavM4tJ-S-M_fGekxrb8sfA1?pwd=crsx#', link2: '#' },
    { name: 'Lightroom(Lrc)2017', link1: 'https://pan.xunlei.com/s/VOEav_ZsHbXbQuTEPQfmb7WGA1?pwd=84gj#', link2: '#' },

    { name: 'Media Encoder(ME)2025', link1: 'https://pan.xunlei.com/s/VOEawEjPvB4s18bM2TsrUaIzA1?pwd=sza3#', link2: '#' },
    { name: 'Media Encoder(ME)2024', link1: 'https://pan.xunlei.com/s/VOEawNcXPSWx_-SK6O7-CSUkA1?pwd=jpv6#', link2: '#' },
    { name: 'Media Encoder(ME)2023', link1: 'https://pan.xunlei.com/s/VOEax0sXkbk5Y4zs1mFv0xsVA1?pwd=e6fi#', link2: '#' },
    { name: 'Media Encoder(ME)2022', link1: 'https://pan.xunlei.com/s/VOEax7B6HTqVnGx-4AZizq4sA1?pwd=98uq#', link2: '#' },
    { name: 'Media Encoder(ME)2021', link1: 'https://pan.xunlei.com/s/VOEaxF0qTmi3r5axx3QDYEM7A1?pwd=f2mv#', link2: '#' },
    { name: 'Media Encoder(ME)2020', link1: 'https://pan.xunlei.com/s/VOEaxLAEt9Ep_CXOFtegfXS8A1?pwd=47jd#', link2: '#' },

    { name: 'Character Animator(ch)2025', link1: 'https://pan.xunlei.com/s/VOEayYSX-PzUr2XwNn46Ad0UA1?pwd=eja5#', link2: '#' },

    { name: 'Adobe XD 55.1', link1: 'https://pan.xunlei.com/s/VNqaFGeuFJ9XqL05KHqPo0IcA1?pwd=8xgw#', link2: '#' },

    { name: 'Substance 3D 2024', link1: 'https://pan.xunlei.com/s/VNx_f1B0gXkn-5i91GhYMNRNA1?pwd=ak5b#', link2: '#' },

    { name: 'AutoCAD 2025', link1: 'https://pan.xunlei.com/s/VOEKFQC1_k89bkSSS_5wMFPjA1?pwd=dguj#', link2: '#' },
    { name: 'AutoCAD 2024', link1: 'https://pan.xunlei.com/s/VOEKF_Ryr1lcxE2OFLL9gUDpA1?pwd=i47z#', link2: '#' },
    { name: 'AutoCAD 2023', link1: 'https://pan.xunlei.com/s/VOEbejQSHbXbQuTEPQfmtsOQA1?pwd=mjbt#', link2: '#' },
    { name: 'AutoCAD 2022', link1: 'https://pan.xunlei.com/s/VOEberNmRi7Hps989ZgJq1JNA1?pwd=7je7#', link2: '#' },
    { name: 'AutoCAD 2021', link1: 'https://pan.xunlei.com/s/VOEbezKDhr6W53jfBS8TdoJNA1?pwd=494a#', link2: '#' },
    { name: 'AutoCAD 2020', link1: 'https://pan.xunlei.com/s/VOEbf5RmTmi3r5axx3QDp4XjA1?pwd=bbw7#', link2: '#' },
    { name: 'AutoCAD 2019', link1: 'https://pan.xunlei.com/s/VOEbfDSZPSWx_-SK6O7-TTIaA1?pwd=7vzn#', link2: '#' },
    { name: 'AutoCAD 2018', link1: 'https://pan.xunlei.com/s/VOEbfRQlHTqVnGx-4AZjIzj2A1?pwd=6fh4#', link2: '#' },
    { name: 'AutoCAD 2017', link1: 'https://pan.xunlei.com/s/VOEbf_GPlRQsP37Bn7xmkGn7A1?pwd=q5zb#', link2: '#' },
    { name: 'AutoCAD 2016', link1: 'https://pan.xunlei.com/s/VOEbfgIBYUdaC_xsb12rK8nbA1?pwd=xmaw#', link2: '#' },
    { name: 'AutoCAD 2015', link1: 'https://pan.xunlei.com/s/VOEbfvt0YUdaC_xsb12rKFcuA1?pwd=ubgt#', link2: '#' },
    { name: 'AutoCAD 2014', link1: 'https://pan.xunlei.com/s/VOEbg2VejFSkxdAVmirfam-PA1?pwd=gpgq#', link2: '#' },
    { name: 'AutoCAD 2013', link1: 'https://pan.xunlei.com/s/VOEbgB5IJmWs3zbXouHSarqAA1?pwd=gbkh#', link2: '#' },
    { name: 'AutoCAD 2012', link1: 'https://pan.xunlei.com/s/VOEbgI_QPSWx_-SK6O7-TxN5A1?pwd=99u8#', link2: '#' },
    { name: 'AutoCAD 2011', link1: 'https://pan.xunlei.com/s/VOEbgRfVwn7kwp16TSQBpGO8A1?pwd=cqwt#', link2: '#' },
    { name: 'AutoCAD 2010', link1: 'https://pan.xunlei.com/s/VOEbgYl8p9Hp23sx4Ix5H5BdA1?pwd=373m#', link2: '#' },
    { name: 'AutoCAD 2009', link1: 'https://pan.xunlei.com/s/VOEbgfcNvB4s18bM2Tsrmm4LA1?pwd=kapx#', link2: '#' },
    { name: 'AutoCAD 2008', link1: 'https://pan.xunlei.com/s/VOEbgnKfYUdaC_xsb12rKi_8A1?pwd=pzyg#', link2: '#' },
    { name: 'AutoCAD 2007', link1: 'https://pan.xunlei.com/s/VOEbguf29WExOYsEE_pjz3c1A1?pwd=tgtf#', link2: '#' },
    { name: 'AutoCAD 2006', link1: 'https://pan.xunlei.com/s/VOEbh0fwy4gOxWn5uYzVYTsLA1?pwd=zezy#', link2: '#' },
    { name: 'AutoCAD 2005', link1: 'https://pan.xunlei.com/s/VOEbh8SEHOlVD9uHyIm2Mud-A1?pwd=hbsk#', link2: '#' },
    { name: 'AutoCAD 2004', link1: 'https://pan.xunlei.com/s/VOEbhG0FHTqVnGx-4AZjJvX0A1?pwd=abyh#', link2: '#' },

    { name: 'Revit 2025', link1: 'https://pan.xunlei.com/s/VNv2wbx9ViPDZJnmTOwAn91zA1?pwd=wnu8#', link2: '#' },
    { name: 'Revit 2024', link1: 'https://pan.xunlei.com/s/VNrOtmlNHRrfIS2BMJozJcPTA1?pwd=fvzx#', link2: '#' },

    { name: '3ds max 2025', link1: 'https://pan.xunlei.com/s/VNudtv_Du7HmrImYf-QpVSSOA1?pwd=9cg2#', link2: '#' },
    { name: '3ds max 2024', link1: 'https://pan.xunlei.com/s/VNo2IKdmuQjsmR6LqTH1iHYQA1?pwd=jspn', link2: '#' },

    { name: 'office 2024', link1: 'https://pan.xunlei.com/s/VOEOA0u1yW52-XDWc3olEygYA1?pwd=jpmf#', link2: '#' },
    { name: 'office 2021', link1: 'https://pan.xunlei.com/s/VOEOAFk-aKWSHPujNYOs1Un0A1?pwd=xqf2#', link2: '#' },
    { name: 'office 2019', link1: 'https://pan.xunlei.com/s/VOEOAMK9cl5bUtA6PbiCN3c8A1?pwd=ifh4#', link2: '#' },
    { name: 'office 2016', link1: 'https://pan.xunlei.com/s/VOEOAV8WaMAPYfBmNUWEmaSaA1?pwd=7tmp#', link2: '#' },
    { name: 'office 2013', link1: 'https://pan.xunlei.com/s/VOEOA_cJH8BxNc3RmMicavT3A1?pwd=qmqf#', link2: '#' },
    { name: 'office 2010', link1: 'https://pan.xunlei.com/s/VOEOAdspgsCSIcgWPMHwccEaA1?pwd=2nnq#', link2: '#' },
    { name: 'office 2007', link1: 'https://pan.xunlei.com/s/VOEOAhYVgsCSIcgWPMHwcdjiA1?pwd=pzs5#', link2: '#' },
    { name: 'office 2003', link1: 'https://pan.xunlei.com/s/VOEOAnT42DfsshQRcQZIIuH6A1?pwd=4idw#', link2: '#' },
    { name: 'Visio 2024', link1: 'https://pan.xunlei.com/s/VOEODo5afRqzzzOvoSDeizjFA1?pwd=mxej#', link2: '#' },
    { name: 'Visio 2021', link1: 'https://pan.xunlei.com/s/VOEODwPtaMAPYfBmNUWEngR7A1?pwd=4zdj#', link2: '#' },
    { name: 'Visio 2019', link1: 'https://pan.xunlei.com/s/VOEOE-DUioJcCuL_jdeVxouvA1?pwd=n2mz#', link2: '#' },
    { name: 'Visio 2016', link1: 'https://pan.xunlei.com/s/VOEOEOoMaKWSHPujNYOs2q5qA1?pwd=gb3b#', link2: '#' },
    { name: 'Visio 2013', link1: 'https://pan.xunlei.com/s/VOEOEoRQ2DfsshQRcQZIKE85A1?pwd=47gj#', link2: '#' },
    { name: 'Visio 2010', link1: 'https://pan.xunlei.com/s/VOEOF00xr1lcxE2OFLLB3r1uA1?pwd=d2xk#', link2: '#' },
    { name: 'Visio 2007', link1: 'https://pan.xunlei.com/s/VOEOF4oY42_olNdWrscSbFfHA1?pwd=a2k3#', link2: '#' },
    { name: 'Project 2024', link1: 'https://pan.xunlei.com/s/VOEOGV08yW52-XDWc3olH0s9A1?pwd=c975#', link2: '#' },
    { name: 'Project 2021', link1: 'https://pan.xunlei.com/s/VOEQfhYxaMAPYfBmNUWFtf_2A1?pwd=frfs#', link2: '#' },
    { name: 'Project 2019', link1: 'https://pan.xunlei.com/s/VOEQfmpcr1lcxE2OFLLC7p8DA1?pwd=m26x#', link2: '#' },
    { name: 'Project 2016', link1: 'https://pan.xunlei.com/s/VOEQfryKaMAPYfBmNUWFtgWmA1?pwd=4w8n#', link2: '#' },
    { name: 'Project 2013', link1: 'https://pan.xunlei.com/s/VOEQfxIVcEk8UexqnhlEPW66A1?pwd=n7ef#', link2: '#' },
    { name: 'Project 2010', link1: 'https://pan.xunlei.com/s/VOEQg0INDOAkeHJQzQaaU2lXA1?pwd=5pxk#', link2: '#' },
    { name: 'Project 2007', link1: 'https://pan.xunlei.com/s/VOEQg3h_gsCSIcgWPMHximRwA1?pwd=mnc5#', link2: '#' },

    { name: 'WinRAR', link1: 'https://pan.quark.cn/s/f575bc74c42c', link2: '#' },
    { name: 'Bandizip', link1: 'https://pan.quark.cn/s/fd768678a466', link2: '#' },
    { name: '7-zip', link1: 'https://pan.quark.cn/s/1ce8ccfb6d2f', link2: '#' },
    // ... 更多数据项
];

// 获取DOM元素
const searchBox = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('dropdown');

// 显示搜索建议
function showSuggestions(query) {
    suggestionsDiv.innerHTML = '';
    const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    if (filteredData.length > 0) {
        suggestionsDiv.style.display = 'block';
        filteredData.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.addEventListener('click', () => {
                // 这里可以处理点击建议项的逻辑，比如填充搜索框或跳转等
                // 本例中仅做演示，不实际跳转或填充
            });

            const suggestionContent = document.createElement('div');
            suggestionContent.className = 'suggestion-content';
            suggestionContent.textContent = item.name;
            suggestionItem.appendChild(suggestionContent);

            const suggestionButtons = document.createElement('div');
            suggestionButtons.className = 'suggestion-buttons';

            const viewButton1 = document.createElement('a');
            viewButton1.className = 'a'
            viewButton1.textContent = '下载';
            viewButton1.onclick = () => window.location.href = item.link1;
            suggestionButtons.appendChild(viewButton1);

            const viewButton2 = document.createElement('a');
            viewButton2.className = 'a'
            viewButton2.textContent = '教程';
            viewButton2.onclick = () => window.location.href = item.link2;
            suggestionButtons.appendChild(viewButton2);

            suggestionItem.appendChild(suggestionButtons);
            suggestionsDiv.appendChild(suggestionItem);
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

// 监听搜索框输入事件
searchBox.addEventListener('input', (event) => {
    showSuggestions(event.target.value);
});

// 点击页面其他地方时隐藏建议框
document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target)) {
        suggestionsDiv.style.display = 'none';
    }
});