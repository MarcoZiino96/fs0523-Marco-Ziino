/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in javascript sono i seguenti:
1.stringa: è un tipo di dato che viene assegnato a una seguenza di caratteri; la stringa viene scritta tra virgolette che possono essere singole o doppie.
2. numero: è un un tipo di dato che viene assegnato a un numero che può assumere anche un valore decimale; per scrivere un numero, a differenza della stringa, non serve che venga inserito tra virgolette o parentesi;
se dobbiamo indicare un mumero decimale bisogna contrassegnarlo con il punto "." e non con la virgola ",".
3.booleano:è un tipo di dato che comprende solo due valori: true o false;è utilizzato per far prendere delle decisioni logiche al nostro codice.
4.array:è un tipo di dato che può comprende uno o più valori; viene scritto dentro parentesi [].
5.ogetto: è un tipo di dato che correla piu dati tra di loro; viene indicato con le parentesi {};
6.undefined: è un tipo di dato che si presenta quando non definiamo affatto una variabile  o dichiariamo una variabile ma non diamo un valore ad essa.
7.null:è un tipo di dato che indica proprio il nulla, un valore assegnato che indica l assenza intenzionale.
 */

/* ESERCIZIO
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "Marco";
console.log(nome)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number_1; let number_2;
number_1=12; number_2=20
console.log(number_1 + number_2);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x; x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const name1
name1="Marco"
console.log(name1);
name1="ziino"
console.log(name1)*/

nome="ziino"
console.log(nome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x - 4;
console.log(x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

  function notEqualsStrng( x, y){
    if( typeof x === 'string' &&  typeof  y === "string"){
      return x != y
    }else{
      return "uno dei due params non è di tipo string"
    }
  }

  console.log(notEqualsStrng("alla faccia", "alla tua"));
  console.log(notEqualsStrng("alla faccia", "alla faccia"));
  console.log(notEqualsStrng("alla faccia", 5));
  
