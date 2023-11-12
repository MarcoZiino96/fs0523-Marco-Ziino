let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDVjYzk1ZDRmNjAwMTg1NjI1ZGQiLCJpYXQiOjE2OTk2MTIxMDgsImV4cCI6MTcwMDgyMTcwOH0.SmbLGlhGm22dIIW1hsPISn6Lxtbk68gbFLAIuFw1iow";
let btnCrea = document.querySelector('#btnCrea');
let btnModifica = document.querySelector('#modifica');
let btnReset = document.querySelector('#reset');
let url = new URLSearchParams(location.search);
let id = url.get('id')



/* cliccando il tasto modifica dalla lista mi permette di avere input 
con i values dell ogetto in questione nel back office*/
async function innerInput(id) {
    let resp = await fetch(fetchUrl + id, {
        headers: {
            Authorization: apiKey
        }
    })
    let data = await resp.json();

    let nameProduct = document.querySelector('#nameProduct');
    let description = document.querySelector('#description');
    let brandProduct = document.querySelector('#brandProduct');
    let imgProduct = document.querySelector('#imgProduct');
    let priceProduct = document.querySelector('#priceProduct');
   

    nameProduct.value = data.name;
    description.value = data.description;
    brandProduct.value = data.brand;
    imgProduct.value = data.imageUrl;
    priceProduct.value = data.price;
}
innerInput(id);

/* mi permette di resettare il campo input richiamando la funzione reset*/
btnReset.addEventListener('click',  () => {
    reset();
})

/* evento che mi permettere di creare un ogetto con  metodo post*/
btnCrea.addEventListener('click', async () => {

    let nameProduct = document.querySelector('#nameProduct').value;
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

    productCard();
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

            setTimeout(() => {
                location.href = "../crud/homepage.html";
            }, 2000);
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "riempi tutti i campi",
                showConfirmButton: false,
                timer: 1800
            });
        }


    }
});

/* evento che mi permettere di modificare un ogetto con metodo put*/
btnModifica.addEventListener('click', async () => {

    let nameProduct = document.querySelector('#nameProduct').value;
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

    await modificaCard(id);
    async function modificaCard(id) {
        let resp = await fetch(fetchUrl + id, {
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
                timer: 1500
            });

            setTimeout(() => {
                location.href = "../crud/lista.html";
            }, 2000);
        } else {
          
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Non ha selezionato nessuno prodotto da modificare!",
                footer: '<a href="../crud/lista.html">Vuoi andare nella lista per modificare un prodotto?</a>'
              });
        }
    }
})

/* funzione che mi resetta tutti i campi input */ 
function reset() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
});
}





















