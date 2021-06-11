function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var outputStillInGame = document.getElementById("still-in-game");
var nextStepButton = document.getElementById("next-step");
var bombHtmlInput = document.getElementById("bombs");
var maxOfNumsHtmlInput = document.getElementById("level");
var toHide = document.getElementsByClassName("to-hide");
var settingInputButton = document.getElementById("setting-button")
var invisible = document.getElementById("invisible");
var bombList = [];
var userList = [];
var userScore = 0;
var result = '';
var gameOver = false;
var nextStep = true;


var numInputBomb = 1;
var bomb = 1;
var maxOfNums = 1;


settingInputButton.addEventListener('click', function(){

    bomb = parseInt(bombHtmlInput.value);
    bombHtmlInput.disabled = true;

    maxOfNums = parseInt(maxOfNumsHtmlInput.value);
    maxOfNumsHtmlInput.disabled = true;

    document.getElementById("max").innerHTML ="Inserisci un numero compreso fra 1 e " + maxOfNums;
    
    invisible.style.display ='block';
    settingInputButton.style.display = 'none';

    while (bombList.length < bomb) {
        var computerNum = getRandomNum (1,maxOfNums);
        if (!bombList.includes(computerNum)) {
            bombList.push(computerNum);        
        }
    } 
    console.log(bombList.sort());


})


nextStepButton.addEventListener('click', function() {    

    numInputBomb = document.getElementById("input-bomb");
    var userNum = parseInt(numInputBomb.value);

    if (userList.length < maxOfNums - bombList.length) {        
        
        if (userNum > 0 && userNum <= maxOfNums && !isNaN(userNum)) {
    
            if (!userList.includes(userNum)) {
        
                if (!bombList.includes(userNum)) {
                    userList.push(userNum);
                    userScore = userList.length;                    
                    outputStillInGame.innerHTML = "Bomba evitata!!!"

                    if (userList.length === maxOfNums - bombList.length){
                        //hai vinto, bisogna inserirlo qui xke qui si aggiorna la lunghezza dell'array
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
    }

    // solo se hai vinto o perso, nascondi quello che non ti serve
    if (gameOver) { 

        for (var i = 0; i < toHide.length; i++){    
            toHide[i].style.display = ("none");
        }
    
        outputStillInGame.style.padding = ("24px"); 
    
        if (nextStep) {
            outputStillInGame.innerHTML = 'Complimenti, Hai vinto!!! <br/> Hai evitato tutte le bombe!!!';
            nextStepButton.disabled = true;
        } else {
            outputStillInGame.innerHTML = "Bomba Beccata :( <br/> Hai perso :("
        }
    }
    
    numInputBomb.value = ''; // reset

    outputHtml.innerHTML = userScore;   

})
