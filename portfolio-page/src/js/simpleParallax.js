import simpleParallax from "simple-parallax-js";

const image = document.querySelector(".FV");

new simpleParallax(image, {
  delay: 0,
  orientation: "down",
  scale: 1.2,
});
