import { Appareil } from './Appareils/appareil';
import { Voiture } from './Voiture/Voiture/voiture';
import { Vehicule } from "./Voiture/Voiture/vehicule";
import { IOnOff } from './Voiture/Interface/IOnOff';

let maVoiture = new Vehicule("", "", new Date);
maVoiture.desc = "Une desc"
console.log(maVoiture.desc);

let voiture = new Voiture("", "", new Date, 1, "");
voiture.setVin("1234")
console.log(voiture.getVin());



let v1 = new Voiture("","",new Date, 1)
let v2 = new Voiture("","",new Date, 2)
let v3 = new Voiture("","",new Date, 3)
let v4 = new Voiture("","",new Date, 4)
// function maFunction() {
//     return null
// }

// maFunction();

let list : Array<IOnOff> = new Array;
// list.push(new Voiture("","",new Date, 1));
// list.push(new Voiture("","",new Date, 2));
// list.push(new Voiture("","",new Date, 3));

list.push
let appareils: Appareil = new Appareil()