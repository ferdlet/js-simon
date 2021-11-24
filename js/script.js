// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const container = document.getElementById('container-numeri');

const arrayNumeriRandom = [];

for (let i = 0; arrayNumeriRandom.length < 5; i++) {
    let numeroRandom = Math.round(Math.random() * 99 + 1);
    while (arrayNumeriRandom.includes(numeroRandom)){
        numeroRandom = Math.round(Math.random() * 99 + 1);
    }
    arrayNumeriRandom.push(numeroRandom);
}

console.log(arrayNumeriRandom);

container.innerHTML = `<h2>${arrayNumeriRandom}</h2>`;


setTimeout(richiestaNumeri, 30000);

function richiestaNumeri() {
    
    container.innerHTML = `Inserisci i numeri che hai memorizzato!`;
    
    const arrayNumeriUtente = [];

    for (let i = 0; i < 5; i++) {
        let numeroUtente = parseInt(prompt('Inserisci un numero'));
        if (arrayNumeriRandom.includes(numeroUtente)) {
            arrayNumeriUtente.push(numeroUtente);
        }
    }

    console.log(arrayNumeriUtente);

    if (arrayNumeriUtente.length == '1') {
        container.innerHTML = `Hai indovinato un solo numero!
        <h2>Numeri da memorizzare: ${arrayNumeriRandom}</h2>
        <h2>Numero memorizzato: ${arrayNumeriUtente}</h2>`;
    } else if (arrayNumeriUtente.length == '0') {
        container.innerHTML = `Non hai memorizzato nessun numero! <h2>Numeri da memorizzare: ${arrayNumeriRandom}</h2>`;
    } else {
        container.innerHTML = `Hai memorizzato tutti i ${arrayNumeriUtente.length} numeri!
        <h2>Numeri da memorizzare: ${arrayNumeriRandom}</h2>
        <h2>Numeri memorizzati: ${arrayNumeriUtente}</h2>`;
    }
}