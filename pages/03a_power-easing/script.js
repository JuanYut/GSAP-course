import gsap from "gsap";

const button = document.querySelector(".btn");
const toast = document.querySelector(".toast");
const card = document.querySelector(".card");

gsap.to(".btn", {
  y: -20,
  duration: 1,
  ease: "power4.out",
  repeat: -1,
});

gsap.from(".toast", {
  x: -300,
  duration: 2,
  ease: "power2.out",
  repeat: -1,
});

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 3,
  ease: "power3.inOut",
  repeat: -1,
});
