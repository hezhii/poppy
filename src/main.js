import animatedScrollTo from 'animated-scrollto';

import './sass/index.scss';
import './img/default_background.jpg';
import {throttle} from './utils';

// Navbar
const hamburger = document.getElementById('navbarTogglerBtn');
const navbarCollapse = document.getElementById('navbarCollapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navbarCollapse.classList.toggle('show');
});

// Back to Top
const backTopBnt = document.getElementById('backTop');
const doAfterScroll = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  if (top > 0) {
    backTopBnt.style.display = 'flex';
  } else {
    backTopBnt.style.display = 'none';
  }
};
window.onscroll = throttle(doAfterScroll, 200);

// scroll to
const userAgent = navigator.userAgent;
const scrollElement = userAgent.indexOf('Firefox') > -1 || userAgent.indexOf('Chrome') > -1 ?
  document.documentElement :
  document.body;
backTopBnt.addEventListener('click', () => {
  animatedScrollTo(
    scrollElement,
    0,
    500,
  );
});
doAfterScroll();