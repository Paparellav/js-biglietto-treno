// DICHIARAZIONE DEI DATI UTENTE
//Chiedere all'utente il numero dei km da percorrere
const percorsoUtente = prompt('Quanti km devi percorrere?');
console.log(percorsoUtente);

//Chiedere all'utente il numero dell'età
const etaUtente = prompt('Quanti anni hai?');
console.log(etaUtente);

// ELABORAZIONE DATI
//Stabilire che il prezzo del biglietto è calcolato in base alla formula: 0,21€ per km percorso
const prezzoBiglietto = 0.21 * percorsoUtente;
console.log(prezzoBiglietto);

let sconto;

// CONDIZIONE IF ELSE PAGAMENTO
let finalPrice;

if (etaUtente < 18) {
    sconto = (prezzoBiglietto * 20) / 100;
} else if (etaUtente >= 65) {
    sconto = (prezzoBiglietto * 40) / 100;
} else {
    sconto = 0;
}

finalPrice = prezzoBiglietto - sconto;

console.log(finalPrice);

// Output stampato nel browser
const printPrice = finalPrice.toFixed(2);
document.getElementById('final-price').innerHTML = `Il prezzo del tuo biglietto è ${printPrice}€`;