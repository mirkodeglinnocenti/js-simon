// console.log('Test')


// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log

const resultElement = document.getElementById("result");

// creare una funzione che generi 5 numeri random e li inserisca dentro un array
let arrayNumeri = [];

createNumbersArray (arrayNumeri);

console.log(arrayNumeri)

// creare un alert mostrando i 5 numeri

alert( `Ricorda questi numeri: ${arrayNumeri} `);

// far partire un timer di 30 secondi e poi permettere all'utente di inserire i 5 numeri uno alla volta tramite il prompt, 
// quindi ad ogni inserimento dovremo pushare il numero inserito dentro un array
let arrayUtente = [];
let numeriInComune = []

setTimeout (function() {

    promptUtente (arrayUtente);
    
    console.log(arrayUtente)
    
    // // confronto tra array - quanti e quali numeri sono stati individuati tramite console.log
    
    
    compareArray (numeriInComune, arrayNumeri, arrayUtente)



}, 3000);






// FUNZIONI

// Funzione che genera numeri random

function numeriRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

// Funzione creazione 5 numeri casuali

function createNumbersArray (array) {

    let numeroDaInserire;

    while ( array.length < 5 ) {

        numeroDaInserire = numeriRandom (1 , 100);

        if ( !array.includes(numeroDaInserire) ) {
            array.push(numeroDaInserire);
        } else {
            continue;
        }

    }

}

// Funzione che chiede all'utente di riscrivere i 5 numeri visti

function promptUtente (array) {

    for (let i = 0; i < 5; i++){

        let numeroInserito;

        do{
            numeroInserito=parseInt(prompt('inserisci numero'));
        } while ( isNaN(numeroInserito) )
        

        array.push(numeroInserito);
    }

}


// funzione che compara i 2 array

function compareArray (arraynumeriuguali, array1, array2) {

    let numeriIndividuali = 0;

    for (let i = 0; i < 5; i++){
        
        arrayUtente[i];

        // console.log(arrayUtente[i])

        if ( array1.includes(array2[i]) && !arraynumeriuguali.includes(array2[i])) {
            numeriIndividuali ++;
            arraynumeriuguali.push(array2[i]);
        }


    }

    console.log('Hai indovinato:', numeriIndividuali, 'numeri');
    console.log('Hai indovinato questi numeri:', arraynumeriuguali);

    resultElement.innerHTML = ` Hai indovinato: ${numeriIndividuali} numeri, che sono il ${arraynumeriuguali} `;


}