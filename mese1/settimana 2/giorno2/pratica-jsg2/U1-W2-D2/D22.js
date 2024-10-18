/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.


function biggestNumber(n1, n2){
   return (n1 > n2) ? "il numero " + "" +`${n1}` + " è piu grande di "  + "" +`${n2}` :
   (n2 > n1) ? "il numero " + "" +`${n2}` + "è piu grande di "  + "" +`${n1}` : "i due numeri sono uguali"
}

console.log(biggestNumber(10, 15));
console.log(biggestNumber(10, 10));
*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.


function notEqual(n){
    return (n != 5) ? "not Equal" : "is equal"
}

console.log(notEqual(10));
console.log(notEqual(5));
*/
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)


function divisibleForFive(n) {
    return (n % 5 === 0) ?  `${n}`+ " " + "E' perfettamente divisibile per 5" : 
    `${n}`+ " Non è divisibile per 5"  
}

console.log(divisibleForFive(10));
console.log(divisibleForFive(15));
console.log(divisibleForFive(6));
*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.


function isNumberOrSumEight(n, n2) {
    return (n === 8 || n2 === 8) ? "Uno dei due numeri è uguale a 8" :
    (n + n2 === 8) ? "La somma dei due numeri è uguale a 8" : "nessuno dei numeri e neanche la loro somma è uguale  a 8"
}


 console.log(isNumberOrSumEight(8, 16));
 console.log(isNumberOrSumEight(4, 4));
 console.log(isNumberOrSumEight(3, 5));
 console.log(isNumberOrSumEight(4, 6));
*/
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.


function spedizioneGratuita(n){
    const spedizione = 10;
    return (n > 50) ?  n + "La spedizione è gratuita"  :  n + spedizione * "La spedizione non è gratuita"
}

console.log(spedizioneGratuita(45));
console.log(spedizioneGratuita(50));
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.


function spedizioneGratuita(n){
    const spedizione = 10;
    return (n > 50) ?  n   :  n + spedizione
}

function blackFriday(n){
return  n - (n * 0.2)
}

function calcoloSpedizioneAndSconto(totalShopping){
    let total = spedizioneGratuita(totalShopping);
    console.log(total);
    
    if( total !== totalShopping){
        console.log("la spedizione non è gratuita");
    }else{
        console.log("La spedizione è gratuita");    
    }

    let finalTotal = null;
      finalTotal = blackFriday(total);
    console.log("E' stato applicato uno sconto del 20 % sul totale della tua spesa");
    return finalTotal
}

console.log(calcoloSpedizioneAndSconto(100));
console.log(calcoloSpedizioneAndSconto(50));
*/
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.


let num = 3;
let num1 = 4;
let num3 = 6;

function order(a, b, c){
    if(a >= b && a >=c){
        if(c >= b){
            console.log(a,c,b);
        }else{
            log(a,b,c)
        }
    }else if(b >= a && b >= c){
        if(a >= c){
            console.log(b,a,c);
        }else{
            console.log(b,c,a);  
        }
    }else if(c >= a && c >= b){
        if(a >= b){
            console.log(c,a,b);  
        }else{
            console.log(c,b,a);    
        }
    }
}

order(12,88,33);


function orderArrayNumber(arr){
    arr.sort((x,y) => x - y);
    return arr;
  }
  
  let arrNumber = [50,2,30,4,5,7,11,22,33,44,5,6,7];
  
  let arrNumberOrder = orderArrayNumber(arrNumber);
  console.log(arrNumberOrder);
*/
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").


function isANumber(n){
    return  typeof n === 'number'   
}
console.log(isANumber("5"));
console.log(isANumber(5));
console.log(isANumber("cinque"));
*/ 




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)


function pariOdispari(n) {
    return (n % 2 === 0) ? `${n}`+" "+ "è un numero pari" : 
          `${n}` + " " + "è un numero dispari"
}

console.log(pariOdispari(5));
console.log(pariOdispari(6));
console.log(pariOdispari(11));
*/




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
    }
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
 */
      /* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

const me ={
    nome : "Marco",
    cognome: "Ziino",
    "città-di-residenza": "Brolo",
    skills: ["JavaScript", "React", "Node.js"]
}
me["città-di-domicilio" ]= "Tradate"
console.log(me);
*/



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".

delete me.cognome;
console.log(me);

*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numerArray = [];
console.log(numerArray);

for(let i = 0; i < 10; i++){
    numerArray.push(i+1);
}
console.log(numerArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numerArray[numerArray.length - 1] = 100;
console.log(numerArray);


 
