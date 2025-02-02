function toggleMenu(){
  const navMenu = document.getElementById('NavBar');
  const menuIcon = document.querySelector('.firstLine');
  const menuIcon2 = document.querySelector('.secondLine');
  
  
  
  navMenu.classList.toggle('active');
  menuIcon.classList.toggle('active');
  menuIcon2.classList.toggle('active');
}



let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navBar");

  if (window.scrollY > lastScrollY) {
    // Scroll Down → Hide Navbar
    navbar.classList.add("hidden");
  } else {
    // Scroll Up → Show Navbar
    navbar.classList.remove("hidden");
  }

  // Add background when scrolling
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollY = window.scrollY; // Update last scroll position
});