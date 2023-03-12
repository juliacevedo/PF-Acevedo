document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('menu_on').addEventListener('click', ()=>{
        var elementos = document.querySelectorAll('body'); 
        elementos.forEach(function(e) {
           e.classList.toggle('visible_menu')
    })})
});


const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
})

$("#myCarousel").carousel();

$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});
