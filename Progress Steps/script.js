const prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    progressLine = document.querySelector('#progress'),
    circles = document.querySelectorAll('.circle')
let currentActive = 1

prevBtn.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--
        progressLine.style.width = `${((currentActive - 1) / (circles.length - 1)) * 100}%`
        if (currentActive === 1) {
            prevBtn.disabled = true
        } else if (currentActive < 4) {
            nextBtn.disabled = ''
        }
    }
    circles[currentActive].classList.remove('active')
})
nextBtn.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++
        progressLine.style.width = `${((currentActive - 1) / (circles.length - 1)) * 100}%`
        prevBtn.disabled = ''
        circles[currentActive - 1].classList.add('active')
        if (currentActive === circles.length) {
            nextBtn.disabled = true
        }
    }
})
