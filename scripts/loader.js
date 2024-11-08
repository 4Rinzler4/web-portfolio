window.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    setTimeout(() => {
      preloader.style.display = "none"; 
      content.style.display = "block";  
    }, 2000); 
  });
  