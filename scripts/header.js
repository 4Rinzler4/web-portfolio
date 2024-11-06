const typed = new Typed(".text", {
    strings: ["Student", "Begginer Frontend Developer", "Begginer Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active'); 
    menuToggle.classList.toggle('active'); 
});

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); 
        menuToggle.classList.remove('active'); 
    });
});

window.addEventListener('scroll', () => {
  if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
  }
});

let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('sections');
  
  function setActiveLink(){
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offseheight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {

      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(item => item.classList.remove('.active'));
      this.classList.add('active');
    });
  });
});

