

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var computerListNums = [];
var userListNums = [];
var userScore = 0;
var result = '';
var nextStep = true; 
var outputBomb = document.getElementById("still-in-game");

var numChosen = 1;
console.log('user num',numChosen);

var bomb = 1;
console.log('chosen bombs', bomb); //debug

var max = 1;
console.log('chosen level', max); //debug

var nextStepButton = document.getElementById("next-step");

  // inizia qui
nextStepButton.addEventListener('click', function() {

    bomb = document.getElementById("bombs").value;
    console.log('chosen bombs', bomb); //debug

    max = document.getElementById("level").value;
    console.log('chosen level', max); //debug    
    

    while (computerListNums.length < bomb) {
        var computerNum = getRandomNum (1,max);
        if (!computerListNums.includes(computerNum)) {
            computerListNums.push(computerNum);        
        }
    }    
    console.log('array pc nums',computerListNums.sort()); // debug   

    numChosen = document.getElementById("bomb-chosen");
    var userNum = parseInt(numChosen.value);  
    console.log('user num',userNum);

    if (userNum === max - bomb) {
        alert('Hai vinto!!')
    } else {
        if (userNum > 0 && userNum <= max && !isNaN(userNum)) {
    
            if (!userListNums.includes(userNum)) {
        
                if (!computerListNums.includes(userNum)) {
                    userListNums.push(userNum);
                    userScore = userListNums.length;
                    outputBomb.innerHTML = "Bomba evitata!!!"
                    console.log('array user nums',userListNums); //debug
                } else {
                    alert('Ops Mina beccata')
                    outputBomb.innerHTML = "Bomba Beccata :( "
                    document.getElementById("next-step").disabled = true;

                }
    
            } else {
                alert('Non puoi inserire lo stesso numero')
            }
    
        } else {
            alert('Devi inserire un numero fra 1 e ' + max);
        }

    }


    // if (userNum === max - bomb) {
    //     alert('Hai vinto!!')
    // } else {
    //     alert('Hai perso!!');
    // }

    // (userListNums.length < max - computerListNums.length && nextStep === true)    
        
    
    // console.log('user score is',userScore); 
    
    // if (userNum === max - bomb) {
    //     alert('Hai vinto!!')
    //     result = 'Complimenti hai vinto col massimo punteggio: ';
    // } else {
    //     alert('Hai perso!!');
    //     result= 'Peccato hai perso <br/> Il tuo punteggio è ';
    // }

    outputHtml.innerHTML = userScore;
    

})




