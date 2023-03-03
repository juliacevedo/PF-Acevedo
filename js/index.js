document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elementos = document.querySelectorAll('body'); 
        elementos.forEach(function(e) {
           e.classList.toggle('visible_menu')
    })})
});
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elemento = document.querySelectorAll('nav'); 
        elemento.forEach(function(e) {
            e.classList.toogle('color')  
    })})
});
