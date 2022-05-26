
// FUNCTION Mobile Nav Menu Open/Close

const menuBtn = document.querySelector('.fa-solid');
const menuList = document.querySelector('.menu-list');
const contactBtn = document.querySelector('.contact-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-xmark');
  menuList.classList.toggle('hidden');
  contactBtn.classList.toggle('hidden');
});


// Menu Item Close 
const menuLink = document.querySelectorAll('.menu-link');
for (let i = 0; i < menuLink.length; ++i) {
    menuLink[i].addEventListener('click', () => {
        menuBtn.classList.add('fa-bars');
        menuBtn.classList.remove('fa-xmark');
        menuList.classList.add('hidden');
        contactBtn.classList.add('hidden');
      }
      )};


  // Card Section Expand/Close
const servicesDesc = document.querySelectorAll(".services-description");

const expandIcon = document.querySelectorAll(".expand-icon");
for (let i = 0; i < expandIcon.length; ++i) {
 expandIcon[i].addEventListener("click", () => {
  expandIcon[i].classList.toggle("fa-minus");
  expandIcon[i].classList.toggle("fa-plus");
  servicesDesc[i].classList.toggle("hidden");
 });
}



// FOOTER
// Footer year date automation
const footerDate = document.getElementById('date');
const currentYear = new Date().getFullYear();
document.getElementById('date').textContent = `${currentYear } All Rights Reserved.`;