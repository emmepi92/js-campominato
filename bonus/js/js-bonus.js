

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var outputStillInGame = document.getElementById("still-in-game");
var nextStepButton = document.getElementById("next-step");
var bombHtml = document.getElementById("bombs");
var levelHtml = document.getElementById("level");
var computerListNums = [];
var userListNums = [];
var userScore = 0;
var result = '';

var numInputBomb = 1;
var bomb = 1;
var level = 1;


  // inizia qui
nextStepButton.addEventListener('click', function() {

    bomb = bombHtml.value;
    // console.log('chosen bombs', bomb); //debug
    bombHtml.disabled = true;

    level = levelHtml.value;
    // console.log('chosen level', level); //debug    
    levelHtml.disabled = true;
    

    while (computerListNums.length < bomb) {
        var computerNum = getRandomNum (1,level);
        if (!computerListNums.includes(computerNum)) {
            computerListNums.push(computerNum);        
        }
    }    
    // console.log('array pc nums',computerListNums.sort()); // debug   

    numInputBomb = document.getElementById("input-bomb");
    var userNum = parseInt(numInputBomb.value);  
    console.log('user num',userNum);

    if (userNum === level - bomb) {
        outputStillInGame.innerHTML = 'Complimenti, Hai vinto!!! <br/> Hai evitato tutte le bombe!!!';
        nextStepButton.disabled = true;
    } else {
        if (userNum > 0 && userNum <= level && !isNaN(userNum)) {
    
            if (!userListNums.includes(userNum)) {
        
                if (!computerListNums.includes(userNum)) {
                    userListNums.push(userNum);
                    userScore = userListNums.length;
                    outputStillInGame.innerHTML = "Bomba evitata!!!"
                    // console.log('array user nums',userListNums); //debug
                } else {
                    outputStillInGame.innerHTML = "Bomba Beccata :( <br/> Hai perso :("
                    nextStepButton.disabled = true;
                    document.getElementById("bomb-chosen").disabled = true;
                }
    
            } else {
                alert('Non puoi inserire lo stesso numero')
            }
    
        } else {
            alert('Devi inserire un numero fra 1 e ' + level);
        }

    }

    numInputBomb.value = ''; // reset

    outputHtml.innerHTML = userScore;   

})