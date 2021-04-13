"use strict";

window.onload.setTimeout(
  scrollTo({
    left: 0,
    top: 768,
    behavior: "smooth",
  }),
  3000
);

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     // This hides the address bar:
//     window.scrollTo(0, 1);
//   }, 0);
// });

const parallax = function (e) {
  this.querySelectorAll(".layers").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * +speed) / 1000;
    const y = (window.innerHeight - e.pageY * +speed) / 1500;
    layer.style.transform = `translateX(${x}rem) translateY(${y}rem)`;
  });
};

document.addEventListener("mousemove", parallax);

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", (e) => {
    // e.preventDefault();
    //Toggle NAV
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
    });
    //Burger Animation
    burger.classList.toggle("burger-active");
  });
};
navSlide();
