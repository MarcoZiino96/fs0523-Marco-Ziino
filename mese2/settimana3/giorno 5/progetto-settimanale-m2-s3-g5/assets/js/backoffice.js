let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDVjYzk1ZDRmNjAwMTg1NjI1ZGQiLCJpYXQiOjE2OTk2MTIxMDgsImV4cCI6MTcwMDgyMTcwOH0.SmbLGlhGm22dIIW1hsPISn6Lxtbk68gbFLAIuFw1iow";
let btnCrea = document.querySelector('#btnCrea');
let btnModifica = document.querySelector('#modifica');


btnCrea.addEventListener('click', async () => {
    let nameProduct = document.querySelector('#brandProduct').value;
    let description = document.querySelector('#description').value;
    let brandProduct = document.querySelector('#brandProduct').value;
    let imgProduct = document.querySelector('#imgProduct').value;
    let priceProduct = document.querySelector('#priceProduct').value;
    
    let newProduct = {
        name: nameProduct,
        description: description,
        brand: brandProduct,
        imageUrl: imgProduct,
        price: priceProduct
    } 
    
     await productCard();
   async function productCard() {
        let resp = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
            Authorization: apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
     })
     
     if (resp.status === 200) {
  
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "prodotto creato con successo!",
                showConfirmButton: false,
                timer: 1500
              });

              
    

        }else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "prodotto non creato!",
                showConfirmButton: false,
                timer: 1500
            });
                location.href = '../crud/homepage.html';    
     }
     
}  

});

btnModifica.addEventListener('click', async () => {

    let nameProduct = document.querySelector('#brandProduct').value;
    let description = document.querySelector('#description').value;
    let brandProduct = document.querySelector('#brandProduct').value;
    let imgProduct = document.querySelector('#imgProduct').value;
    let priceProduct = document.querySelector('#priceProduct').value;
    
    let newProduct = {
        name: nameProduct,
        description: description,
        brand: brandProduct,
        imageUrl: imgProduct,
        price: priceProduct
    } 

   
    let url = new URLSearchParams(location.search);
    let id = url.get('id');

 await modificaCard(id);
async function modificaCard(id){
  let resp = await fetch(fetchUrl + id , {
    method: 'PUT',
    headers: {
        Authorization: apiKey,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
})
  if (resp.status === 200) {
     
    
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "prodotto modificato con successo!",
            showConfirmButton: false,
        });
       
     } else{
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Prodotto non modificato! Inserisci almeno un campo!",
            showConfirmButton: false,
            timer: 1500
        });
     }
}  

})





















