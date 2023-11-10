
let query1 = 'https://api.pexels.com/v1/search?query=sunset';
let query2 = 'https://api.pexels.com/v1/search?query=space';
let apiKey = '45yUF4ICbVXvWXicRuoehhdaFyRd7jwJJGrMUevDPWwinW9MvZD3pkPP';
 let btnloadimg = document.querySelector('.btn.btn-primary');
 let btnloadimgsecondary = document.querySelector('.btn.btn-secondary');
 let btnHide = document.querySelectorAll('.delete');


async function loadImg() {
    let resp = await fetch(query1, {
        headers :{
            authorization : apiKey
        }
    } );

    let data = await resp.json();

    let imgCard = document.querySelectorAll('.card-img');
     
    imgCard.forEach( (img, i) => {
        img.src = data.photos[i].src.original;
    });

}

async function loadImg2() {
    let resp = await fetch(query2, {
        headers :{
            'authorization': `${apiKey}`
        }
    } );

    let data = await resp.json();

    let imgCard = document.querySelectorAll('.card-img');
     
    imgCard.forEach( (img, i) => {
        img.src = data.photos[i].src.original;
    });

}



btnloadimg.addEventListener('click', loadImg);
btnloadimgsecondary.addEventListener('click', loadImg2);

function deleteimg(card){
    card.remove();
}

 btnHide.forEach( btn => {
    btn.addEventListener('click', ()=> {
        let areaCard = btn.parentElement.parentElement.parentElement.parentElement;
        deleteimg(areaCard);
    });
 })

