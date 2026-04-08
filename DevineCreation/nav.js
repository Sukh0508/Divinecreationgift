// Mobile Navbar Toggle with Icon Toggle
document.addEventListener("DOMContentLoaded", function() {
  const openNav = document.querySelector(".open-nav");
  const closeNav = document.querySelector(".close-nav");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle menu and icons (icons change via CSS sibling combinator)
  function toggleMenu() {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  }

  // Close menu and reset icons (CSS handles icon animation)
  function closeMenu() {
    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  // Click on hamburger icon to toggle menu
  if (openNav) {
    openNav.addEventListener("click", function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Click on close icon to close menu
  if (closeNav) {
    closeNav.addEventListener("click", function(e) {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Click on nav links to close menu (mobile only)
  navItems.forEach(link => {
    link.addEventListener("click", function() {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Close menu when window resizes to desktop size
  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(e) {
    if (window.innerWidth <= 768 && navLinks.classList.contains("active")) {
      if (!e.target.closest(".nav-container") && !e.target.closest(".nav-links")) {
        closeMenu();
      }
    }
  });
});