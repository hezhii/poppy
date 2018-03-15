import 'bootstrap'
import '../scss/main.scss'

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
  $(window).scroll(throttle(function () {
    const $nav = $('#nav')
    const $btn = $('#searchBtn')
    if ($(document).scrollTop() > 0) {
      $nav.removeClass('navbar-dark')
      $nav.addClass('bg-light')
      $btn.removeClass('btn-outline-light')
      $btn.addClass('btn-outline-primary')
    } else {
      $nav.removeClass('bg-light')
      $nav.addClass('navbar-dark')
      $btn.removeClass('btn-outline-primary')
      $btn.addClass('btn-outline-light')
    }
  }, 300))
})