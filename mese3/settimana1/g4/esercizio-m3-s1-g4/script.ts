class Store{
    constructor(
    public id:number,   
    public codprod:number,    
    public collezione:string,  
    public capo:string,    
    public modello:number,   
    public quantita:number,    
    public colore:string,    
    public prezzoivaesclusa:number,    
    public prezzoivainclusa:number,    
    public disponibile:string,    
    public saldo:number
     ){}

     getSaldoCapo():number{
        return this.prezzoivainclusa * (this.saldo/100); 
     }

     getAcquistoCapo():number{
        return this.prezzoivainclusa - this.getSaldoCapo();
     }
}


async function callProduct():Promise<any>{
    let res:Response = await fetch('Abbigliamento.json');
    let data:Store[] = await res.json();
    console.log(data);
    

    data.forEach(c =>{
       let capo = new Store (c.id, c.codprod, c.collezione, c.capo, c.modello, c.quantita, c.colore, c.prezzoivaesclusa, c.prezzoivainclusa, c.disponibile, c.saldo);
      console.log(capo.getSaldoCapo());
       console.log(capo.getAcquistoCapo()); 
    });
    
}
callProduct();