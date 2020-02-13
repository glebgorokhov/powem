/* eslint-disable */
const $ = window.$;

export function header() {
  const
    w = $(window),
    header = $('.header');

  w.scroll(function () {
    const isFixed = header.hasClass('is-fixed');

    if (w.scrollTop() > 0) {
      if (!isFixed) header.addClass('is-fixed');
    } else {
      if (isFixed) header.removeClass('is-fixed');
    }
  });
};
/* eslint-enable */
