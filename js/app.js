// console.log('Test')


// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log


// creare una funzione che generi 5 numeri random e li inserisca dentro un array
let arrayNumeri = [];
let numeroDaInserire;

while ( arrayNumeri.length < 5 ) {

    numeroDaInserire = numeriRandom (1 , 100);

    if ( !arrayNumeri.includes(numeroDaInserire) ) {
        arrayNumeri.push(numeroDaInserire);
    } else {
        continue;
    }

}

console.log(arrayNumeri)

// creare un alert mostrando i 5 numeri

alert(arrayNumeri);

// far partire un timer di 30 secondi e poi permettere all'utente di inserire i 5 numeri uno alla volta tramite il prompt, 
// quindi ad ogni inserimento dovremo pushare il numero inserito dentro un array

// setTimeout (function(), 300);

let arrayUtente = [];

for (let i = 0; i < 5; i++){

    let numeroInserito
    do{
        numeroInserito=parseInt(prompt('inserisci numero'));
    } while ( isNaN(numeroInserito) )
    

    arrayUtente.push(numeroInserito);
}

console.log(arrayUtente)

// confronto tra array - quanti e quali numeri sono stati individuati tramite console.log

let numeriIndividuati = 0;

let numeriInComune = []

for (let i = 0; i < 5; i++){
    
    arrayUtente[i];

    // console.log(arrayUtente[i])

    if ( arrayNumeri.includes(arrayUtente[i])) {
        numeriIndividuati ++;
        numeriInComune.push(arrayUtente[i]);
    }


}

console.log('Hai indovinato:', numeriIndividuati, 'numeri');
console.log('Hai indovinato questi numeri:', numeriInComune);











// FUNZIONI

// Funzione che genera numeri random

function numeriRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

// function createArray(array, num) {
//     while ( array.length < 5 ) {

//         num = numeriRandom (1 , 100);

//         if ( !array.includes(num) ) {
//             array.push(num);
//         } else {
//             continue;
//         }

//     }
//     return array;
// }







