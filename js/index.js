document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elementos = document.querySelectorAll('body'); 
        elementos.forEach(function(e) {
           e.classList.toggle('visible_menu')
    })})
});
document.addEventListener("DOMContentLoaded" , () => {
  document.getElementById('myCarousel').addEventListener('click', ()=>{
  $('#myCarousel').carousel('next')
})  
})
