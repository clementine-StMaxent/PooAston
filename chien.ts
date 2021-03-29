import { Animal } from './animal';

class Chien extends Animal {
    constructor(name: string) {
        super(name);
    }
    deplacer(distance: number = 0) {
        console.log("Je suis fénant");
    }
    // autreMethode(unParam: string, unsecondParam: number = 10) {
    //     // console.log(unParam + " " + unsecondParam);
    //     return unParam + " " + unsecondParam
    // }
    manger() {
        console.log("Je mange");
    }

}

let chien = new Chien("Milou");
chien.deplacer(25);
// chien.autreMethode("param")
chien.manger();

let chien2: Animal;
chien2 = chien;
// chien2.manger()
chien2.deplacer();
chien2.deplacer(56);