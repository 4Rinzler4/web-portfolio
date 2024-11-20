const typed = new Typed(".text", {
  strings: ["Student", "Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

let lastScrollY = window.scrollY;
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});