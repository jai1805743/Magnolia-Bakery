document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: "#slider-button-right",
      prevEl: "#slider-button-left"
    }
  });
});