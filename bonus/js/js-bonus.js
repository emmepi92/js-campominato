function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bombHtmlInput = document.getElementById("bombs");
var maxOfNumsHtmlInput = document.getElementById("level");
var outputStillInGame = document.getElementById("still-in-game");
var outputHtml = document.getElementById("result");
var nextStepButton = document.getElementById("next-step");
var settingInputButton = document.getElementById("setting-button")
var toHide = document.getElementsByClassName("to-hide");
var invisible = document.getElementById("invisible");
var numUserInput = document.getElementById("input-bomb");

var bombList = [];
var userList = [];
var bomb = 0; 
var maxOfNums = 0;
var userScore = 0;
var nextStep = true;
var gameOver = false;


settingInputButton.addEventListener('click', function () {

    bomb = parseInt(bombHtmlInput.value);
    bombHtmlInput.disabled = true;

    maxOfNums = parseInt(maxOfNumsHtmlInput.value);
    maxOfNumsHtmlInput.disabled = true;

    document.getElementById("max").innerHTML = "Inserisci un numero compreso fra 1 e " + maxOfNums;
    document.getElementById("win-if").innerHTML ='Se arrivi a  ' + (maxOfNums -  bomb) + ', hai vinto!';

    invisible.style.display = 'block';
    settingInputButton.style.display = 'none';

    while (bombList.length < bomb) {
        var randomBomb = getRandomNum(1, maxOfNums);
        if (!bombList.includes(randomBomb)) {
            bombList.push(randomBomb);
        }
    }
    console.log(bombList.sort()); // debug
})

nextStepButton.addEventListener('click', function () {

    var userNum = parseInt(numUserInput.value);

    if (userNum > 0 && userNum <= maxOfNums && !isNaN(userNum)) {

        if (!userList.includes(userNum)) {

            if (!bombList.includes(userNum)) {
                userList.push(userNum);
                userScore = userList.length;
                outputStillInGame.innerHTML = "Bomba evitata!!!"

                if (userList.length === maxOfNums - bombList.length) {
                    //hai vinto, bisogna inserirlo qui xke qui si aggiorna la 
                    //lunghezza dell'array, se inserito prima, fa fare un 'click' a vuoto
                    gameOver = true;
                }

            } else {
                //hai perso
                gameOver = true;
                nextStep = false;
            }

        } else {
            alert('Non puoi inserire lo stesso numero')
        }

    } else {
        alert('Devi inserire un numero fra 1 e ' + maxOfNums);
    }


    // solo se hai vinto o perso, nascondi quello che non ti serve
    if (gameOver) {

        //nascondi
        for (var i = 0; i < toHide.length; i++) {
            toHide[i].style.display = ("none");
        }
        outputStillInGame.style.padding = ("24px");

        if (nextStep) {
            //hai vinto
            outputStillInGame.innerHTML = 'Complimenti, Hai vinto!!! <br/> Hai evitato tutte le bombe!!!';
        } else {
            //hai perso
            outputStillInGame.innerHTML = "Bomba Beccata :( <br/> Hai perso :("
        }
    }

    numUserInput.value = ''; // reset

    outputHtml.innerHTML = userScore;
})
