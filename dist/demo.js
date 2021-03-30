"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appareil_1 = require("./Appareils/appareil");
var voiture_1 = require("./Voiture/Voiture/voiture");
var vehicule_1 = require("./Voiture/Voiture/vehicule");
var maVoiture = new vehicule_1.Vehicule("", "", new Date);
maVoiture.desc = "Une desc";
console.log(maVoiture.desc);
var voiture = new voiture_1.Voiture("", "", new Date, 1, "");
voiture.setVin("1234");
console.log(voiture.getVin());
var v1 = new voiture_1.Voiture("", "", new Date, 1);
var v2 = new voiture_1.Voiture("", "", new Date, 2);
var v3 = new voiture_1.Voiture("", "", new Date, 3);
var v4 = new voiture_1.Voiture("", "", new Date, 4);
// function maFunction() {
//     return null
// }
// maFunction();
var list = new Array;
// list.push(new Voiture("","",new Date, 1));
// list.push(new Voiture("","",new Date, 2));
// list.push(new Voiture("","",new Date, 3));
list.push;
var appareils = new appareil_1.Appareil();
//# sourceMappingURL=demo.js.map