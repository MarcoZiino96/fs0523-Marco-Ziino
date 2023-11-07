

let areaName = document.querySelector('.areaInput');
let nome = document.querySelector('#input');
let salva = document.querySelector('#salva');
let elimina = document.querySelector('#elimina');

setInterval( function(){
    if(localStorage.getItem('nome') != null){
        areaName.innerText = localStorage.getItem('nome');
    }
}, 1000);

salva.addEventListener('click', ()=>{
        let nomeValue=nome.value;
        localStorage.setItem('nome',nomeValue);
});

elimina.addEventListener('click', ()=>{
    localStorage.removeItem('nome');
});

let tempoHTML = document.querySelector('.counter');

setInterval( ()=>{
 tempoHTML.innerText    = contatore
    sessionStorage.setItem('tempo' , contatore)
    contatore++;
}, 1000);

let tempoSalvato = sessionStorage.getItem('tempo');
 let contatore =0;
if(!tempoSalvato){
    contatore;
}else{
    contatore = tempoSalvato;
}








