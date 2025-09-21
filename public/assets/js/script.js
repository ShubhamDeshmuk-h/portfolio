'use strict';

/**
 * add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER ACTIVE STATE ON SCROLL
 */
const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);

/**
 * SMOOTH SCROLLING FOR NAVIGATION LINKS
 */
const navbarLinks = document.querySelectorAll('.navbar-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('nav-active');
    }
  });
});

/**
 * BUTTON FUNCTIONALITY
 */
document.addEventListener('DOMContentLoaded', () => {
  // "See My Works" button - scroll to projects section
  const seeWorksBtn = document.querySelector('.btn-primary');
  if (seeWorksBtn) {
    seeWorksBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const projectsSection = document.querySelector('.project');
      if (projectsSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = projectsSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  // "Contact Me" button - scroll to contact section
  const contactBtn = document.querySelector('.btn-secondary');
  if (contactBtn && contactBtn.textContent.includes('Contact')) {
    contactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.querySelector('.contact');
      if (contactSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  // Scroll reveal animation
  const reveals = document.querySelectorAll('[data-reveal]');
  
  const revealElements = () => {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const revealTop = element.getBoundingClientRect().top;
      
      if (revealTop < windowHeight - 100) {
        element.classList.add('revealed');
      }
    });
  }

  // Initial reveal check
  revealElements();
  window.addEventListener('scroll', revealElements);

  // Close mobile menu when clicking on overlay
  if (overlay) {
    overlay.addEventListener('click', function() {
      navbar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('nav-active');
    });
  }

  // Close mobile menu when clicking on navbar links
  const mobileNavLinks = document.querySelectorAll('.navbar-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('nav-active');
      }
    });
  });
});

/**
 * FORM SUBMISSION HANDLING (Removed for Formspree)
 */
/*
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email_address');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}
*/

/**
 * ENHANCED SCROLL EFFECTS
 */
let ticking = false;

function updateScrollEffects() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero-banner');
  
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
  
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick);