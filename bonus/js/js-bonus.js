

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var outputStillInGame = document.getElementById("still-in-game");
var nextStepButton = document.getElementById("next-step");
var bombHtmlInput = document.getElementById("bombs");
var maxOfNumsHtmlInput = document.getElementById("level");
var bombList = [];
var userList = [];
var userScore = 0;
var result = '';

var numInputBomb = 1;
var bomb = 1;
var maxOfNums = 1;


  // inizia qui
nextStepButton.addEventListener('click', function() {

    bomb = bombHtmlInput.value;
    // console.log('chosen bombs', bomb); //debug
    bombHtmlInput.disabled = true;

    maxOfNums = maxOfNumsHtmlInput.value;
    // console.log('chosen maxOfNums', maxOfNums); //debug    
    maxOfNumsHtmlInput.disabled = true;
    

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
        if (userNum > 0 && userNum <= maxOfNums && !isNaN(userNum)) {
    
            if (!userList.includes(userNum)) {
        
                if (!bombList.includes(userNum)) {
                    userList.push(userNum);
                    userScore = userList.length;
                    outputStillInGame.innerHTML = "Bomba evitata!!!"
                    // console.log('array user nums',userList); //debug
                } else {
                    outputStillInGame.innerHTML = "Bomba Beccata :( <br/> Hai perso :("
                    nextStepButton.disabled = true;
                    document.getElementById("bomb-chosen").disabled = true;
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