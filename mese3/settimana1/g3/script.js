"use strict";
class PropTasse {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class Lavoratore extends PropTasse {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        return this.getRedditoAnnuoNetto() - this.getTasseIrpef() - this.getTasseInps();
    }
    getTasseInps() {
        return this.getRedditoAnnuoNetto() * (this.tasseinps / 100);
    }
    getTasseIrpef() {
        return this.getRedditoAnnuoNetto() * (this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo * (this.codredd / 100);
    }
}
let lavoratoreA = new Lavoratore(40, 60000, 26, 43);
console.log(lavoratoreA.getRedditoAnnuoNetto());
console.log(lavoratoreA.getTasseIrpef());
console.log(lavoratoreA.getTasseInps());
console.log(lavoratoreA.getUtileTasse());
for (let index = 0; index < 10; index++) {
    console.log(index);
}
//# sourceMappingURL=script.js.map