const btn = document.querySelector('.btn'),
  input = document.querySelector('.input'),
  searchPanel = document.querySelector('.search-panel')

btn.addEventListener('click', () => {
  searchPanel.classList.toggle('active')
  input.focus()
})
