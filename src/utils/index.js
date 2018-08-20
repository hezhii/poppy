export function throttle(fn, delay) {
  let timer = null;
  let preTime = Date.now();
  return () => {
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
      timer = setTimeout(() => {
        fn.apply(cxt, args);
      }, delay);
    }
  };
}
