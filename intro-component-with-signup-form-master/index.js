
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");



$("#form").on("submit", (e)=>{
  e.preventDefault();
  checkInputs();
});

function checkInputs(){
  var f=fname.value.trim();
  var l=lname.value.trim();
  var e=email.value.trim();
  var p=password.value.trim();
  if(f===""){
    error(fname);
  }else{
    success(fname);
  }
  if(l===""){
    error(lname);
  }else{
    success(lname);
  }
  if(e===""){
    error(email);
  }
  else if (!(isEmail(e))) {
    error(email);
  }
  if(p===""){
    error(password);
  }
  else if (!(isPassword(p))) {
    error(password);
  }
  else{
    success(password);
  }

  if(success(fname) && success(lname) && success(email) && success(password)){
    var text = document.getElementById("text");
    text.innerHTML = "Details Submitted";
    text.style.color = "hsl(154, 59%, 51%)";
    text.style.fontSize = "16px";
    text.style.fontWeight = "bold";
  }
}

function error(input){
  const errored = input.parentElement;
  const message=errored.querySelector(".p-tag");
  message.style.visibility = "visible";
  var symbolw = errored.querySelector(".icon-w");
  symbolw.style.visibility = "visible";
  var symbolr = errored.querySelector(".icon-r");
  symbolr.style.visibility = "hidden";

}

function success(input){
  const success= input.parentElement;
  const message=success.querySelector(".p-tag");
  message.style.visibility = "hidden";
  const symbolr = success.querySelector(".icon-r");
  symbolr.style.visibility = "visible";
  const symbolw = success.querySelector(".icon-w");
  symbolw.style.visibility = "hidden";
  return true;
}

function isEmail(input){
  return /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/.test(input);
}

function isPassword(input){
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_*$]).{8,16}/.test(input);
}
