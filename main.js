// Show/hide nav on menu icon
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show-nav');
});

// Home page slider
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.slider-btn');
let currentSlide = 0;
// Manual navigation
const showSlide = (currentSlide) => {
  slides.forEach((slide) => {
    slide.classList.remove('active-slide');
    btns.forEach((btn) => {
      btn.classList.remove('active-slider-btn');
    });
  });
  slides[currentSlide].classList.add('active-slide');
  btns[currentSlide].classList.add('active-slider-btn');
};
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    showSlide(i);
    currentSlide = i;
  });
});
// Autoplay
setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 10000);
