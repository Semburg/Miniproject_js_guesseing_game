
const counterIsFour = document.getElementById("four")
const counterIsFive = document.getElementById("five")
const counterIsSix = document.getElementById("six")
const counterIsCustom = document.getElementById("custom_num_check")
const counterSetCustom = document.getElementById("set_try_counter")
const displayCustom = document.getElementById("custom_num_form")
const guessNumber = document.getElementById("guess_number");

const formTryCount = document.getElementById("form_try_count");
const gameIn = document.getElementById("game_in");

const counterTries = document.getElementById("counter_tries");
const triesTotal = document.getElementById("tries_total");
const btn = document.getElementById("btn");

const flowResults = document.getElementById("flow_results");
const newGame = document.getElementById("new_game");

newGame.style.display = "none"

let randomNumber = Math.floor(Math.random()*100);
let tryCount = 4;
let counter = 1;



function setFour(){
    displayCustom.style.display = "none"
    tryCount = 4;
}
function setFive(){
    displayCustom.style.display = "none"
    tryCount = 5;
}
function setSix(){
    displayCustom.style.display = "none"
    tryCount = 6;
}

function setCustom(){
    tryCount = counterSetCustom.value;
}

function showInputField() {
    counterSetCustom.value = null;
    displayCustom.style.display = "inline-block";

}


function showResult() {

    let currentGuessNum = guessNumber.value
    console.log("guessNum " +currentGuessNum);
    console.log("randomNum "+ randomNumber)
    console.log("iters: " + tryCount);

    form_try_count.style.display = "none";
    gameIn.style.display = "block"
    counterTries.innerHTML = counter;
    triesTotal.innerHTML = tryCount;


    console.log(counter);


    if(counter == tryCount && currentGuessNum != randomNumber) {
        console.log("You lost")
        btn.disabled = true;
        flowResults.innerHTML += `<br> ${counter}. YOU LOST`
        flowResults.style.color = "red";
        newGame.style.display="inline-block"

    }else if(currentGuessNum == randomNumber){
        console.log("CORREXT YOU WON");
        flowResults.style.color = "green";
        btn.disabled = true;

        flowResults.innerHTML +=  `<br> ${counter}. YOU WON`
        newGame.style.display="inline-block"



    } else if(currentGuessNum > randomNumber){
        console.log("You need to guess lower, than " + currentGuessNum)
        flowResults.innerHTML += `${counter}. You need to guess less, than ${currentGuessNum} <br>`

    } else {
        console.log("You need to guess higher, than " + currentGuessNum)
        flowResults.innerHTML += `${counter}. You need to guess higher, than ${currentGuessNum} <br>`

    }
    counter++;
}

