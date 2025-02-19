//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
//🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
//Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado() {

    let lastResult = null;

    return function () {

        return new Promise((resolve, reject) => {
            console.log('Sto lanciando il dado...')
            setTimeout(() => {

                // generiamo un numero casuale tra 0 e 1 e vediamo se e' inferiore a 0.2
                if (Math.random() < 0.2) {
                    reject(`Ops! Il dado si é incastrato`)
                } else {
                    const dado = Math.floor(Math.random() * 6) + 1

                    // verifico se i numeri usciti sono uguali
                    if (lastResult === dado) {
                        console.log(`Incredibile!`);

                    }
                    // memorizzo l'ultimo risultato 
                    lastResult = dado
                    resolve(dado)
                }


            }, 3000)
        }

        )
    }
}

const lanciaDado = creaLanciaDado()

lanciaDado()
    .then(dado => console.log(`Il primo lancio è riuscito: ${dado}`))
    .catch(error => console.error(error));

lanciaDado()
    .then(dado => console.log(`Il secondo lancio è riuscito: ${dado}`))
    .catch(error => console.error(error));

