/* eslint-disable */
// При клике на .js-anchor страница плавно скроллится к блоку, указанному в его href
const $ = window.$;

export default function anchor() {
  $(document).on('click', '.js-anchor', function (e) {
    e.preventDefault();

    const
      target = $($(this).attr('href')),
      zeroOffset = target.hasClass('section_dark') || target.hasClass('offer') || target.hasClass('vacancies') || target.hasClass('contacts');

    if (target.length > 0) {
      setTimeout(() => {
        $('body, html').stop().animate({
          scrollTop: target.offset().top - ($(window).width() > globalOptions.sizes.sm ? 70 : 39) - (zeroOffset ? 0 : ($(window).width() > globalOptions.sizes.sm ? 81 : 40)),
        }, 1000, 'swing');
      }, 1);
    }
  });
}
/* eslint-enable */
