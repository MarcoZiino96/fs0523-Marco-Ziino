

let tabella = document.querySelector('#tablenumbers');
let areabutton = document.querySelector('#areabutton');
// creazione  bottone 
let bottone = document.createElement('button');
bottone.innerText = 'Chiama Numero';
bottone.classList.add('bottone_style');

for (let i = 1; i <= 100; i++) {

// creazione programmatica di tabella di numeri
    let numero = document.createElement('div');
        numero.classList.add('number');
        numero.innerText = i;
     
        
        
        tabella.appendChild(numero) 
        areabutton.append(bottone)  
}

// creazione del numero randomico al click del bottone

   
numero_random = [];
        
numero_random.push(Math.floor(Math.random()*100))

console.log(numero_random);
bottone.addEventListener('click', ()=>{
if (numero_random == numero) {
    numero.style.backgroundColor = 'red';   
}    
})











