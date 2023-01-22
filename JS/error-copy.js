document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('text-to-copy')
    .addEventListener('click', function () {
      var selection = window.getSelection()
      var range = document.createRange()
      range.selectNodeContents(this)
      selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      alert('Text copied: ' + this.innerHTML)
    })
})
