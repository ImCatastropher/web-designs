

$("a").hover(function(){
  $(this).css("text-decoration","underline")
},function(){
  $(this).css("text-decoration","none")
});

$("#schedule-button").hover(function(){
  $(this).css("opacity","0.8");
}, function(){
  $(this).css("opacity","1");
});

$("#schedule-button").active(function(){
  $(this).addClass("active");
});
