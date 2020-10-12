
var email = $("#email");

// tabs changes

$(".item-1").on("click", (e)=>{
  $("#content-1").css("display","grid");
  $("#content-2").css("display","none");
  $("#content-3").css("display","none");
  $(".item-1 hr").css("display","block");
  $(".item-2 hr").css("display","none");
  $(".item-3 hr").css("display","none");
});

$(".item-2").on("click", (e)=>{
  $("#content-2").css("display","grid");
  $("#content-1").css("display","none");
  $("#content-3").css("display","none");
  $(".item-2 hr").css("display","block");
  $(".item-1 hr").css("display","none");
  $(".item-3 hr").css("display","none");
});

$(".item-3").on("click", (e)=>{
  $("#content-3").css("display","grid");
  $("#content-1").css("display","none");
  $("#content-2").css("display","none");
  $(".item-3 hr").css("display","block");
  $(".item-1 hr").css("display","none");
  $(".item-2 hr").css("display","none");
});

// drop-down

var count = 0;

$("#b-1").on("click", (e)=>{
  if(count==0){
    var parent = $("#b-1")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "block";
    $("#b-1 .i-1").css("visibility","hidden");
    $("#b-1 .i-2").css("visibility","visible");
    count+=1;
  }
  else{
    var parent = $("#b-1")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "none";
    $("#b-1 .i-2").css("visibility","hidden");
    $("#b-1 .i-1").css("visibility","visible");
    count=0;
  }
});
$("#b-2").on("click", (e)=>{
  if(count==0){
    var parent = $("#b-2")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "block";
    $("#b-2 .i-1").css("visibility","hidden");
    $("#b-2 .i-2").css("visibility","visible");
    count+=1;
  }
  else{
    var parent = $("#b-2")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "none";
    $("#b-2 .i-2").css("visibility","hidden");
    $("#b-2 .i-1").css("visibility","visible");
    count=0;
  }
});
$("#b-3").on("click", (e)=>{
  if(count==0){
    var parent = $("#b-3")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "block";
    $("#b-3 .i-1").css("visibility","hidden");
    $("#b-3 .i-2").css("visibility","visible");
    count+=1;
  }
  else{
    var parent = $("#b-3")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "none";
    $("#b-3 .i-2").css("visibility","hidden");
    $("#b-3 .i-1").css("visibility","visible");
    count=0;
  }
});
$("#b-4").on("click", (e)=>{
  if(count==0){
    var parent = $("#b-4")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "block";
    $("#b-4 .i-1").css("visibility","hidden");
    $("#b-4 .i-2").css("visibility","visible");
    count+=1;
  }
  else{
    var parent = $("#b-4")[0].parentElement;
    (parent.querySelectorAll(".hidden-part"))[0].style.display = "none";
    $("#b-4 .i-2").css("visibility","hidden");
    $("#b-4 .i-1").css("visibility","visible");
    count=0;
  }
});

// collapse bar for small screens

$(".navbar-toggler").on("click",()=>{
  if(count==0){
    $(".img-1").css("visibility","hidden");
    $(".img-2").css("visibility","visible");
    count+=1;
  }
  else{
      $(".img-2").css("visibility","hidden");
      $(".img-1").css("visibility","visible");
      count=0;
  }
});


//email validation

$("#contact").on("click",(event)=>{
  event.preventDefault();
  var e = email[0].value;
  if(e===""){
    error(email[0]);
  }
  else if(!(isEmail(e))){
    error(email[0]);
  }
  else{success(email[0]);}
});

function error(input){
  const parent = input.parentElement;
  const para = parent.querySelector(".error");
  para.style.visibility = "visible";
  var icon = parent.querySelector(".error-icon");
  icon.style.visibility = "visible";
  var icon = parent.querySelector(".correct-icon");
  icon.style.visibility = "hidden";
}

function success(input){
  var parent = input.parentElement;
  var para = parent.querySelector(".error");
  para.style.visibility = "hidden";
  var icon = parent.querySelector(".error-icon");
  icon.style.visibility = "hidden";
  var icon = parent.querySelector(".correct-icon");
  icon.style.visibility = "visible";
}

function isEmail(input){
  return /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/.test(input);
}
