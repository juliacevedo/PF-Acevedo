const button= document.getElementById('button-menu')
const navclose = document.getElementById('nav')

button.addEventListener('click',() => {
  button.classList.toggle('close')
  navclose.classList.toggle('visible_menu')
})

navclose.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navclose.classList.remove('visible_menu')
    toggleButton.classList.remove('close')
  }
})
