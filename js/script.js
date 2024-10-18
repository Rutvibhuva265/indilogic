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
  // $('.default-zoom').css('width', '100%');

  // $('.img-content').hover(function() {
  //     // Increase width of hovered item and decrease width of others
  //     $('.img-content').not(this).stop().css('width', '60%');
  //     $(this).stop().css('width', '100%');
  // }, function() {
  //     // Reset all items to default sizes
  //     $('.img-content').stop().css('width', '60%');
  //     $('.default-zoom').stop().css('width', '100%');
  // });


  $(".service-box").click(function() {
      var parent = $(this).closest(".service-sec .services").find(".flip-box");
      parent.toggleClass("flipped");
  });

  // Click on the service-box-flip to flip back to the front
  $(".service-box-flip").click(function() {
      var parent = $(this).closest(".service-sec .services").find(".flip-box");
      parent.toggleClass("flipped"); // Remove the 'flipped' class to flip back
  });

  










  $(".our-service").click(function() {
    var popupId = $(this).data("popup"); // Get popup ID from data-popup attribute
    $("#" + popupId).fadeIn(); // Show popup with the corresponding ID
});

// Close the popup when the close button is clicked
$(".close-btn").click(function() {
    $(this).closest(".popup-overlay").fadeOut(); // Close the popup
});

// Close popup if clicking outside the content area
$(".popup-overlay").click(function(event) {
    if (!$(event.target).closest(".popup-content").length) {
        $(this).fadeOut(); // Close the popup
    }
});

});

// Get the current URL path
const currentPath = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll(".nav-links");

// Loop through each link and add 'active' class to the matching link
navLinks.forEach(link => {
  const href = link.getAttribute("href");

  // If the link's href matches the current page path
  if (href === currentPath) {
    link.classList.add("active");
  }
});


// document.querySelectorAll('a[href^="service.html/#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href').split('#')[1];
//       document.getElementById(targetId).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });


$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {  // Adjust the value as needed
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});
window.onscroll = function() {
  var header = document.getElementById("mainHeader");
  if (window.pageYOffset > 50) {  // Adjust the value as needed
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
};


$('a[href^="#"]').on('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior

  var target = $(this.hash); // Get the target section
  if (target.length) { // Ensure target exists
    var headerHeight = $('#mainHeader').outerHeight(); // Get current header height
    var offset = headerHeight; // Use the full header height for offset

    // Animate scroll
    $('html, body').animate({
      scrollTop: target.offset().top - offset // Scroll to section, offset by header height
    }, 600); // Animation duration
  }
});


$(window).on('scroll', function() {
  var scrollPosition = $(window).scrollTop(); // Get the current scroll position
  var headerHeight = $('#mainHeader').outerHeight(); // Get the current header height (whether 100px or 60px)

  // Loop through each section and check if it's in view
  $('.fifth-sec .service-sec').each(function() {
    var sectionOffset = $(this).offset().top; // Get the section offset from the top of the page

    if (scrollPosition >= sectionOffset - headerHeight && 
        scrollPosition < sectionOffset + $(this).outerHeight() - headerHeight) {
      // Add the border color to the section when it's in view
      $(this).addClass('active-border');
    } else {
      // Remove the border color if it's not in view
      $(this).removeClass('active-border');
    }
  });
});