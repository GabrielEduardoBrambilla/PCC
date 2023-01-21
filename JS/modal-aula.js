const btn = document.querySelector('.btn-criar-aula')
const modal = document.getElementById('modal')

// Select the close button
const closeBtnAula = document.querySelector('.close-btn')

// Add a click event listener to the button
btn.addEventListener('click', function () {
  // Show the modal
  modal.style.display = 'block'
})

// Add a click event listener to the close button
closeBtnAula.addEventListener('click', function () {
  // Hide the modal
  modal.style.display = 'none'
})
