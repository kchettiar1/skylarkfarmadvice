// Menu-toggle
const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})

// Nav Menu Animation
navItems = document.querySelector('.nav-items');
let navOpen = false;

menuBtn.addEventListener('click', () => {
  if (!navOpen) {
    navItems.classList.remove('collapse');
    navItems.classList.add('expand');
    navOpen = true;
  } else {
    navItems.classList.remove('expand');
    navItems.classList.add('collapse');
    navOpen = false;
  }
})

// FOOTER
// Footer year date automation
const footerDate = document.getElementById('date');
const currentYear = new Date().getFullYear();
document.getElementById('date').textContent = `${currentYear } All Rights Reserved.`;