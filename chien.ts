import { Animal } from './animal';

class Chien extends Animal {
    constructor(name: string) {
        super(name);
    }
    deplacer(distance: number = 0) {
        console.log(`${this.nom} bouge de ${distance}m.`);
    }
    autreMethode(unParam:string, unsecondParam:number = 10){
        // console.log(unParam + " " + unsecondParam);
        return unParam + " " + unsecondParam
    }

}

let monChien = new Chien("Milou");
monChien.deplacer(25);
monChien.autreMethode("param")
