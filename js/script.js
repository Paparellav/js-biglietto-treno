// DICHIARAZIONE DEI DATI UTENTE
//Chiedere all'utente il numero dei km da percorrere
const percorsoUtente = parseInt(prompt('Quanti km devi percorrere?'));
console.log(percorsoUtente);

//Chiedere all'utente il numero dell'età
const etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente);

// ELABORAZIONE DATI
//Stabilire che il prezzo del biglietto è calcolato in base alla formula: 0,21€ per km percorso
const prezzoBiglietto = 0.21 * percorsoUtente;
console.log(prezzoBiglietto);

//Calcolo discount under 18
const scontoMinore = (prezzoBiglietto * 20) / 100;
console.log(scontoMinore);

//Calcolo discount over 65
const scontoOver = (prezzoBiglietto * 40) / 100;
console.log(scontoOver);

// CONDIZIONE IF ELSE PAGAMENTO
let finalPrice

if (etaUtente < 18) {
    finalPrice = prezzoBiglietto - scontoMinore;
} else if (etaUtente >= 65) {
    finalPrice = prezzoBiglietto - scontoOver;
} else {
    finalPrice = prezzoBiglietto
}

console.log(finalPrice);

// Output stampato nel browser
document.getElementById('final-price').innerHTML = `Il prezzo del tuo biglietto è ${finalPrice}€`;