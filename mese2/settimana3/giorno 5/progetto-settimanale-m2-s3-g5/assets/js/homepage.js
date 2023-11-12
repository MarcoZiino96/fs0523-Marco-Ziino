
let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDVjYzk1ZDRmNjAwMTg1NjI1ZGQiLCJpYXQiOjE2OTk2MTIxMDgsImV4cCI6MTcwMDgyMTcwOH0.SmbLGlhGm22dIIW1hsPISn6Lxtbk68gbFLAIuFw1iow";

/* funzione asincrona che mi permette di effetuare una chiamata fetch method get, che tramite un ciclo e la funzione precedentemente creata 'getCloneCard' mi creo una card per ogni prodotto presente nel array data */


async function productCard() {
    let resp = await fetch(fetchUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    let data = await resp.json();

    let areaCard = document.querySelector('.row');

    data.forEach( (p)=> {

        let cloneCard = getClone();

        let imgCard = cloneCard.querySelector('.card-img-top');
        let titleCard = cloneCard.querySelector('.card-title');
        let nameBrand = cloneCard.querySelector('.brandProduct');
        let descriptionCard = cloneCard.querySelector('.card-text.description');
        let priceCard = cloneCard.querySelector('.card-text.price');
    
        imgCard.src = p.imageUrl;
        titleCard.innerText = p.name;
        nameBrand.innerText = p.brand;
        descriptionCard.innerText = p.description;
        priceCard.innerText = p.price + "€";
    
    areaCard.append(cloneCard);

})

}

/* funzione che mi permette di generare un clone del template*/

function getClone() {
    let temp = document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}
/*richiamo la funzione asincorna per attivarla*/ 
productCard(); 


