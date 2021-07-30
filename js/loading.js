$(document).ready(function() {
    var tl = gsap.timeline({defaults: {ease: "slowmo"}})
    .to(".loadingDiv", {opacity: 0, duration: 2, onComplete: function() {
        $(".loadingDiv").addClass("hidden");
    }})
    .from(".firstBox", {x: -50, opacity: 0, duration: 3})
    .from(".sideText", {x: 50, opacity: 0, duration: 3}, "-=3")
    .from(".menuLineTop", {y: -150, opacity:0, duration: 2}, "-=3")
    .from(".menuLineMid", {x: 0, opacity:0, duration: 2}, "-=3")
    .from(".menuLineBot", {y: 0, opacity:0, duration: 2}, "-=3")
    .from(".scrollDown", {y: 50, opacity: 0, duration: 0.5, onComplete: function() {
        document.getElementsByClassName('scrollDown')[0].classList.add("bounceUpDown");
        enableScroll();
    }});

    $('body').click(randomizeColors);
    randomizeColors();
});