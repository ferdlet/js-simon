// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const arrayNumeriRandom = [];

for (let i = 0; arrayNumeriRandom.length < 5; i++) {
    let numeroRandom = Math.round(Math.random() * 99 + 1);
    while (arrayNumeriRandom.includes(numeroRandom)){
        numeroRandom = Math.round(Math.random() * 99 + 1);

    }
    arrayNumeriRandom.push(numeroRandom);

}

console.log(arrayNumeriRandom);

const arrayNumeriUtente = [];


for (let i = 0; i < 5; i++) {
    let numeroUtente = parseInt(prompt('Inserisci un numero'));
    if (arrayNumeriRandom.includes(numeroUtente)){
        arrayNumeriUtente.push(numeroUtente);
    }
}

console.log(arrayNumeriUtente);

if (arrayNumeriUtente.length == '1'){
    console.log('Hai indovinato un solo numero!');
} else if (arrayNumeriUtente.length == '0') {
    console.log('Non hai indovinato nessun numero!');
} else {
    console.log('Hai indovinato ' + arrayNumeriUtente.length + ' numeri!');
}