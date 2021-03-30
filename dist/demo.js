"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var voiture_1 = require("./Voiture/Voiture/voiture");
var vehicule_1 = require("./Voiture/Voiture/vehicule");
var maVoiture = new vehicule_1.Vehicule("", "", new Date);
maVoiture.desc = "Une desc";
console.log(maVoiture.desc);
var voiture = new voiture_1.Voiture("", "", new Date, 1, "");
voiture.setVin("1234");
console.log(voiture.getVin());
// function maFunction() {
//     return null
// }
// maFunction();
//# sourceMappingURL=demo.js.map