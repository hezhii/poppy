(() => {
  // Navbar
  const hamburger = document.getElementById('navbarTogglerBtn');
  const navbarCollapse = document.getElementById('navbarCollapse');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navbarCollapse.classList.toggle('show');
  });
})();
