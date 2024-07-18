gsap.registerPlugin(ScrollTrigger);

gsap.from('.menu',{
    opacity : 0,
    delay : 2,
})

const timer = setInterval(() =>{
    gsap.to('.loader',{
        opacity : 0,
        duration :1,
    })
    
},1500)

gsap.to('.image-top', {
    y: '50%',
    scrollTrigger: {
        trigger: ".page1",
        start: "center center",
        end: "bottom center",
        scrub: 2,
    }
});

gsap.to('.image-bottom', {
    y: '-50%',
    scrollTrigger: {
        trigger: ".page1",
        start: "center center",
        end: "bottom center",
        scrub: 2,
    }
});

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

tl2.to('#om',{
    y : '100%',
    scrollTrigger : {
        trigger : '.page1-part2',
        scroller : 'body',
        start : 'bottom bottom',
        end : 'bottom 40%',
        scrub : 1,
    }
})
tl2.to(['#c','#m'],{
    y : '100%',
    scrollTrigger : {
        trigger : '.page1-part2',
        scroller : 'body',
        start : 'bottom 98%',
        end : 'bottom 40%',
        scrub : 1,
    }
})
tl2.to(['#o','#n1'],{
    y : '100%',
    scrollTrigger : {
        trigger : '.page1-part2',
        scroller : 'body',
        start : 'bottom 96%',
        end : 'bottom 40%',
        scrub : 1,
    }
})
tl2.to(['#u','#n2'],{
    y : '100%',
    scrollTrigger : {
        trigger : '.page1-part2',
        scroller : 'body',
        start : 'bottom 94%',
        end : 'bottom 40%',
        scrub : 1,
    }
})


const tl3 = gsap.timeline();

tl3.to('#contact', {
    x: "-5vw",
    duration: 0.15,
})
.to('#service', {
    x: "-10vw",
    duration: 0.15,
})
.to('#studio', {
    x: "-15vw",
    duration: 0.15,
})
.to('#work', {
    x: "-20vw",
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