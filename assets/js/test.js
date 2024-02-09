$(window).scroll(function(){
  let position = $(this).scrollTop();
  if (position >= 600){
    $('.about-img').addClass('fromLeft')
    $('.about-text').addClass('fromRight')
  }else{
    $('.about-img').removeClass('fromLeft')
    $('.about-text').removeClass('fromRight')
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