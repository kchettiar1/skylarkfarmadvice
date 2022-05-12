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
    navItems.classList.remove('zero-height');
    navOpen = true;
  } else {
    navItems.classList.remove('expand');
    navItems.classList.add('collapse');
    navOpen = false;
  }
})

// Nav Menu Anchor Items Close Functionality
const navLink = document.querySelectorAll('.nav-link');

for (var i = 0; i < navLink.length; ++i) {
  navLink[i].addEventListener('click', () => {
    navItems.classList.remove('expand');
    navItems.classList.add('zero-height');
    navOpen = false;
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  )};


  // Services Expand/Collapse
const stewardshipDescription = document.querySelectorAll('.stewardship-description');
console.log(stewardshipDescription);

  const stewardshipLink = document.querySelectorAll('.stewardship-link');
  console.log(stewardshipLink);

for (var i = 0; i < stewardshipLink.length; ++i) {
  stewardshipLink[i].addEventListener('click', () => {
    stewardshipDescription.classList.toggle('openDescription');
  }
  )};


// FOOTER
// Footer year date automation
const footerDate = document.getElementById('date');
const currentYear = new Date().getFullYear();
document.getElementById('date').textContent = `${currentYear } All Rights Reserved.`;