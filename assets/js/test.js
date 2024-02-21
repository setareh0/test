$(window).scroll(function(){
  let position = $(this).scrollTop();
  if (position >= 200){
    $('.about-img').addClass('fromLeft')
    $('.about-text').addClass('fromRight')
  }else{
    $('.about-img').removeClass('fromLeft')
    $('.about-text').removeClass('fromRight')
  }
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
})
$(document).ready(function() {

  var counters = $(".counter-value");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 30);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VyYW5pLWluc3RhIiwiYSI6ImNsczRkeG1sZjE4bzUybHJ3NHAxZ2U1bnoifQ.fcA9C0kBCK2-dqNCOhUY6g';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [51.39, 35.70],
    zoom: 11.15
});