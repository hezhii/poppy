import 'bootstrap'
import '../scss/main.scss'
import SmoothScroll from 'smooth-scroll'

/**
 * 节流函数
 *
 * @param fn
 * @param delay
 * @returns {Function}
 */
function throttle (fn, delay) {
  let timer = null
  let preTime = Date.now()
  return function () {
    const cxt = this
    const args = arguments
    const curTime = Date.now()

    if (timer) {
      clearTimeout(timer)
    }

    if (curTime - preTime > delay) {
      fn.apply(cxt, args)
      preTime = curTime
    } else {
      timer = setTimeout(function () {
        fn.apply(cxt, args)
      }, delay)
    }
  }
}

$(function ($) {
  const doAfterScroll = () => {
    const $backTop = $('#backTop')
    if ($(document).scrollTop() > 0) {
      $backTop.css('display', 'flex')
    } else {
      $backTop.css('display', 'none')
    }
  }
  new SmoothScroll('#backTop')
  $(window).scroll(throttle(doAfterScroll, 200))

  const hideNewsletter = localStorage.getItem('newsletterHide')
  if (hideNewsletter) {
    $('.newsletter-box').hide()
  }
  $('#newsletterHide').click(() => {
    $('.newsletter-box').hide()
    localStorage.setItem('newsletterHide', true)
  })
})
