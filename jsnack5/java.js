// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

// chiedo all'utente di inserire un numero
var numero_inserito = parseInt( prompt("inserisca un numero: "));
    console.log( "il numero inserito dall'utente è: " + numero_inserito);

// creo un ciclo che parte da 0 al numero inserito dall'utente
for (var i = 0; i <= numero_inserito; i++) {
    // imposto la funzione per far elevare al cubo i numeri
    var numero_cubo = Math.pow(i, 3);
        console.log( "il numero " + i + " elevato al cubo è pari a: " + numero_cubo);
}
