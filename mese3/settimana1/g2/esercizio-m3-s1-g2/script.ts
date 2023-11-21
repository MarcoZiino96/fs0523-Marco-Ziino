class Accaunt{
   balanceInit:number=0;
}

class SonAccaunt   extends Accaunt{
    versamento(n:number):number{
        return this.balanceInit += n;
     }
     prelievo(n:number){
         if (this.balanceInit <= 0 || n > this.balanceInit || n < 10){
             console.log('il prelievo non può essere effettuato'); 
         }else{ 
            return  this.balanceInit -= n;
        }
            
         } 
         mostraSaldo(){
             console.log(this.balanceInit); 
         } 
}



 let sonAccaunt:SonAccaunt = new SonAccaunt();

 sonAccaunt.mostraSaldo();
sonAccaunt.versamento(50000);
sonAccaunt.mostraSaldo();
sonAccaunt.prelievo(10000);
sonAccaunt.mostraSaldo();
sonAccaunt.prelievo(9);
sonAccaunt.mostraSaldo();

class MotherAccaunt extends SonAccaunt{

    addInteresse():number{
         let int:number = this.balanceInit * 1.1;
         let interesse:number = int - this.balanceInit
         console.log(` l'interesse applicato sulla cifra di ${this.balanceInit} è di ${interesse}`);
         return interesse;
    }
}

let motherAccaunt:MotherAccaunt = new MotherAccaunt();

motherAccaunt.mostraSaldo();
motherAccaunt.versamento(50000);
motherAccaunt.mostraSaldo();
motherAccaunt.prelievo(10000);
motherAccaunt.mostraSaldo();
motherAccaunt.prelievo(9);
motherAccaunt.mostraSaldo();
motherAccaunt.addInteresse();

















