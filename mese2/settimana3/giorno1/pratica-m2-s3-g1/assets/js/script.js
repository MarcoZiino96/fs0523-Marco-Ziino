
class User{
    constructor(fn,ln,a,lct){
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
        this.location = lct;
    }
    comparazionEtà(altroUtente){
        if (this.age > altroUtente.age){
            return `${this.firstName} è piu grande di ${altroUtente.firstName}`;
        } else if (this.age === altroUtente.age) {
            return `${this.firstName} è ${altroUtente.firstName} hanno la stessa età`;
        } else{
            return `${this.firstName} è piu piccolo di ${altroUtente.firstName}`;
        }
    }
}
let marco = new User('Marco', 'Ziino', 27, 'Messina');

let alessio = new User('Alessio', 'Ziino', 29, 'Messina');

let giuseppe = new User('giuseppe', 'Ziino', 27, 'Messina');

 console.log(giuseppe.comparazionEtà(marco));



class HTMLInit{
    constructor(animalListArea){
        this.ListArea = document.querySelector(animalListArea)
        this.input1=null;
        this.input2=null;
        this.input3=null;
        this.input4=null;
        this.bottonAdd=null;
        this.ulArea = null;
        this.createHTMLInput();
    }

    createHTMLInput(){
        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');
        this.input3 = document.createElement('input');
        this.input4 = document.createElement('input');
        this.createBotton()
        this.ulArea = document.createElement('ul');
        
        this.ListArea.append(this.input1, this.input2, this.input3, this.input4,
            this.bottonAdd, this.ulArea);
    }
       createBotton(){
        this.bottonAdd = document.createElement('button');
        this.bottonAdd.innerHTML = 'Aggiungi';
        this.bottonAdd.addEventListener('click', ()=>{
            this.createLi();
            this.input1.value='';
            this.input2.value='';
            this.input3.value='';
            this.input4.value='';
          })       
}
     createLi(){
        let li1 = document.createElement('li')
        li1.innerText = this.input1.value;
        let li2 = document.createElement('li')
        li2.innerText = this.input2.value;
        let li3 = document.createElement('li')
        li3.innerText = this.input3.value;
        let li4 = document.createElement('li')
        li4.innerText = this.input4.value;
       
        this.ulArea.append(li1, li2, li3, li4)
}
}

new HTMLInit('#animaliList')

class Pets{
    constructor(pn,on,s,b){
        this.petName = pn;
        this.onwerName = on;
        this.species = s;
        this.breed = b;
    }
    comparStessoProprietario(altroAnimale){
        if (this.onwerName === altroAnimale.onwerName){
            return "true";
        }else{
            return "false";
        }
    }
}






 

