

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var outputBomb = document.getElementById("still-in-game");
var nextStepButton = document.getElementById("next-step");
var bombHtml = document.getElementById("bombs");
var levelHtml = document.getElementById("level");
var computerListNums = [];
var userListNums = [];
var userScore = 0;
var result = '';

var numChosen = 1;
var bomb = 1;
var max = 1;


  // inizia qui
nextStepButton.addEventListener('click', function() {

    bomb = bombHtml.value;
    // console.log('chosen bombs', bomb); //debug
    bombHtml.disabled = true;

    max = levelHtml.value;
    // console.log('chosen level', max); //debug    
    levelHtml.disabled = true;
    

    while (computerListNums.length < bomb) {
        var computerNum = getRandomNum (1,max);
        if (!computerListNums.includes(computerNum)) {
            computerListNums.push(computerNum);        
        }
    }    
    // console.log('array pc nums',computerListNums.sort()); // debug   

    numChosen = document.getElementById("bomb-chosen");
    var userNum = parseInt(numChosen.value);  
    console.log('user num',userNum);

    if (userNum === max - bomb) {
        alert('Hai vinto!!')
        nextStepButton.disabled = true;
    } else {
        if (userNum > 0 && userNum <= max && !isNaN(userNum)) {
    
            if (!userListNums.includes(userNum)) {
        
                if (!computerListNums.includes(userNum)) {
                    userListNums.push(userNum);
                    userScore = userListNums.length;
                    outputBomb.innerHTML = "Bomba evitata!!!"
                    // console.log('array user nums',userListNums); //debug
                } else {
                    outputBomb.innerHTML = "Bomba Beccata :( "
                    nextStepButton.disabled = true;
                    document.getElementById("bomb-chosen").disabled = true;
                }
    
            } else {
                alert('Non puoi inserire lo stesso numero')
            }
    
        } else {
            alert('Devi inserire un numero fra 1 e ' + max);
        }

    }

    numChosen.value = ''; // reset

    outputHtml.innerHTML = userScore;   

})