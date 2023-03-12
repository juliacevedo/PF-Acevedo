document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elementos = document.querySelectorAll('body'); 
        elementos.forEach(function(e) {
           e.classList.toggle('visible_menu')
    })})
});

$('#toggle').addClass('active');
let toggle = document.querySelector('#toggle');
toggle.classList.add('active');

$( document ).ready(function(){
  $('.carousel').carousel({
    interval: 2000
  })
});
document.addEventListener("DOMContentLoaded", function(event) {
  let carousel = document.querySelector('.carousel')
});