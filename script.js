gsap.registerPlugin(ScrollTrigger);


gsap.from('.menu',{
    opacity : 0,
    delay : 2,
})

// loader animation starts
const timer = setInterval(() =>{
    gsap.to('.loader',{
        opacity : 0,
        duration :1,
    })
    
},1500)
// loader animation ends 


// image animation starts
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

let videosReady = 0;

function checkAndPlayVideos() {
    videosReady++;
    if (videosReady === 2) {
        video1.currentTime = 0;
        video2.currentTime = 0;
        video1.play();
        video2.play();
    }
}

video1.addEventListener('loadeddata', checkAndPlayVideos, { once: true });
video2.addEventListener('loadeddata', checkAndPlayVideos, { once: true });
// image animation ends

// page1 animation starts
const tl = gsap.timeline();
const page1ScrollTrigger = {
    trigger : ".page1",
    scroller : "body",
    start : "center center",
    end : 'bottom center',
    scrub : 2,
}
tl.to('.page1-part1',{
    y : "-100%",
    delay : 1,
    scrollTrigger : page1ScrollTrigger,
})
tl.to('.page1-part2',{
    delay : 1,
    y : "100%",
    scrollTrigger : page1ScrollTrigger,
})
tl.from('.page1-inside-container1 h1',{
    opacity : 0,
    scrollTrigger : page1ScrollTrigger
})

gsap.to('.page1',{
    scrollTrigger : {
        trigger : '.page1',
        scroller : 'body',
        start: "bottom bottom",
        end : "bottom -200%",
        pin : true,
    }
})

const tl2 = gsap.timeline();

tl2.to('#om', {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom bottom',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to(['#c', '#m'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 98%',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to(['#o', '#n1'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 96%',
        end: 'bottom 40%',
        scrub: 1,
    }
})
.to(['#u', '#n2'], {
    y: '100%',
    scrollTrigger: {
        trigger: '.page1-part2',
        scroller: 'body',
        start: 'bottom 94%',
        end: 'bottom 40%',
        scrub: 1,
    }
});

// page1 inside animations starts here
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1-inside-container2-image1",
        scroller: 'body',
        start: "top 45%",
        end: "top -50%",
        scrub: 3,
    }
});

tl4.from('.page1-inside-container2-image1', {
    width: "20vw",
    height: "40vh",
    y: "200%",
    duration: 1,
})
.to('.page1-inside-container2-image1', {
    y: 0,
    duration: 1,
    delay: 1
})
.to('.page1-inside-container2-image1', {
    y: "-200%",
    duration: 1,
    width: "20vw",
    height: "40vh",
});

// page1 inside animations ends here

// page 1 ends here

// menu animations starts here

const tl3 = gsap.timeline();

tl3.to('#contact', {
    x: "-7em",
    duration: 0.15,
})
.to('#service', {
    x: "-14em",
    duration: 0.15,
})
.to('#studio', {
    x: "-21em",
    duration: 0.15,
})
.to('#work', {
    x: "-28em",
    duration: 0.15,
});

tl3.pause();

let flag = false;
document.querySelector('.menu').addEventListener('click', () => {
    if (!flag) {
        tl3.play();
    } else {
        tl3.reverse();
    }
    flag = !flag;
});
// menu animation ends here 