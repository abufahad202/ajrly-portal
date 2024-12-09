document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });


  $('.owl-carousel').owlCarousel({
    loop:false,
    rtl:true,
    margin:30,
    nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const myCarouselElement = document.querySelector('#site-carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: true,
  ride:"carousel",
  pause:"hover",
  wrap:true,
})







});