let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDVjYzk1ZDRmNjAwMTg1NjI1ZGQiLCJpYXQiOjE2OTk2MTIxMDgsImV4cCI6MTcwMDgyMTcwOH0.SmbLGlhGm22dIIW1hsPISn6Lxtbk68gbFLAIuFw1iow";
let url = new URLSearchParams(location.search);
let id = url.get('id');

async function detailsCard(id){
let resp = await fetch(fetchUrl + id, {
    headers: {
        Authorization: apiKey,
        "contentType": "application/json"
    }
})
let product = await resp.json();

console.log(product);

let areaDetails = document.querySelector('#details');

detailsProduct = getCloneProduct();
let imgCard = detailsProduct.querySelector('.card-img-top');
let titleCard = detailsProduct.querySelector('.card-title');
let nameBrand = detailsProduct.querySelector('.brandProduct');
let descriptionCard = detailsProduct.querySelector('.card-text.description');
let priceCard = detailsProduct.querySelector('.card-text.price');

imgCard.src = product.imageUrl;
titleCard.innerText = product.name;
nameBrand.innerText = product.brand;
descriptionCard.innerText = product.description;
priceCard.innerText = product.price;
console.log(product.brand);

areaDetails.append(detailsProduct);


}

function getCloneProduct() {
    let temp = document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}

detailsCard(id);