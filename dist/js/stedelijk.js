$(document).ready(function() {
  
  $(".cell").click(function() {
    if ($(this).hasClass("paper")) {
      $(this).removeClass("paper").addClass("ink");
    } else {
      $(this).removeClass("ink").addClass("paper");
    };
  });
  
  $(".cell").mousemove(function(event){            
    var relX = event.pageX - $(this).offset().left;
    var relY = event.pageY - $(this).offset().top;
    var thisWidth = $(this).width();
    var thisHeight = $(this).height();
    var quad1WidthMax = thisWidth / 2
    var quad1HeightMax = thisHeight / 2
    
    // var relBoxCoords = "(" + relX + "," + relY + ")";
    // var relBoxCoordsRound = Math.round(10, 10);
    $(".mouse-cords-x").text(relX);
    $(".mouse-cords-y").text(relY);
    $(".mouse-width").text(thisWidth);
    $(".mouse-height").text(thisHeight);
    
    if (relX <= quad1WidthMax){
      $(".corner").text("L");
    } else {
      $(".corner").text("R");
    }
   if (relY <= quad1HeightMax){
      $(".corner2").text("T");
    } else {
      $(".corner2").text("D");
    }
    
    // $(".corner").text("TR");
    // $(".corner").text("BL");
    // $(".corner").text("BR");
    
    
    
  });
});