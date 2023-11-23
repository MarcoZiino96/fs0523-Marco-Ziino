abstract class PropTasse{

    constructor( public codredd:number,
                 public redditoannuolordo:number, 
                 public tasseinps:number, 
                 public tasseirpef:number 
     ){}

     abstract getUtileTasse():number 
     abstract getTasseInps():number
     abstract getTasseIrpef():number
     abstract getRedditoAnnuoNetto():number
}

class Lavoratore extends PropTasse{
    constructor(codredd:number,redditoannuolordo:number, tasseinps:number, tasseirpef:number ){
        super(codredd, redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtileTasse():number{
        return this.getRedditoAnnuoNetto() - this.getTasseIrpef() - this.getTasseInps()
    } 
    getTasseInps():number{
        return this.getRedditoAnnuoNetto() * (this.tasseinps/100)
    }
    getTasseIrpef():number{
        return this.getRedditoAnnuoNetto() * (this.tasseirpef /100)
    }
    
    getRedditoAnnuoNetto():number{
       return  this.redditoannuolordo * (this.codredd /100);
    }
}

let lavoratoreA = new Lavoratore(40, 60000, 26, 43)


console.log(lavoratoreA.getRedditoAnnuoNetto());
console.log(lavoratoreA.getTasseIrpef());
console.log(lavoratoreA.getTasseInps());
console.log(lavoratoreA. getUtileTasse());

for (let index = 0; index < 10; index++) {
   
   console.log(index);
    
}



