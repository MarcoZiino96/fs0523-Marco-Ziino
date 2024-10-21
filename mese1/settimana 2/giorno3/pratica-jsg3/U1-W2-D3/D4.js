/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = (l1,l2) => {
    if(l1 > l2 || l2 > l1 && l2 !== 0 && l1 !== 0 && l2 !== 0) {
       let molt =  l1 * l2;
       console.log(molt);
       return molt;
       
    }
    else if(l1 <= 0 || l2 <= 0 || l1 === l2){
     console.log("I due lati sono uguali o negativi o uguali a zero")
    }
};

 const areaRett = area(0,10);
 


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = (l1,l2) =>{
    if(l1 === l2)
        return (l1 +l2)*3

   return l1 + l2
}

console.log(crazySum(5,10));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function craziDiff(l){
    let absNum = Math.abs(l);
    if(absNum > 19)
        return (absNum -19) * 3;    

    return Math.abs(absNum - 19);
}

console.log(craziDiff(-12));
console.log(craziDiff(-20));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {

    if(n >= 20 && n <= 100 || n === 400)
        return true;

    return false;
    
}

console.log(boundary(400));
console.log(boundary(125));
console.log(boundary(100));





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    if(str.indexOf("EPICODE") !== -1){
        return str;
    } 
    return "EPICODE ".concat(str)
}

const p = "EPICODE è GRANDIOSA"
const p1 = "fa schifo"

console.log(epify(p));
console.log(epify(p1));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n){
    return n % 3 === 0 || n % 7 === 0
}

console.log(check3and7(21));
console.log(check3and7(9));
console.log(check3and7(22));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str){

    return str.split('').reverse().join('');
    
}

console.log(reverseString("Marco è gay"));




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

 function upperFirst(str){
  /*  let arrayStr = str.trim().split("");
    let charUpperCase = arrayStr[0].toUpperCase();
   let newString = charUpperCase.concat(str.trim().slice(1));
   return newString;
   function upperFirst(str){
    
}*/ 
  return str.trim().split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(" ");

  
}

console.log(upperFirst("            ciao mi chiamo marco ed ho 28 anni                  "));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str){
    return str.slice(1, -1);
}

console.log(cutString('Abbonbanza'));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandomn(n){
    let arrayNumber = [];
    for(let i = 0; i < n; i++){
        arrayNumber.push(Math.floor(Math.random() * 11))
    }
    return arrayNumber;
}

console.log(giveMeRandomn(5));

/* SCRIVI QUI LA TUA RISPOSTA */
