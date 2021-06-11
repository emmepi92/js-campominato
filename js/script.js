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
*/

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var outputHtml = document.getElementById("result");
var bombList = [];
var userList = [];
var userScore = 0; // si potrbbe usare direttamente la lunghezza dell'array
var result = '';
var nextStep = true; // flag nel while 
var maxOfNums = 0;

var difficolta =parseInt(prompt("scegli la tua difficoltà: 0 => tra 1 e 100, 1 => tra 1 e 80 o  2 => tra 1 e 50"));
while (difficolta !== 0 && difficolta !== 1 && difficolta !== 2) {
    alert("inserisci solo 0, 1 o 2");
    difficolta =parseInt(prompt("scegli la tua difficoltà: 0 => tra 1 e 100, 1 => tra 1 e 80 o  2 => tra 1 e 50"));
}

switch (difficolta) {
    case 0:
        maxOfNums = 100;
        break
    case 1:
        maxOfNums = 80;
        break
    default:
        maxOfNums = 50;
}
console.log('chosen difficolta',maxOfNums); // debug

while (bombList.length < 16) {
    var bombNum = getRandomNum (1,maxOfNums);
    if (!bombList.includes(bombNum)) {
        bombList.push(bombNum);        
    }
}

// debug 
console.log('array pc nums',bombList.sort());

// il caso di vincita è da gestire fuori il while, usare flag o lunghezza array dell'user
while (userList.length < maxOfNums - bombList.length && nextStep === true) {
    var userNum = parseInt(prompt("Inserisci un numero fra 1 e " + maxOfNums));

    // ho diviso in 3 if le condizioni da verificare
    // 1. se userNum è un numero, ed è compreso fra 0 e il maxOfNums della difficoltà scelta
    // 2. se userNum non è nell'array dei numeri già scelti
    // 3. se userNem non è nell'array dei numeri del pc

    if ( userNum > 0 && userNum <= maxOfNums && !isNaN(userNum)) {

        if (!userList.includes(userNum)) {

            if (!bombList.includes(userNum)) {
                userList.push(userNum);
                userScore = userList.length;
                console.log('array user nums',userList); //debug
            } else {
                alert('Ops Mina beccata')
                nextStep = false;
            }

        } else {
            alert('Non puoi inserire lo stesso numero')
        }

    } else {
        alert('Devi inserire un numero fra 1 e ' + maxOfNums);
    }
}

console.log('user score is',userScore); // debug

// caso di vincita analizzato fuori dal while con il flag 
if (nextStep) {
    alert('Hai vinto!!')
    result = 'Complimenti hai vinto col massimo punteggio: ';
} else {
    alert('Hai perso!!');
    result= 'Peccato hai perso <br/> Il tuo punteggio è ';
}

outputHtml.innerHTML = result + userScore;