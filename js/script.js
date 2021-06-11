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
var userScore = 0; // si potrbbe usare direttamente la lunghezza dell'array
var result = '';
var nextStep = true; // flag nel while 
var max = 0;

var level =parseInt(prompt("scegli la tua difficoltà: 0 => tra 1 e 100, 1 => tra 1 e 80 o  2 => tra 1 e 50"));
while (level !== 0 && level !== 1 && level !== 2) {
    alert("inserisci solo 0, 1 o 2");
    level =parseInt(prompt("scegli la tua difficoltà: 0 => tra 1 e 100, 1 => tra 1 e 80 o  2 => tra 1 e 50"));
}

switch (level) {
    case 0:
        max = 100;
        break
    case 1:
        max = 80;
        break
    default:
        max = 50;
}
console.log('chosen level',max); // debug

while (computerListNums.length < 16) {
    var computerNum = getRandomNum (1,max);
    if (!computerListNums.includes(computerNum)) {
        computerListNums.push(computerNum);        
    }
}

// debug manuale, non iserire mai in numeri dell'array del computer
console.log('array pc nums',computerListNums.sort());

while (userListNums.length < max - computerListNums.length && nextStep === true) {
    var userNum = parseInt(prompt("Inserisci un numero fra 1 e " + max));

    // il caso di vincita è da gestire fuori

    // ho diviso in 3 if le condizioni da verificare
    // 1. se userNum è un numero, ed è compreso fra 0 e il max della difficoltà scelta
    if ( userNum > 0 && userNum <= max && !isNaN(userNum)) {

        // 2. se userNum non è nell'array dei numeri già scelti
        if (!userListNums.includes(userNum)) {

            // 3. se userNem non è nell'array dei numeri del pc
            if (!computerListNums.includes(userNum)) {
                userListNums.push(userNum);
                userScore = userListNums.length;
                console.log('array user nums',userListNums); //debug
            } else {
                alert('Ops Mina beccata')
                nextStep = false;
            }

        } else {
            alert('Non puoi inserire lo stesso numero')
        }

    } else {
        alert('Devi inserire un numero fra 1 e ' + max);
    }
}

console.log('user score is',userScore); // debug

// caso di vincita analizzato fuori dal while
if (nextStep) {
    alert('Hai vinto!!')
    result = 'Complimenti hai vinto col massimo punteggio: ';
} else {
    alert('Hai perso!!');
    result= 'Peccato hai perso <br/> Il tuo punteggio è ';
}

outputHtml.innerHTML = result + userScore;