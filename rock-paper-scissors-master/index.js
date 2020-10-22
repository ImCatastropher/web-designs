
const rules = document.getElementById("rules");
console.log(rules);

const paper = document.getElementsByClassName("paper")[0];
const but1 = document.getElementById("play-again");

const choice = document.getElementsByClassName("position");
console.log(choice); 
var count = 0;

for(i = 0; i<choice.length;i++){
    choice[i].addEventListener("click", play);
}

function play(){
    var random = Math.floor(Math.random()*3+1);
        console.log();
        console.log(random);
        this.style.top = "-20%";
        this.style.left = "-20%";
        choice[random-1].style.top = "-20%";
        choice[random-1].style.left = "-20%";
        const pick = document.getElementsByClassName("pick-container");
        pick[0].style.visibility="hidden";
        const score = document.getElementsByClassName("score-time");
        score[0].style.visibility="visible";
        const player = document.getElementById("position-player");
        player.innerHTML = this.outerHTML;
        const house = document.getElementById("position-house");
        house.innerHTML = choice[random-1].outerHTML; 

        if(this.classList.contains("scissor") && choice[random-1].classList.contains("scissor") || this.classList.contains("paper") && choice[random-1].classList.contains("paper") || this.classList.contains("rock") && choice[random-1].classList.contains("rock")){
            var dec1 = document.getElementById("draw");
            dec1.style.display = "block";
            var dec2 = document.getElementById("win");
            dec2.style.display = "none";
            var dec3 = document.getElementById("loss");
            dec3.style.display = "none";
        }
        else if(this.classList.contains("paper") && choice[random-1].classList.contains("rock") || this.classList.contains("scissor") && choice[random-1].classList.contains("paper") || this.classList.contains("rock") && choice[random-1].classList.contains("scissor")){
            var dec1 = document.getElementById("loss");
            dec1.style.display = "none";
            var dec2 = document.getElementById("win");
            dec2.style.display = "block";
            var dec3 = document.getElementById("draw");
            dec3.style.display = "none";
            count=count+1;
        }
        else{
            var dec1 = document.getElementById("loss");
            dec1.style.display = "block";
            var dec2 = document.getElementById("win");
            dec2.style.display = "none";
            var dec3 = document.getElementById("draw");
            dec3.style.display = "none";
            count=count-1;
        }
        console.log(count);
       var myScore =  document.getElementById("score-update");
       myScore.innerText = count;  
       but1.addEventListener("click", ()=>{
        const pick = document.getElementsByClassName("pick-container");
        pick[0].style.visibility="visible";
        const score = document.getElementsByClassName("score-time");
        score[0].style.visibility="hidden";
        const paper = document.getElementsByClassName("paper");
        paper[0].style.top = "10%";
        paper[0].style.left = "20%";
        const scissor = document.getElementsByClassName("scissor");
        scissor[0].style.top = "10%";
        scissor[0].style.right = "20%";
        scissor[0].style.left = "55%";
        const rock = document.getElementsByClassName("rock");
        rock[0].style.bottom = "15%";
        rock[0].style.left = "38%";
        rock[0].style.top = "53%";
       });
    
}
