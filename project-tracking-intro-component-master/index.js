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

var count=0;
$(".navbar-toggler").on("click",()=>{
  if(count==0){
    $(".button-1").css("visibility","hidden");
    $(".button-2").css("visibility","visible");
    $(".background").css("height","600px");
    // $(".navbar-nav").css("transition", "height 0.4s ease-in");
    count+=1;
  }
  else{
      $(".button-2").css("visibility","hidden");
      $(".button-1").css("visibility","visible");
      $(".background").css("height","450px");
      count=0;
  }
});
