document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');

  // Show popup on page load
  popup.style.visibility = 'visible';

  // Close popup on button click
  closeBtn.addEventListener('click', function() {
      popup.style.visibility = 'hidden';
  });

  // Initialize Swiper for Cards
  let swiperCards = new Swiper(".gallery-cards", {
      loop: true,
      loopedSlides: 5,
      cssMode: true,
      effect: 'fade',
  });

  // Initialize Swiper for Thumbnails
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
  swiperCards.controller.control = swiperThumbs;
});
