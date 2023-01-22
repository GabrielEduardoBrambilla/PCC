// Arquivo js responsável em alterações no formulario de cadastro de atividades

// recebe o elemento tipoAtividade do formulario cadastro de atividades
let tipoAtiv = document.getElementById('tipoAtividade')

// recebe o elemento url do formulario cadastro de atividades
let url = document.getElementById('url')

// Verifica se ouve alteração no tipo de atividade que o ususário deseja inserir.
// Caso haja, ele observa o tipo de atividade escolhido e altera o tipo do input.
tipoAtiv.addEventListener('change', function (e) {
  if (tipoAtiv.value == 'videoAula') {
    url.setAttribute('type', 'text')
  } else {
    url.setAttribute('type', 'file')
  }
})

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
