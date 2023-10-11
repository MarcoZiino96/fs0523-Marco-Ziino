// inizio interazione js su HTML

 const creabutton = document.querySelector('#saveTask');
 const input = document.querySelector('#createTask');
 const textadd = document.querySelector('#textpushed');


 creabutton.addEventListener('click', () => {
   
    if(!input.value) return;

    const li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', () =>{
    li.style.textDecoration = 'line-through'
    li.innerText += ' Completato'
    li.style.color = 'red'
})
const buttondelete = document.createElement('button')
      buttondelete.innerText = 'delete'
buttondelete.addEventListener('click', () =>{  
    li.remove();
    buttondelete.remove()
})

    textadd.append(li);
    textadd.append(buttondelete)
    input.value = ''; 
 })
 
