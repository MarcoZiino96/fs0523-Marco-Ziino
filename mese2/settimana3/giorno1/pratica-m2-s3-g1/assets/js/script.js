
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
            return `false`;
        }
    }
 }


 let animal = new Pets('jonny', 'Marco' , 'Cane', 'Bassotto');
 let animal2 = new Pets('franco', 'Marco' , 'Gatto', 'Persiano');
 let animal3 = new Pets('jonathan', 'Alessio' , 'Ucello', 'Passerotto');

 console.log(animal.comparStessoProprietario(animal3));
 console.log(animal.comparStessoProprietario(animal2));
 console.log(animal2.comparStessoProprietario(animal3));
 console.log(animal3.comparStessoProprietario(animal2));
 console.log(animal2.comparStessoProprietario(animal));




