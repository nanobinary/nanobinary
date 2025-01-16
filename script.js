function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  const menuIcon = document.querySelector('.nav_line_container');
  navMenu.classList.toggle('active');
  menuIcon.classList.toggle('active');
}