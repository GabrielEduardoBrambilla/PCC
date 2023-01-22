// Arquivo js responsável em alterações no formulario de cadastro de atividades

// recebe o elemento tipoAtividade do formulario cadastro de atividades
let tipoAtiv = document.getElementById('tipoAtividade')

// recebe o elemento url do formulario cadastro de atividades
let url = document.getElementById('url')

// Get the select element and the file input element
var select = document.getElementById('tipoAtividade')

// id = 1 file input
var input1 = document.getElementById('input-1')
// id =2 video aula
var input2 = document.getElementById('input-2')
// id = 3 material de apoio
var input3 = document.getElementById('input-3')
// Add an event listener to the select element
select.addEventListener('change', function () {
  // Get the selected option's value
  var selectedOption = this.options[this.selectedIndex].value

  // Check if the selected option's value is the one you want
  if (selectedOption === 'videoAula') {
    // Show the file input
    input1.style.display = 'none'
    input2.style.display = 'block'
    input3.style.display = 'none'
  } else if (selectedOption === 'materialApoio') {
    // Hide the file input
    input1.style.display = 'block'
    input2.style.display = 'none'
    input3.style.display = 'none'
  } else if (selectedOption === 'projeto') {
    // Hide the file input
    input1.style.display = 'none'
    input2.style.display = 'none'
    input3.style.display = 'block'
  }
})

// Verifica se ouve alteração no tipo de atividade que o ususário deseja inserir.
// Caso haja, ele observa o tipo de atividade escolhido e altera o tipo do input.
// tipoAtiv.addEventListener('change', function (e) {
//   if (tipoAtiv.value == 'videoAula') {
//     url.setAttribute('type', 'text')
//   } else {
//     url.setAttribute('type', 'file')
//   }
// })

// DRAG AND DROP
const fileDropArea = document.getElementById('file-drop-area')
const fileInput = document.getElementById('file-input')

fileDropArea.addEventListener('dragover', handleDragOver, false)
fileDropArea.addEventListener('drop', handleFileSelect, false)
fileInput.addEventListener('change', handleFileSelect, false)

function handleDragOver(event) {
  event.stopPropagation()
  event.preventDefault()
  fileDropArea.classList.add('drag-over')
}

function handleFileSelect(event) {
  event.stopPropagation()
  event.preventDefault()
  fileDropArea.classList.remove('drag-over')

  const files = event.dataTransfer
    ? event.dataTransfer.files
    : event.target.files
  for (let i = 0; i < files.length; i++) {
    console.log(files[i].name)
  }
}
