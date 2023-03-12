document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elementos = document.querySelectorAll('body'); 
        elementos.forEach(function(e) {
           e.classList.toggle('visible_menu')
    })})
});

document.addEventListener("DOMContentLoaded"), () => {
  const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
}
