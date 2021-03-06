// Active scrolling
const links = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', (event) => {
  // Change top nav active link if scrolled on another section
  let fromTop = window.scrollY;
  links.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
  // Change header background on scroll
  checkHeader();
});

// Change header background if not on top of homepage
const header = document.querySelector('header');
function checkHeader() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('dark-back');
  } else {
    header.classList.remove('dark-back');
  }
}

// Show/hide nav on menu icon
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show-nav');
  if (navbar.classList.contains('show-nav')) {
    header.classList.add('dark-back');
  } else {
    checkHeader();
  }
});

// Hide nav when link is clicked
links.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show-nav');
    checkHeader();
  });
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

// Gallery filtering
const filterButtons = document.querySelectorAll('.galery-btn');
const galeryImages = document.querySelectorAll('.galery-card');
function filterSelection(filter) {
  // Change active button
  filterButtons.forEach((btn) => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
    if (btn.classList.contains(filter)) {
      btn.classList.add('active');
    }
  });
  // Filter images
  galeryImages.forEach((card) => {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    }
    if (!card.classList.contains(filter) && filter != 'all') {
      card.classList.add('hidden');
    }
  });
}
