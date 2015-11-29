var $svg = $("svg");

$(function(){
  spring();
})

$("button").click(spring);

function spring() {
  var tension = $(".tension").text();
  var friction = $(".friction").text();
  
  $svg.velocity({
    "width" : "30%"
    
  }, 500, [tension,friction]).velocity("reverse");
}