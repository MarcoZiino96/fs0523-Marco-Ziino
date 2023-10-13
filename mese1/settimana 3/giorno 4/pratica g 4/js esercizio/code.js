

let tabella = document.querySelector('#tablenumbers');
let bottone = document.querySelector('.bottone_style');


for (let i = 1; i <= 90; i++) {
    let numbertable = document.createElement('div')
    numbertable.innerText = i;
    numbertable.classList.add('number');
    tabella.append(numbertable);    
}

let areanumber = document.querySelector('#areanumber');

bottone.addEventListener('click', () =>{
  let numberestratto = Math.floor(Math.random()* 90) +1;
  areanumber.innerText = numberestratto;
  tabella.children[numberestratto].style.backgroundColor = 'yellow';
})




    
    
        
        
    
    
    
    











