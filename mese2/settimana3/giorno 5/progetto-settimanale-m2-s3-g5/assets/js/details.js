let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDVjYzk1ZDRmNjAwMTg1NjI1ZGQiLCJpYXQiOjE2OTk2MTIxMDgsImV4cCI6MTcwMDgyMTcwOH0.SmbLGlhGm22dIIW1hsPISn6Lxtbk68gbFLAIuFw1iow";
let url = new URLSearchParams(location.search);
let id = url.get('id')






async function productDetails(id) {
    let resp = await fetch(fetchUrl + id,{
        headers: {
            Authorization: apiKey
        }
    })

    let data = await resp.json();

    let areaCard = document.querySelector('.row');

        let cloneCard = getClone();

        let imgCard = cloneCard.querySelector('.img-fluid');
        let titleCard = cloneCard.querySelector('.name');
        let descriptionCard = cloneCard.querySelector('.description');
        let priceCard = cloneCard.querySelector('.price');
        
    
        imgCard.src = data.imageUrl;
        titleCard.innerText = data.name;
        descriptionCard.innerText = data.description;
        priceCard.innerText = data.price + "€";
    
    areaCard.append(cloneCard);

}
productDetails(id); 

function getClone() {
    let temp = document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}