const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed:1000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  autoplay: {
    delay: 1000,
  },


  loop: true,

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },



  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1240: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
    
  // }
});