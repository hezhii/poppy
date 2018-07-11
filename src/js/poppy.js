(() => {
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

  backTopBnt.addEventListener('click', function() {
    animatedScrollTo(
      document.documentElement || document.body,
      0,
      500,
    );
  });
  doAfterScroll();
})();

function throttle(fn, delay) {
  let timer = null;
  let preTime = Date.now();
  return function() {
    const cxt = this;
    const args = arguments;
    const curTime = Date.now();

    if (timer) {
      clearTimeout(timer);
    }

    if (curTime - preTime > delay) {
      fn.apply(cxt, args);
      preTime = curTime;
    } else {
      timer = setTimeout(function() {
        fn.apply(cxt, args);
      }, delay);
    }
  };
}
