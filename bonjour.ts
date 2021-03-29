// function affiche() {
//     console.log("Une fonction qui affiche et qui nest pas une méthode");
// }


class Bonjour {
    message: string;

    constructor(oneMessage: string) {
        this.message = oneMessage;
    
    }
    affiche() {
        console.log("Bonjour " + this.message );
    }
}

let bjr = new Bonjour("Adrien");
let bjr2 = new Bonjour("Clémentine");

bjr.affiche();
bjr2.affiche();
// affiche();
​