$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

const introTimeline = gsap.timeline( { 
   
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "bottom 50%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    },
    ease: "slowmo"
    
  })
  .to('.scrollBox', { opacity: 1, duration: 0.5 })
  .to('.scrollBox', { opacity: 0, duration: 0.5 }, 0.5)
  .to('.firstBox', { x: -481, duration: 2 }, 0.5)
  .to('.sideText', { x: 481, duration: 2 }, 0.5);

disableScroll();

function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

const menuIconMorphTimeline = gsap.timeline({reversed: true, defaults: {ease: "slowmo"}})
.to('.menuLineTop', {rotation: 90, 
    duration: 1, 
    transformOrigin: "0 0",
})
.to('.menuLineMid', { opacity:0,
}, "-=1")
.to('.menuLineBot', {rotation: 180, 
    duration: 1, 
    transformOrigin: "0 0",
}, "-=1");

var widthToggleFlag = false;
$('#menuIcon').click(function() {

  widthToggleFlag = !widthToggleFlag;
  var toggleWidth = widthToggleFlag ? Math.min((viewport().width), 481) + "px" : "0px";
  $(".menu").css({"width": toggleWidth}); 
  if(menuIconMorphTimeline.reversed())
  {
    $('.menuIconOutStroke').addClass('menuIconInStroke').removeClass('menuIconOutStroke');
    menuIconMorphTimeline.play();
  }
  else
  {
    $('.menuIconInStroke').addClass('menuIconOutStroke').removeClass('menuIconInStroke');
    menuIconMorphTimeline.reverse();
  }

});

window.onresize = function() {
  var currentWidth = !widthToggleFlag ? 0 : Math.min((viewport().width), 481) + "px";
  $(".menu").css({"width": currentWidth});
}

function scrollPageTo(index){
  $('#menuIcon').click();

  var eleToScrollTo = "#intro"
  if(index==1)
    eleToScrollTo = "#works"
  else if(index==2)
    eleToScrollTo = "#journey"
  else if(index==3)
    eleToScrollTo = "#about"

  gsap.to(window, {duration: 2, scrollTo: eleToScrollTo});

}

$(".resume").click(function() {
  var url = $(this).find("a").attr('href');
  window.open(url, '_blank');
  return false;
});