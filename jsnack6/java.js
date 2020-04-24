// var numero_elevato = 2;
// console.log(numero_elevato);
//
// var potenza = 1;
//
// for (var i = 1; potenza < 1000 ; i++) {
//     console.log(potenza);
//     potenza = Math.pow(numero_elevato, i)
// }

// var numero = 1000;
// for (var i = 0; Math.pow(2, i ) < numero; i++) {
//     var potenza = Math.pow(2, i);
//     console.log(potenza);
// }

// imposto la funzione Math.pow per far elevare il numero 2 partendo da 0
var potenza = Math.pow( 2, 0);

// inizio il ciclo affinchè l'esponente' aumenti ma imposto <= 1000 affinché si stoppi automaticamente entro 1000
for (var i = 1; potenza <= 1000; i++) {
    console.log(potenza);
    potenza = Math.pow (2, i);
}
