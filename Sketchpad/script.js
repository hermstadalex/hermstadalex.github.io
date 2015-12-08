$(document).ready(function(){


  for(var i = 0; i < 16; i++) {
    for(var j = 0; j < 16; j++){
      $('#wrapper').append("<div class=line1></div>");
    }
    $('#wrapper').append("<br class=break>");
  }

  var startingDimensions = 600 / 16;

  $('.line1').css({'width': startingDimensions + "px", 'height': startingDimensions + "px"});

  $('.line1').on('mouseenter', function(){
    $(this).css({'background-color': 'blue'}) 
  });

  $('#button').on('click', function(){
    var dimensions = 600;

    var squareDimensions = prompt("Enter Number of Squares on a Side: ");

    var blockDimension = 600 / squareDimensions;
    
    $('.line1').remove();
    $('.break').remove();

    for(var i = 0; i < squareDimensions; i++) {
      for(var j = 0; j < squareDimensions; j++) {
        $('#wrapper').append("<div class=line1></div>");
      }
      $('#wrapper').append("<br class=break>");
    }

   $('.line1').on('mouseenter', function(){
    $(this).css({'background-color': 'blue'}) 
   });

    $('.line1').css({'width': blockDimension + "px", 'height': blockDimension + "px" });
    $('.line1').css({'background-color': 'orange'});

  });

  $('#button').on('mouseenter', function(){
    $('#button').css({'background-color': '#00BFFF'});
  });

  $('#button').on('mouseleave', function(){
    $('#button').css({'background-color': 'green'});
  });

  $('#button').on('mousedown', function(){
    $('#button').css({'font-size': '10px'});
  });

  $(document).on('mouseup', function(){
    $('#button').css({'font-size': '20px'})
  });

});
