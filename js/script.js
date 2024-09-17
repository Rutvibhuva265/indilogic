document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.querySelector('.main-menu');

  menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class to show/hide the menu
    mainMenu.classList.toggle('active');
    
    // Change icon to close (X) when menu is open, revert to hamburger when closed
    if (mainMenu.classList.contains('active')) {
      menuToggle.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7886 1L0.999992 14.7886" stroke="black"/>
        <path d="M14.7886 15L0.999992 1.21142" stroke="black"/>
        </svg>`;
    } else {
      menuToggle.innerHTML = `<svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 1H22.5M0.5 12H22.5M0.5 6.5H22.5" stroke="black"/>
        </svg>`;
    }
  });
});



$(document).ready(function() {
  // Set default zoom for the first img-content
  $('.default-zoom').css('width', '100%');

  $('.img-content').hover(function() {
      // Increase width of hovered item and decrease width of others
      $('.img-content').not(this).stop().css('width', '60%');
      $(this).stop().css('width', '100%');
  }, function() {
      // Reset all items to default sizes
      $('.img-content').stop().css('width', '60%');
      $('.default-zoom').stop().css('width', '100%');
  });
});