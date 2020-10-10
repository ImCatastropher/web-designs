var email = $("#email");

$(".my-button").on("click",(event)=>{
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
  const para = parent.querySelector(".hidden-para");
  para.style.visibility = "visible";
  var icon = parent.querySelector(".icon");
  icon.style.visibility = "visible";
}

function success(input){
  var parent = input.parentElement;
  var para = parent.querySelector(".hidden-para");
  para.style.visibility = "hidden";
  var icon = parent.querySelector(".icon");
  icon.style.visibility = "hidden";
}

function isEmail(input){
  return /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/.test(input);
}
