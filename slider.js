document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
      const swiperNovos = new Swiper(".swiper-novos", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next-novos",
          prevEl: ".swiper-button-prev-novos",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
      const swiperVendidos = new Swiper(".swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      console.error(
        "Swiper não está definido. Verifique se a biblioteca está corretamente importada."
      );
    }
  });