
var tl= gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    opacity: 0,
    delay: 0.5,
    duration:1,
    stagger:0.2,
})

tl.from("#content h3", {
  x: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

tl.from("img", {
  x: 10,
  opacity: 0,
  rotate: 45,
  duration: 1,
  stagger: 0.2,
});