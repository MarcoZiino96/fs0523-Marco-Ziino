/*
 Descrizione: Scrivi una funzione chiamata recursiveSum che accetti un array di numeri e calcoli la somma di tutti 
 i suoi elementi in modo ricorsivo, senza utilizzare cicli for o while. 
 */

let arrayNumber = [1, 2, 3, 4, 5,6];

/*function recoursiveSum(array) {
  if (array.length === 0) {
    return ;
  } else {
    let sum =
      array[array.length - 1] + recoursiveSum(array.slice(0, array.length - 1));
    return sum;
  }
}

 let recoursiveSum = (array, i=0 ) =>{
  if(i >= array.length)
    return 0;
  return array[i] + recoursiveSum( array, i + 1);
}

console.log(recoursiveSum(arrayNumber, (i = 0)));
*/
/*
 Descrizione: Implementa una funzione customFilter che funzioni come l'array .filter(), ma senza usare il metodo .filter() nativo. La funzione accetta un array e una callback, restituendo un nuovo array 
 contenente solo gli elementi per i quali la callback restituisce true.

 console.log(customFilter(array, (n) => n % 2 === 0));
 
 function customFilter(array, callBack){
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(callBack(array[i])){
      result.push(array[i]);
    }
  }
  return result
 }
 

 let array = 1

 

 function arraySum(array){
  if(Array.isArray(array) && array.every( el => typeof el === 'number'))
  return array.reduce((a,b)=> a+b, 0);
  else
  throw new Error("Non è stato inserito correttamente l'array con i requisiti richiesti");
 }

 console.log(arraySum(array));
 
 */

/* 
 Descrizione: Crea una funzione objectToQueryString che prenda un oggetto JavaScript e lo trasformi in una stringa di query URL.
 

function objectToQueryString(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

const params = {
  search: "javascript tutorials",
  page: 2,
  limit: 10,
};

console.log(objectToQueryString(params));
*/
/*
 Descrizione: Scrivi una funzione wordFrequency che accetti una stringa e restituisca un oggetto con le parole come chiavi e il numero di occorrenze come valori. 
 Ignora maiuscole e minuscole e rimuovi la punteggiatura.
  

function wordFrequency(str) {
  let notPunt = str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();

  let wordsArr = notPunt.split(/\s+/);

  let frequency = {};

  wordsArr.forEach((word) => {
    if (word) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });
  return frequency;
}

console.log(
  wordFrequency(
    "Ciao a tutti. Mi chiamo Marco ed ho 28 anni. Lo so i miei anni sono tanti, ma ancora mi senti giovane. Ciao a tutti di nuovo!"
  )
);
*/
/*
 Descrizione: Dato un array che contiene numeri da 1 a n, in cui un numero è mancante, scrivi una funzione 
 findMissingNumber che trovi il numero mancante. 
 

function findMissingNUmber(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let numMancante = 0;
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      numMancante = i;
      break;
    }
  }
  return numMancante === 0 ? arr : numMancante;
}

console.log(findMissingNUmber([1, 2, 3, 4, 5, 6, 7, 9]));
*/
/* 
 Descrizione: Dato un array bidimensionale, scrivi una funzione che lo "appiattisca", 
 cioè trasformi tutte le sue righe in un unico array a una dimensione.
 

let arrBid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arrPiatto = arrBid.flat();

function appiatireBidimension(arr) {
  let arrPiatto = [];

  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          arrPiatto.push(arr[i][j]);
      }
  }
  return arrPiatto;
}

function app2(arr){
    return arr.reduce((a,b) => a.concat(b), [])    
}



console.log(appiatireBidimension(arrBid));
console.log(arrPiatto);
console.log(app2(arrBid));

*/

/*
 Descrizione: Crea una funzione memoize che accetti una funzione costosa e restituisca una nuova versione di essa che memorizza i risultati 
 per evitare di ricalcolare con gli stessi argomenti.
  

 function slowFunction(num) {
  console.log('Calcolando...');
  return num * num;
}

 function memoize(fn){

  const cache = new Map();

  return function(...args){
    const key = JSON.stringify(args);
    
  
  if(cache.has(key)){
    console.log("ritorno da cache");
     return cache.get(key)
    
  }
 
  const result = fn(...args);
    cache.set(key, result);
    console.log(cache);
    
    return result;
  }
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoize(slowFunction)(5));
console.log(memoize(slowFunction)(5));


console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(10));


*/

/*
 Descrizione: Crea una funzione getAllCombinations che generi tutte le combinazioni di una stringa di lunghezza variabile.
 

 function getAllCombinations(string){

  let combinations =[];

  function generateCombinations(prefix, remaining) {
    
  if(prefix){
    combinations.push(prefix);
    console.log(`Aggiunta combinazione: "${prefix}"`);
  }
  
  for(let i = 0; i < remaining.length; i++){
    generateCombinations(prefix + remaining[i], remaining.slice(i + 1));
  }
  
  }
   generateCombinations("", string);
   return combinations;
 }


 console.log(getAllCombinations("abcdefg"));
  */
 /*
 Scrivi una funzione ricorsiva contaVocali(str) che conta il numero di vocali (a, e, i, o, u) in una stringa.
  */


 function contaVocali(string, i = 0, count = 0){  
 if(i >= string.length){
  return count;
 }
 if(string.charAt(i) === 'a' || string.charAt(i) === 'i' || string.charAt(i) === 'e' || string.charAt(i) === 'o' || string.charAt(i) === 'u'){
  count ++;
  }
 return  contaVocali(string, i + 1, count)
 }

console.log(contaVocali('Java'));


/*
Scrivi una funzione ricorsiva minimoArray(arr) che trova il numero più piccolo in un array di numeri.
*/

function minArray(arr, i = 0, num = null){

  if( arr.length === 0)
    return null;

  if(i >= arr.length){
    return num;
  }

  if(arr[i] < num || num === null){
    num = arr[i]
  }
  return minArray(arr, i + 1, num);
}


 console.log(minArray([-555,4,18,-625,-800,25,45,44,-600]));
 
/*
Scrivi una funzione ricorsiva numeroCifre(n) che prende un numero intero positivo n e restituisce il numero di cifre.
 */

function numCifre(n){ 
  if(n === 0){
    return 1;
  }

  if(n < 10){
    return 1;
  }
  return 1 + numCifre(Math.floor(n / 10))
}

console.log(numCifre(123456));


