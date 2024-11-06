

let tabella = document.querySelector('#tablenumbers');
let bottone = document.querySelector('.bottone_style');
let areanumber = document.querySelector('#areanumber');
let areaScheda = document.querySelector('.containerScheda');
let numberSchede = document.querySelector('input');
let buttonScheda = document.querySelector('.buttonScheda');
let numberScheda = [...Array(90).keys().map( i => i + 1)];

let numeriEstratti = [];

generaTabella();

buttonScheda.addEventListener('click',() =>{
  if(!numberSchede.value){
    alert('Inserisci un numero')
    return
  }
    generaScheda(numberSchede.value);
})


function generaTabella() {
for (let i = 1; i <= 90; i++) {
    let numbertable = document.createElement('div')
    numbertable.innerText = i;
    numbertable.classList.add('number');
    tabella.append(numbertable);    
}
};

function shuffle(arr){
  for(let i = arr.length -1; i > 0 ; i --){
    const j = Math.floor(Math.random() * (i + 1));
     [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

function generaScheda(n) {
  let array = [...Array(90).keys().map( i => i + 1)];

  for(let i = 0; i < n; i ++){
    let scheda = document.createElement('div');
    scheda.classList.add('scheda');

    let numberScheda = shuffle(array).slice(0, 24);

    numberScheda.forEach( num =>{
       let casella = document.createElement('div');

       casella.innerText = num;;
       casella.classList.add('numberScheda');
       scheda.append(casella);
    })

    areaScheda.append(scheda);
  }

  };

bottone.addEventListener('click', () =>{
  let numberestratto = Math.floor(Math.random()* 90) + 1; 

   while (numeriEstratti.includes(numberestratto)){
    numberestratto = Math.floor(Math.random()* 90) + 1;
   };

  numeriEstratti.push(numberestratto);
  areanumber.innerText = numberestratto;
  tabella.children[numberestratto - 1].style.backgroundColor = 'yellow';  

  let schede = document.querySelectorAll('.numberScheda');

  schede.forEach( n => {
    if( parseInt(n.innerText) === numberestratto){
      n.style.backgroundColor ='yellow';
    }
  })
  
})




    
    
        
        
    
    
    
    











