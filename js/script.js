/*Consegna 
Il computer deve generare 16 numeri casuali tra 1 e 100. 
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, 
sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si 
continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero 
massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
l’utente ha inserito un numero consentito.


1. funzione che genera numero compreso fra 1 e 100, x 16 volte
2. while computerListNums.length <16 -> 
    a. if num is not in array computerListNums, push in array computerListNums.
3. utente inserisce numUser in un prompt(ricorda parseInt) PER 100 - 16 (ovvero 100 - lunghezza array computerListNums).
    a. if numUser is in userListNum -> prompt -> inserisci un altro numero
    b. if numUser is in computerListNums -> user ha perso;
4.
*/

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var computerListNums = [];
var userListNums = [];
var userScore = 0;
var resultText = '';

while (computerListNums.length < 16) {
    var computerNum = getRandomNum (1,100);
    if (!computerListNums.includes(computerNum)) {
        computerListNums.push(computerNum);        
    }
}

console.log(computerListNums);

while (userListNums.length < 100 - computerListNums.length) {
    var userNum = parseInt(prompt("Inserisci un numero fra 1 e 84"));
    if ( userListNums.length === 84) {
        alert('Complimenti, hai vinto!');
        break
    }
    else if (!userListNums.includes(userNum) && !computerListNums.includes(userNum) && userNum > 0 && userNum <= 84) {
        userListNums.push(userNum);
        userScore = userListNums.length;
        console.log(userListNums);
    } else if (computerListNums.includes(userNum)) {
        alert('Peccato hai perso');
        break
    }
}
console.log('user score is',userScore);

if ( userScore < 84) {
    result= 'Peccato hai perso <br/> Il tuo punteggio è ';
} else {
    result = 'Complimenti hai visto col massimo punteggio: ';
}

outputHtml.innerHTML = result + userScore;