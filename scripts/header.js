const typed = new Typed(".text", {
  strings: ["Student", "Beginner Frontend Developer", "Beginner Web Developer"],
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

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function setActiveLink() {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
