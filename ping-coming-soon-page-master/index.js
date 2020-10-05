
const email = $(".input-type");
console.log(email);
$(".input-button").on("click", (e) => {
    e.preventDefault();
    var e=email[0].value;
    if(e===""){
        error(email[0]);
    }
    else if(!(isEmail(e))){
        error(email[0]);
    }
    else{
        success(email[0]);
    }

});

function error(input){
    const parent = input.parentElement;
    const element1= parent.querySelector(".input-type");
    element1.classList.add("error");
    element1.classList.remove("success");
    const element2= parent.querySelector(".p-tag");
    element2.style.visibility = "visible";
    const symbolw = parent.querySelector(".icon-w");
    symbolw.style.visibility = "visible";
    const symbolr = parent.querySelector(".icon-r");
    symbolr.style.visibility = "hidden";
}

function success(input){
    const parent = input.parentElement;
    const element1= parent.querySelector(".input-type");
    element1.classList.add("success");
    element1.classList.remove("error");
    const symbolw = parent.querySelector(".icon-w");
    symbolw.style.visibility = "hidden";
    const symbolr = parent.querySelector(".icon-r");
    symbolr.style.visibility = "visible";
    const element2= parent.querySelector(".p-tag");
    element2.style.visibility = "hidden";
}

function isEmail(input){
    return /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/.test(input);
  }