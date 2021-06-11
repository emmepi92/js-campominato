

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var outputStillInGame = document.getElementById("still-in-game");
var nextStepButton = document.getElementById("next-step");
var bombHtmlInput = document.getElementById("bombs");
var maxOfNumsHtmlInput = document.getElementById("level");
var toHide = document.getElementsByClassName("to-hide");
var bombList = [];
var userList = [];
var userScore = 0;
var result = '';
var nextStep = true;

var numInputBomb = 1;
var bomb = 1;
var maxOfNums = 1;

var settingInputButton = document.getElementById("setting-button")

settingInputButton.addEventListener('click', function(){
    bomb = bombHtmlInput.value;
    // console.log('chosen bombs', bomb); //debug
    bombHtmlInput.disabled = true;

    maxOfNums = maxOfNumsHtmlInput.value;
    // console.log('chosen maxOfNums', maxOfNums); //debug    
    maxOfNumsHtmlInput.disabled = true;

    document.getElementById("max").innerHTML ="Inserisci un numero compreso fra 1 e " + maxOfNums;
    
    document.getElementById("invisible").style.display ='block';
    settingInputButton.style.display = 'none';

})


nextStepButton.addEventListener('click', function() {    

    while (bombList.length < bomb) {
        var computerNum = getRandomNum (1,maxOfNums);
        if (!bombList.includes(computerNum)) {
            bombList.push(computerNum);        
        }
    }    
    // console.log('array pc nums',bombList.sort()); // debug   

    numInputBomb = document.getElementById("input-bomb");
    var userNum = parseInt(numInputBomb.value);  
    console.log('user num',userNum);

    if (userNum === maxOfNums - bomb) {
        outputStillInGame.innerHTML = 'Complimenti, Hai vinto!!! <br/> Hai evitato tutte le bombe!!!';
        nextStepButton.disabled = true;
        
    } else {
        if (userNum > 0 && userNum < maxOfNums && !isNaN(userNum)) {
    
            if (!userList.includes(userNum)) {
        
                if (!bombList.includes(userNum)) {
                    userList.push(userNum);
                    userScore = userList.length;
                    outputStillInGame.innerHTML = "Bomba evitata!!!"
                    // console.log('array user nums',userList); //debug
                } else {

                    // da aggiustare con un flag e comtinuare fuori, ora cercello fuso
                    outputStillInGame.innerHTML = "Bomba Beccata :( <br/> Hai perso :("
                    nextStepButton.disabled = true;
                    document.getElementById("input-bomb").disabled = true;
                    for (var i = 0; i < toHide.length; i++){    
                        toHide[i].style.display = ("none");
                    }
                    outputStillInGame.style.padding = ("24px");

                }
    
            } else {
                alert('Non puoi inserire lo stesso numero')
            }
    
        } else {
            alert('Devi inserire un numero fra 1 e ' + maxOfNums);
        }

    }

    numInputBomb.value = ''; // reset

    outputHtml.innerHTML = userScore;   

})