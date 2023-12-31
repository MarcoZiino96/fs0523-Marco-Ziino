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

 pets.forEach(pet => {pets.length
     console.log(pet);
})


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()

for (let i = 0; i < pets.length; i++){
     
  console.log(pets[i]);
}


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
 pets.reverse()
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);  
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let cutpet = pets.shift()
pets.push(cutpet)
for (let i = 0; i < pets.length; i++) {
 console.log(pets[i]);
}

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
    trims: ['life', 'style', 'r-line']
  }
]
/*for(i = 0; i < cars.length; i++)
if (cars[i].brand === 'Ford') {
    cars[i].licencePlate='FM4895DM'
} else if (cars[i].brand === 'Peugeot'){
  cars[i].licencePlate='CC4295LM'
}else if (cars[i].brand === 'Volkswagen'){
  cars[i].licencePlate='PP4895KK'
}*/
cars.forEach((car, i) =>{
  car.licencePlate = 'abn765' + i + 'kk'
})
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
  cars.push ( {
  brand : 'Panda',
  model : '4 x 4',
  licencePlate : 'abz4565k',
  color : 'black',
  trims : ['life', 'style','r-line']
})
console.log(cars);
for (let i = 0; i < cars.length; i++){
  cars[i].trims.pop() 
}
console.log(cars);


 

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
 const justTrims = []
for(i = 0; i < cars.length; i++){
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
 for(i = 0; i < cars.length; i++){
  if (cars[i].color.charAt(0) === 'b') {
    console.log('Fizz');
  }  else {
    console.log('Buzz');
  } 
 }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
] 

 let index = 0;
 while (numericArray[index]  !== 32) {
      console.log(numericArray[index]);
      index ++;
 }

  


  

  


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
 
let alphanumeric = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      alphanumeric.push(1)
        break;
    case 'b':
      alphanumeric.push(2)
        break; 
    case 'c':
      alphanumeric.push(3)
        break;
    case 'd':
      alphanumeric.push(4)
        break;
    case 'e':
      alphanumeric.push(5)
        break;
    case 'f':
      alphanumeric.push(6)
        break; 
    case 'g':
      alphanumeric.push(7)
        break;
    case 'h':
      alphanumeric.push(8)
        break;    
    case 'i':
      alphanumeric.push(9)
        break;
    case 'j':
      alphanumeric.push(10)
        break;
    case 'k':
      alphanumeric.push(11)
        break;
    case 'l':
      alphanumeric.push(12)
        break; 
    case 'm':
      alphanumeric.push(13)
        break;
    case 'n':
      alphanumeric.push(14)
        break;
    case 'o':
      alphanumeric.push(15)
        break;
    case 'p':
      alphanumeric.push(16)
        break; 
    case 'q':
      alphanumeric.push(17)
        break;
    case 'r':
      alphanumeric.push(18)
        break;    
    case 's':
      alphanumeric.push(19)
        break;
    case 't':
      alphanumeric.push(20)
        break;    
    case 'u':
      alphanumeric.push(21)
        break;   
    case 'v':
       alphanumeric.push(22)
        break;   
    case 'w':
       alphanumeric.push(23)
        break;    
    case 'x':
      alphanumeric.push(24)
        break;    
    case 'y':
      alphanumeric.push(25)
        break;   
     case 'z':
      alphanumeric.push(26)
      break;      
} 
}
console.log(alphanumeric); 