/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1 = 8;
let number2 = 20;
 if (number2 > number1) {
  console.log("il numero maggiore è:", number2);
 }else if (number2<number1) {
  console.log("ilnumero maggiore è:", number1);
 }else{
  console.log("il numero è uguale");
 }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
 let number3 = 7
if ( number3 !== 5) {
  console.log("note equal");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let number = 5;
if (number % 5 === 0) {
  console.log("divisibile per 5");  
}else{
  console.log("non divisibile per 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let x = 10;
let y = 2
if (x === 8 || y === 8 || x + y === 8 || x - y === 8 || y - x ===8) {
  console.log("verificato");
  
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 55
let spedizioneCost=10
let totalpay = totalShoppingCart
if (totalShoppingCart < 50){
  totalpay += spedizioneCost
}
console.log("totale da pagare;", totalpay);




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 55;
totalShoppingCart2=totalShoppingCart2 * 0.8;
let spedizioneCost2= 10;
let totalpay2 = totalShoppingCart2

if (totalShoppingCart2 < 50) 
{ totalpay2 += spedizioneCost2
  }
  console.log("totale da pagare:", totalpay2)
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
{
  let x = 16;
  let z = 17;
  let y = 18;

 if (x >= y) {
  if (z >= x) {
  console.log(z, x, y);
  } else{
    if (z >= y ) {
      console.log(x, z, y);   
    }else{
      console.log(x, y, z);
    }
   }    
   
  }else{
    if (z >= y) {
      console.log(z, y, x);
    } else{
        if (z >= x) {
          console.log(y, z, x);  
        }else{
          console.log(y, x, z);
        }
    } 
  }  
}
  






/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/ 
let verifica = 5

if (typeof verifica === "number") 
{
  console.log("è un numero")  
}else{
  console.log("non è un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


let test = 5

 if (test % 2 === 0) {
  console.log("è un numero pari");
 }else{
  console.log("è un numero dispari");
 }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");

    } */

    let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}






/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "toronto"
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array = []

array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.push(6)
array.push(7)
array.push(8)
array.push(9)
array.push(10)
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array [9] = 100;
console.log(array);
