const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

burger.addEventListener('click', function(){
  burger.classList.toggle('open');
  header.classList.toggle('open');
})





const swiper = new Swiper(".swiper1", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next-main",
    prevEl: ".swiper-button-prev-main",
  },

  autoplay: {
    delay: 10000,
  },
});

const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});
