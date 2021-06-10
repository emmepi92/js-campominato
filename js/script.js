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
var nextStep = true; // al posto del break nel terzo if del secondo while
var max = 0;

var difficolta =parseInt(prompt("scegli la tua difficolta: 0 => tra 1 e 100, 1 => tra 1 e 80 o  2 => tra 1 e 50"));
while (difficolta !== 0 && difficolta !== 1 && difficolta !== 2) {
    alert("inserisci solo 0, 1 o 2");
    difficolta =parseInt(prompt("scegli la tua difficolta: 0 => tra 1 e 100, 1 => tra 1 e 80 o  2 => tra 1 e 50"));
}

switch (difficolta) {
    case 0:
        max = 100;
        break
    case 1:
        max = 80;
        break
    case 2:
        max = 50;
}
console.log('difficoltà scelta',max);

while (computerListNums.length < 16) {
    var computerNum = getRandomNum (1,max);
    if (!computerListNums.includes(computerNum)) {
        computerListNums.push(computerNum);        
    }
}

console.log(computerListNums);



while (userListNums.length <= max - computerListNums.length && nextStep === true) {
    var userNum = parseInt(prompt("Inserisci un numero fra 1 e " + max));
    if ( userListNums.length === (max -computerListNums.length)) {
        alert('Complimenti, hai vinto!');
    }
    else if (!userListNums.includes(userNum) && !computerListNums.includes(userNum) && userNum > 0 && userNum <= max) {
        userListNums.push(userNum);
        userScore = userListNums.length;
        console.log(userListNums);
    } else if (computerListNums.includes(userNum)) {
        alert('Peccato hai perso');
        nextStep = false;
    }
}
console.log('user score is',userScore);

if ( userScore < max - computerListNums.length) {
    result= 'Peccato hai perso <br/> Il tuo punteggio è ';
} else {
    result = 'Complimenti hai visto col massimo punteggio: ';
}

outputHtml.innerHTML = result + userScore;