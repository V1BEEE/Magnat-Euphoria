const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    loop: true,
    freeMode: true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false,
     // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


