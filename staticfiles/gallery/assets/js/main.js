/*=============== SWIPER JS GALLERY ===============*/

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');

  // Show popup on page load
  popup.style.visibility = 'visible';

  // Close popup on button click
  closeBtn.addEventListener('click', function() {
      popup.style.visibility = 'hidden';
  });
});

let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: 'fade',
});
  
let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;