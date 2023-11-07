

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


function contatore() {
    let counter = document.querySelector('.counter');
    let valoreContatore =  sessionStorage.getItem('contatore');
    if(valoreContatore == null){
        valoreContatore = 0;
    }
    valoreContatore++;
    sessionStorage.setItem('contatore', valoreContatore);
    counter.innerText = valoreContatore;
}
setInterval(contatore, 1000);







