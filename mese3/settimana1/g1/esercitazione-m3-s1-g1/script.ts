function random():number{
 return Math.ceil(Math.random()* 100);   
};

function playerGuess(p1:number, p2:number){
    let numberRandom:number = random();
    console.log(`il numero casuale è ${numberRandom}`);
    
    if(p1 === numberRandom){
        console.log(`il giocatore che ha dichiarato ${p1} ha indovinato il numero casuale`);
    }else if (p2 === numberRandom){ 
        console.log(`il giocatore che ha dichiarato ${p2} ha indovinato il numero casuale`);      
} else if (Math.abs((numberRandom - p1)) > Math.abs((numberRandom-p2))){
    console.log(`il giocatore che ha dichiarato ${p2} non ha indovinato  il numero casuale ${numberRandom} ma ci è andato piu vicino`);
}else{
    console.log(`il giocatore che ha dichiarato ${p1} non ha indovinato  il numero casuale ${numberRandom} ma ci è andato piu vicino`);
    
}
};

 playerGuess(30, 35);
