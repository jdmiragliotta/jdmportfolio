$(document).ready(function() { 
  $('#myCarousel').carousel({ interval: 7000, cycle: true });
 
  $(".fancybox").fancybox();
      
  $("#single_1").fancybox({
    helpers: {
      title : {
        type : 'float'
      }
    }
  });
});