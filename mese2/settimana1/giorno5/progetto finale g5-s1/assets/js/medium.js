
/*** Nave bar allo scroll cambia colore */
let navBar = document.querySelector(".navBar")
let buttonGreen = document.querySelector(".buttonLinkTwo")

window.addEventListener('scroll',function(){
    let targetSection = window.scrollY
   // con un log su window croll ho crontrollato lo scroll per capire qundo attivare l evento//
    if (targetSection > 300) {
        navBar.style.transition = 'background-color 1s'
        buttonGreen.style.transition = 'background-color 1s'
        navBar.style.backgroundColor ='white'
        buttonGreen.style.backgroundColor = 'green'
  // se lo scroll supera 300 allora la nav cambia colore e anche il bottone//
    }else if (targetSection < 400) {
        navBar.style.transition = 'background-color 1s'
        buttonGreen.style.transition = 'background-color 1s'
        navBar.style.backgroundColor = ''
        buttonGreen.style.backgroundColor = ''
    }
})
// se lo scroll e inferiore a 300 tutto torna come prima//

// finetra popup all mouseover sul nome utente//

let nameUtent = document.querySelector('.nameUtent')
let popUser = document.querySelector('.popUser.hidden')

nameUtent.addEventListener('mouseover',function(){
        popUser.classList.remove('hidden')    
})

nameUtent.addEventListener('mouseout',function() {
    popUser.classList.add('hidden')
})

