/* eslint-disable */
const $ = window.$;

import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

const
  burger = $(document).find('.js-burger-menu'),
  burgerButton = $(document).find('.js-burger-button'),
  headerBlock = $(document).find('.header');

export function showBurger() {
  freeze();

  headerBlock.addClass('has-burger-opened');
  burgerButton.addClass('is-active');
  burger.show(0, function () {
    $(this).addClass('is-active');
  });
}

export function closeBurger() {
  burger.removeClass('is-active');
  burgerButton.removeClass('is-active');
  headerBlock.removeClass('has-burger-opened');
  unfreeze();

  setTimeout(() => {
    burger.hide();
  }, globalOptions.animationDuration);
}

export function burgerMenu() {
  $(document).on('click', '.js-burger-button, .header__link', function () {
    if ($(window).width() < globalOptions.sizes.sm) {
      burger.hasClass('is-active') ? closeBurger() : showBurger();
    }
  });

  $(window).resize(function () {
    if ($(window).width() >= globalOptions.sizes.sm && burger.hasClass('is-active')) {
      closeBurger();
    }
  });
}

export function header() {
  const
    w = $(window);

  w.on('load scroll', function () {
    const isFixed = headerBlock.hasClass('is-fixed');

    if (w.scrollTop() > 0) {
      if (!isFixed) headerBlock.addClass('is-fixed');
    } else {
      if (isFixed && !$('html').hasClass('is-fixed')) headerBlock.removeClass('is-fixed');
    }
  });

  burgerMenu();
}
/* eslint-enable */
