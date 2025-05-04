document.addEventListener("DOMContentLoaded", function () {
  let swiperInstance;

  function initSwiperIfLargeScreen() {
    const isLargeScreen = window.innerWidth >= 1024;

    if (isLargeScreen && !swiperInstance) {
      swiperInstance = new Swiper(".multiple-slide-carousel", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
          nextEl: "#slider-button-right",
          prevEl: "#slider-button-left"
        }
      });
    } else if (!isLargeScreen && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  initSwiperIfLargeScreen();
  window.addEventListener("resize", initSwiperIfLargeScreen);
});
