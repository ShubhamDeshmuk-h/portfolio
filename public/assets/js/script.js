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



document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle
  const navToggler = document.querySelector('[data-nav-toggler]');
  const navbar = document.querySelector('[data-navbar]');
  
  navToggler?.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Scroll reveal
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

  window.addEventListener('scroll', revealElements);
});