

let tabella = document.querySelector('#tablenumbers');
let bottone = document.querySelector('.bottone_style');
let areanumber = document.querySelector('#areanumber');
let areaScheda = document.querySelector('.containerScheda');
let numberSchede = document.querySelector('input');
let buttonScheda = document.querySelector('.buttonScheda');

let numeriEstratti = [];

generaTabella();

buttonScheda.addEventListener('click',() =>{
  if(!numberSchede.value){
    alert('Inserisci un numero')
    return};
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


function generaScheda(n) {

  let numberScheda = [];

  for (let i = 0; i < n; i++) {
      let scheda = document.createElement('div');
      scheda.classList.add('scheda');
      for (let y = 1; y <= 24; y++){  
        let casella = document.createElement('div');
        let numCorrent = Math.floor(Math.random()* 90) + 1;      
        while(numberScheda.includes(numCorrent)){
          numCorrent = Math.floor(Math.random()* 90) + 1;
        } 
        numberScheda.push(numCorrent)
        casella.innerText = numCorrent;
        casella.classList.add('numberScheda'); 
        scheda.append(casella); 
      } 
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




    
    
        
        
    
    
    
    











