/* eslint-disable */
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  $('.js-fancybox-content').fancybox({
    touch: false,
    afterLoad: freeze,
    afterClose: unfreeze,
    buttons: [
      "close"
    ],
    baseClass: 'fancybox_style_content',
    smallBtn: false,
    infobar: false,
    arrows: false,
    animationDuration: 300,
    transitionDuration: 300,
    btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close">' +
        '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 1.04335L6.6898 5.64645L6.33624 6L6.6898 6.35355L11.2929 10.9566L10.9566 11.2929L6.35355 6.6898L6 6.33624L5.64645 6.6898L1.04335 11.2929L0.707107 10.9566L5.3102 6.35355L5.66376 6L5.3102 5.64645L0.707107 1.04335L1.04335 0.707107L5.64645 5.3102L6 5.66376L6.35355 5.3102L10.9566 0.707107L11.2929 1.04335Z"/></svg>' +
        "</button>",
    },
  });

  $('.js-fancybox').fancybox({
    touch: false,
    afterLoad: freeze,
    afterClose: unfreeze,
    buttons: [
      "close"
    ],
    smallBtn: false,
    infobar: false,
    arrows: false,
    animationDuration: 300,
    transitionDuration: 300,
    btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close">' +
        '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 1.04335L6.6898 5.64645L6.33624 6L6.6898 6.35355L11.2929 10.9566L10.9566 11.2929L6.35355 6.6898L6 6.33624L5.64645 6.6898L1.04335 11.2929L0.707107 10.9566L5.3102 6.35355L5.66376 6L5.3102 5.64645L0.707107 1.04335L1.04335 0.707107L5.64645 5.3102L6 5.66376L6.35355 5.3102L10.9566 0.707107L11.2929 1.04335Z"/></svg>' +
        "</button>",
    },
  });

  $('.js-fancybox-dark').fancybox({
    touch: false,
    afterLoad: freeze,
    afterClose: unfreeze,
    buttons: [
      "close"
    ],
    baseClass: 'fancybox_style_dark',
    smallBtn: false,
    infobar: false,
    arrows: false,
    animationDuration: 300,
    transitionDuration: 300,
    btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close">' +
        '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 1.04335L6.6898 5.64645L6.33624 6L6.6898 6.35355L11.2929 10.9566L10.9566 11.2929L6.35355 6.6898L6 6.33624L5.64645 6.6898L1.04335 11.2929L0.707107 10.9566L5.3102 6.35355L5.66376 6L5.3102 5.64645L0.707107 1.04335L1.04335 0.707107L5.64645 5.3102L6 5.66376L6.35355 5.3102L10.9566 0.707107L11.2929 1.04335Z"/></svg>' +
        "</button>",
    },
  });
}
/* eslint-enable */
