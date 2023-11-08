
fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(libri => {
        let containerBooks = document.querySelector('.row');

        libri.forEach(libro => {

            let col = document.createElement('div');
            col.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'col-xl-3' ,'mb-3');
            containerBooks.append(col);
            let card = document.createElement('div');
            card.classList.add('card');
            col.append(card);
            let bookImg = document.createElement('img');
            bookImg.classList.add('card-img-top');
            let bodyCard = document.createElement('div');
            bodyCard.classList.add('card-body');
            card.append(bookImg, bodyCard);
            bookImg.src = libro.img;
            let titleBody = document.createElement('h5');
            titleBody.classList.add('card-title');
            titleBody.innerText = libro.title;
            let priceBook = document.createElement('p');
            priceBook.classList.add('card-text');
            priceBook.innerText = `${libro.price}$`;
            let buttonScarta = document.createElement('button');
                buttonScarta.classList.add('btn' , 'btn-primary');
                buttonScarta.innerText = 'Scarta';
                bodyCard.append(titleBody, priceBook, buttonScarta);

                buttonScarta.addEventListener('click', () => {
                    col.remove();
                })
        })

    })