/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area (l1,l2){
    return l1 * l2;
}console.log(area(40,80));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(l1,l2){
    if (l1 !== l2) {
        return l1 + l2     
    }else if (l1 === l2){
        return (l1+l2)*3
    }
}console.log(crazySum(5,5));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function  crazyDiff(n){
if (n < 19){
    return  Math.abs(n-19)   
} else if (n > 19){
    return(n -19)*3    
}
}console.log(crazyDiff(7));



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


function boundary(n){
    if (n >= 20 && n <= 100){
        return "true"
}   else if (n === 400){
    return "true"
}   else{
    return "il numuero non è compreso tra 20 e 100 n'è uguale a 400"
}       
}console.log(boundary(121));
 console.log(boundary(100));
 console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
 function epify(n){
    if (n.startsWith("EPICODE")){
        return n;   
    }else{
        return "EPICODE" + " " + n;
    }
}console.log(epify("EPICODEFANTASTIC"));
 console.log(epify("FANTASTIC"));
 



 
 
    
  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n){
    if (n < 0) {
    return "non è un numero positivo"    
    }else if (n % 3 === 0 || n % 7 === 0 ){
    return "è multiplo di 3 o di 7"
    }else{
    return "non è un multiplo di 3 o 7"
    }
} console.log(check3and7(29));
  console.log(check3and7(9)); 
  console.log(check3and7(28));
  console.log(check3and7(-28));
    


    

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(n){
   n = n.split('');
   n = n.reverse();
   n = n.join("")
   return n
}console.log(reverseString('epicode'));




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
 const upperFirstPhrase = function(stringa) {
  let textstr = stringa.split('')
  let finalString = []
  for (let i = 0; i < textstr.length; i++ ){
    let firstChar = textstr[i].charAt(0)
    let uppercase = firstChar.toUpperCase()
    let cutstring = textstr[i].slice(1)
    let finalstr = uppercase + cutstring
    finalString.push(finalstr)  
  }
  console.log(finalString.join(''))   
}

upperFirstPhrase('hello world')




 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
 function cutString(stringa) {
    return stringa.slice(1, stringa.length-1)
}console.log(cutString("stupendo"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
