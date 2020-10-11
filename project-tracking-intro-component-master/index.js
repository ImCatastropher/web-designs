//
//
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


$(".button-1").on("click",()=>{

  $(".button-1").css("visibility","hidden");
  $(".button-2").css("visibility","visible");
  $(".background").css("height","600px");
  $(".navbar-nav").css("box-shadow", "0 0 20px hsl(230, 11%, 40%)");
  // $(".navbar-nav").css("transition", "height 0.4s ease-in");
});

$(".button-2").on("click",()=>{
  $(".button-2").css("visibility","hidden");
  $(".button-1").css("visibility","visible");
  $(".background").css("height","450px");
  $(".navbar-nav").css("box-shadow", "none");
});
