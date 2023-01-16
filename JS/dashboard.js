const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none'
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 600px)').matches) {
    sideMenu.style.removeProperty('display')
  }
})
