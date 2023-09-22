function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
// document.addEventListener("mousemove", function(dets){
//   crsr.style.left = dets.x+ 2+"px"
//   crsr.style.top = dets.y+ 2+"px"
//   console.log("dagfsfgyg")
// })

window.addEventListener("mousemove", function(dets){
  gsap.to(crsr, {
    x: dets.clientX,
    y: dets.clientY,
    duration: .7,
    ease: Sine,
    delay: .09
  })
})

// crsr.addEventListener("mouseenter", function(e){
//   e.stopPropagation();
// })
var soundON = document.querySelector(".page1 video")
var soundOn = document.getElementsByTagName("video")[0];

soundOn.addEventListener("mouseenter", function(dets){
  crsr.innerHTML = "Sound on"
  crsr.style.fontSize = "13px"
  crsr.style.width = "90px"
  crsr.style.borderRadius = "10px"
  crsr.style.textAlign = "center"
})

soundOn.addEventListener("mouseleave", function(dets){
  crsr.style.height = "15px"
  crsr.style.width = "15px"
  crsr.style.borderRadius = "50%"
  crsr.innerHTML = ""
})

function toggleMute(){
  soundOn.muted = !soundOn.muted;
}


gsap.from(".page1 h1,.page1 h2", {
  y: 20,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 10%",
    end: "top -10%",
    scrub: 3
  }
})

tl.to(".page1 h1", {
  x: -100
},"anim")

tl.to(".page1 h2", {
  x: 100
},"anim")

tl.to(".page1 video", {
  width: "90%"
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -110%",
    end: "top -115%",
    scrub: 3
  }
})

tl2.to(".main", {
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -400%",
    end: "top -430%",
    scrub: 3
  }
})

tl3.to(".main", {
  backgroundColor: "#0F0D0D"
})

document.querySelectorAll(".box").forEach(function(e){


  e.addEventListener("mouseleave", function(dets){
    gsap.to(e.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    })
  })

  e.addEventListener("mousemove" , function(dets){
    var diffrance = dets.clientY -  e.getBoundingClientRect().top; 
    var lestDiff = dets.clientX - e.getBoundingClientRect().left;

    gsap.to(e.querySelector("img"), {
      opacity: 1,
      ease: Power3, 
      top: diffrance,
      left: lestDiff,
    })
  })
})


var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
var nav = document.querySelector("#nav")

h4.forEach(function(e){
  e.addEventListener("mousemove", function(){
    purple.style.display = "block"
    purple.style.opacity = "1"
    var text = e.getAttribute("data-tag");
    purple.innerHTML =  `${text}`
    // console.log(text)     
    
  })
  nav.addEventListener("mouseleave", function(){
    purple.style.display = "none"
    purple.style.opacity = "0"
    h4.innerHTML = "marquee"
  })
})