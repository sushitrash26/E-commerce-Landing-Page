let tl = gsap.timeline()

tl.from(".lmain", {
    x: -100,
    opacity : 0,
    delay : 1,
    duration : 0.5
})
tl.from(".content", {
    x : 100,
    opacity : 0,
    delay : 0,
    duration: 0.5,
    rotate : 360
})
 
tl.from(".rnav ul, .lnav ul", {
    y: -10,
    opacity : 0,
    delay : 0.5,
    duration : 0.5
})

tl.from(".content", {
    x : 10,
    opacity : 0,
    delay
})
