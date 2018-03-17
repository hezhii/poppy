import 'bootstrap'
import '../scss/main.scss'
import SmoothScroll from 'smooth-scroll'

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
  new SmoothScroll('#backTop')

  function changeNavBarStyle () {
    const $nav = $('#nav')
    const $btn = $('#searchBtn')
    const $backTop = $('#backTop')
    if ($(document).scrollTop() > 0) {
      $nav.removeClass('navbar-dark')
      $nav.addClass('bg-light')
      $btn.removeClass('btn-outline-light')
      $btn.addClass('btn-outline-primary')
      $backTop.css('display', 'flex')
    } else {
      $nav.removeClass('bg-light')
      $nav.addClass('navbar-dark')
      $btn.removeClass('btn-outline-primary')
      $btn.addClass('btn-outline-light')
      $backTop.css('display', 'none')
    }
  }

  changeNavBarStyle()
  $(window).scroll(throttle(changeNavBarStyle, 200))
})