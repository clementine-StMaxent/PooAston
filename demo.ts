import { Voiture } from './voiture';
import { Vehicule } from "./vehicule";

let maVoiture = new Vehicule("", "", new Date);
maVoiture.desc = "Une desc"
console.log(maVoiture.desc);

let voiture = new Voiture("", "", new Date, 1, "");
voiture.setVin("1234")
console.log(voiture.getVin());


// function maFunction() {
//     return null
// }

// maFunction();