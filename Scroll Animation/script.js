const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const bottomTrigger = (window.innerHeight / 5) * 4
  console.log(bottomTrigger)
  boxes.forEach((box) => {
    if (bottomTrigger > box.getBoundingClientRect().top) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
