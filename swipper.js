
// swipper slider related scripts 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // For mobile screens (up to 480px)
    375: {
      slidesPerView: 1,
      centeredSlides: false
    },
    // For tablets and smaller screens (up to 768px)
    768: {
      slidesPerView: 2,
      centeredSlides: false
    },
    // For larger screens (up to 1080px)
    1080: {
      slidesPerView: 4,
      centeredSlides: false
    },
  }
});
