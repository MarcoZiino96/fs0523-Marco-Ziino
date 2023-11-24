interface Sim{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

class Smartphone implements Sim{
    carica = 0;
    numeroChiamate = 0;   
    costoMinuto = 0.2; 

     ricarica(euro:number):void{
        this.carica += euro;
    }

    numero404():string {
        return `il tuo credito residuo è di ${this.carica}`+`€`;
    }
    getNumeroChiamate():number{
        return this.numeroChiamate;
    }

    chiamata(min:number):void{
        this.carica = this.carica - (this.costoMinuto * min);
        this.numeroChiamate ++; 
    }
     azzeraChiamate():void{
        this.numeroChiamate = 0;
    }
}

let simUtente1:Sim = new Smartphone()

console.log(simUtente1);
simUtente1.ricarica(30);
console.log(simUtente1);
simUtente1.chiamata(10);
simUtente1.chiamata(20);
simUtente1.chiamata(3);
console.log(simUtente1.getNumeroChiamate());
console.log(simUtente1.numero404());
console.log(simUtente1);
simUtente1.azzeraChiamate();
console.log(simUtente1);

let simUtente2:Sim = new Smartphone()

console.log(simUtente2);
simUtente2.ricarica(20);
console.log(simUtente2);
simUtente2.chiamata(5);
simUtente2.chiamata(20);
simUtente2.chiamata(6);
console.log(simUtente2.getNumeroChiamate());
console.log(simUtente2.numero404());
console.log(simUtente2);
simUtente2.azzeraChiamate();
console.log(simUtente2);

let simUtente3:Sim = new Smartphone()

console.log(simUtente3);
simUtente3.ricarica(10);
console.log(simUtente3);
simUtente3.chiamata(5);
simUtente3.chiamata(10);
simUtente3.chiamata(6);
console.log(simUtente3.getNumeroChiamate());
console.log(simUtente3.numero404());
console.log(simUtente3);
simUtente3.azzeraChiamate();
console.log(simUtente3);























