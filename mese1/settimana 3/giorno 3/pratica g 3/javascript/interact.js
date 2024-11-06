const creabutton = document.querySelector('#saveTask');
const input = document.querySelector('#createTask');
const textadd = document.querySelector('#textpushed');
const textCompl = document.querySelector('#textComplete');

creabutton.addEventListener('click', () => {

    if (!input.value) {
        alert('Inserisci un valore nella casella di testo');
        return;
    }

    // Crea l'elemento della lista e il bottone "delete"
    const li = document.createElement('li');
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'delete';

    // Imposta il testo dell'elemento `li` e aggiungi il bottone "delete"
    li.innerText = input.value;
    li.appendChild(buttonDelete);

    // Aggiungi l'elemento `li` alla lista delle attività da fare
    textadd.appendChild(li);

    // Aggiungi l'evento "click" per segnare il task come completato
    li.addEventListener('click', () => {
            li.style.color = 'red';
            textCompl.appendChild(li); // Sposta nella lista completata
   
    });

    // Aggiungi l'evento "click" per eliminare l'elemento della lista
    buttonDelete.addEventListener('click', (event) => {
        event.stopPropagation(); // Previene il trigger dell'evento di completamento
        li.remove(); // Rimuove l'elemento `li`
    });


    input.value = '';
});