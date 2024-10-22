/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
/*
pets.forEach(p => console.log(p));
*/
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".

let arrayNum = [1,2,3,4,5,6,7,8]
 pets.sort();
 console.log(pets);

 console.log(arrayNum.sort((a,b) => b-a));
 */
 

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.


console.log(pets.reverse());
*/

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(pets);

let petFirst = pets.shift();
pets.push(petFirst);
console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]



cars.forEach((car, i)=> car.licensaPlate = "ABC657"+ i + "YY");



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const car = {
  brand: 'Toyota',
  model: 'Camry',
  color: 'blue',
  trims: ['sport', 'SUV'],
  licensePlate: "ABCD789623"
}

cars.push(car);
console.log(cars);

/*
cars.forEach( car => car.trims.pop())
console.log(cars);
*/
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

cars.forEach( (car) =>{
  justTrims.push(car.trims.shift());
})
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach(car =>{
  if(car.color.charAt(0) === 'b'){
    console.log("Fizz");
  }else{
    console.log("Buzz");   
  }
})
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (numericArray[i] !== 32){
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let positionLetter = [];


for (let i = 0; i < charactersArray.length; i++) {

  let letter = charactersArray[i];

  switch(letter){
    case 'a':
      positionLetter.push(1);
      break;
    case 'b':
      positionLetter.push(2);
      break;
    case 'c':
      positionLetter.push(3);
      break;
    case 'd':
      positionLetter.push(4);
      break;
    case 'e':
      positionLetter.push(5);
      break;
    case 'f':
      positionLetter.push(6);
      break;
    case 'g': positionLetter.push(7);
    break;
    case 'h':
      positionLetter.push(8);
      break;
    case 'i':
      positionLetter.push(9);
      break;
    case 'j':
      positionLetter.push(10);
      break;
    case 'k':
      positionLetter.push(11);
      break;
    case 'l':
      positionLetter.push(12);
      break;
    case'm':
    positionLetter.push(13);
    break;
    case 'n':
      positionLetter.push(14);
      break;
    case 'o':
      positionLetter.push(15);
      break;
    case 'p':
      positionLetter.push(16);
      break;
    case 'q':
      positionLetter.push(17);
      break;
    case 'r':
      positionLetter.push(18);
      break;
    case's':
    positionLetter.push(19);
    break;
    case 't':
      positionLetter.push(20);
      break;
    case 'u':
      positionLetter.push(21);
      break;
    case 'v':
      positionLetter.push(22);
      break;
    case 'w':
      positionLetter.push(23);
      break;
    case 'x':
      positionLetter.push(24);
      break;
    case 'y':
      positionLetter.push(25);
      break;
    case 'z':
      positionLetter.push(26);
      break;
    default:
      console.log("Lettera invalida" + `${letter}`);     
  }
}
console.log(positionLetter);

/*
Descrizione: Crea una funzione che riceve un numero intero n e restituisce un array di lunghezza n che segue queste regole:

Se l'indice dell'array (partendo da 1) è divisibile per 3, inserisci la stringa "Fizz".
Se l'indice è divisibile per 5, inserisci la stringa "Buzz".
Se l'indice è divisibile sia per 3 che per 5, inserisci la stringa "FizzBuzz".
Altrimenti, inserisci il numero stesso.
Obiettivo: La funzione deve restituire un array con i valori corretti.
*/ 


let  arrayNumber = [];

function fizzBUzz(n){

  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arrayNumber.push("FizzBuzz")
    }else if(i % 3 === 0){
      arrayNumber.push("Fizz")
    }else if(i % 5 === 0 ){
      arrayNumber.push("Buzz")
    }else{
      arrayNumber.push(i);
    }
  }
}
 fizzBUzz(15);

 console.log(arrayNumber);
 
 