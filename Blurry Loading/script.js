const loadText = document.querySelector('.loading-text'),
  bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.textContent = `${load}%`
  loadText.style.opacity = load.map(0, 100, 1, 0)
  bg.style.filter = `blur(${load.map(0, 100, 40, 0)}px)`
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
