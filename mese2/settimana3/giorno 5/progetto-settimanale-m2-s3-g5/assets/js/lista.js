let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDVjYzk1ZDRmNjAwMTg1NjI1ZGQiLCJpYXQiOjE2OTk2MTIxMDgsImV4cCI6MTcwMDgyMTcwOH0.SmbLGlhGm22dIIW1hsPISn6Lxtbk68gbFLAIuFw1iow";

async function productCard() {
    let resp = await fetch(fetchUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    let data = await resp.json();

    data.forEach( (p)=> {

        let tr = document.createElement('tr');
       let boxProduct = document.querySelector('.lista');

        let cloneCard = getClone();

        let imgProduct = cloneCard.querySelector('.img');
        let nameProduct = cloneCard.querySelector('.nome');
        let brandProduct = cloneCard.querySelector('.brand');
        let descriptionProduct = cloneCard.querySelector('.descrizione');
        let priceProduct = cloneCard.querySelector('.prezzo');
        let btnModifica = cloneCard.querySelector('.modifica');
        let btnDelete = cloneCard.querySelector('.delete');
        
        imgProduct.src = p.imageUrl;
        nameProduct.innerText = p.name;
        brandProduct.innerText = p.brand;
        descriptionProduct.innerText = p.description;
        priceProduct.innerText = p.price;
        btnModifica.href = 'backOffice.html?id=' + p._id;
        
        btnDelete.addEventListener('click', async () => {
            
            await deleteCard();
          async function deleteCard(){
             await fetch(fetchUrl + p._id, {
              method: 'DELETE',
              headers: {
                  Authorization: apiKey,
                  "Content-Type": "application/json"
              }
          })
          if (resp.status === 200) {
            tr.remove();  
            Swal.fire("file cancellato con sucesso!");
          }  
      }
      })

      tr.append(cloneCard);
      boxProduct.append(tr);


})

}

function getClone() {
    let temp = document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}
/*richiamo la funzione asincorna per attivarla*/ 

 productCard() 


