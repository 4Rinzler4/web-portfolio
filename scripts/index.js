function init() {
  import("./global.js");
  import("./header.js");
  import("./galery.js");
  import("./galery2.js");
  import("./contact.js");

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function setActiveLink() {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 450;
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
}
const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) {
    init(); 
  }
});