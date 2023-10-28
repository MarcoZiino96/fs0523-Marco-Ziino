

let navBar = document.querySelector(".navBar")
let buttonGreen = document.querySelector(".buttonLinkTwo")

window.addEventListener('scroll',function(){
    let targetSection = window.scrollY

    if (targetSection > 300) {
        navBar.style.transition = 'background-color 1s'
        buttonGreen.style.transition = 'background-color 1s'
        navBar.style.backgroundColor ='white'
        buttonGreen.style.backgroundColor = 'green'
    }else if (targetSection < 400) {
        navBar.style.transition = 'background-color 1s'
        buttonGreen.style.transition = 'background-color 1s'
        navBar.style.backgroundColor = ''
        buttonGreen.style.backgroundColor = ''
    }
})