    
    let storageCart = localStorage.getItem('cart');
    let cartArray = storageCart ? JSON.parse(storageCart):[];
    
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(libri => {
        let containerBooks = document.querySelector('.row');
        libri.forEach(libro => {

            let cloneCard = getCloneCard();

            let imgCard = cloneCard.querySelector('.card-img-top');
            let titleCard = cloneCard.querySelector('.card-title');
            let priceCard = cloneCard.querySelector('.card-text');
            let buttonScarta = cloneCard.querySelector('.btn.btn-danger');
            let buttonAdd = cloneCard.querySelector('.btn.btn-primary');

                imgCard.src = libro.img;
                titleCard.innerText = libro.title;
                priceCard.innerText = `${libro.price} $ `;

                buttonScarta.addEventListener('click', () => {
                 let areaCard = document.querySelector('.col-12');
                     areaCard.remove();
                     localStorage.removeItem();
                })
                
                buttonAdd.addEventListener('click', () => {
                   cartArray.push(libro);
                   localStorage.setItem('cart', JSON.stringify(cartArray));
                })            
                containerBooks.append(cloneCard);
                
        });

        
    })
    function getCloneCard(){
          let temp = document.getElementsByTagName('template')[0];
           return     temp.content.cloneNode(true);
}     

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   