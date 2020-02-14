/* eslint-disable */
// https://idangero.us/swiper/api/
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export function slider() {
  $('.js-slider').each(function () {
    const
      block = $(this);

    const mySlider = new Swiper(block, {
      loop: true,
      speed: 700,
      autoplay: false,
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      roundLengths: true,
      freeMode: false,
      simulateTouch: false,
      navigation: {
        nextEl: block.find('.slider__button_next'),
        prevEl: block.find('.slider__button_prev'),
      },
    });
  });
}

/* eslint-enable */
