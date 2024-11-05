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
