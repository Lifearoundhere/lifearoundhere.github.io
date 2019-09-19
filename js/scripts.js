if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}


document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.parallax')
  const instances = M.Parallax.init(elems)
  const nav = document.querySelectorAll('.sidenav')
  const navInstances = M.Sidenav.init(nav)
  const tooltip = document.querySelectorAll('.tooltipped')
  const tooltipInstances = M.Tooltip.init(tooltip)


  const TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length
    const fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    const that = this
    let delta = 200 - Math.random() * 100

    if (this.isDeleting) { delta /= 2 }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  window.onload = function () {
    const elements = document.getElementsByClassName('typewrite')
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type')
      const period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    const css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}'
    document.body.appendChild(css)
  }
})

