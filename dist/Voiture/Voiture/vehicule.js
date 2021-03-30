"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(laMarque, leModele, Annee) {
        this._desc = "";
        this.marque = laMarque;
        this.modele = leModele;
        this.annee = Annee;
    }
    Object.defineProperty(Vehicule.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (uneDesc) {
            this._desc = uneDesc;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;
// let maVoiture = new Vehicule("", "", new Date);
// maVoiture.desc = "Une desc"
// console.log(maVoiture.desc);
//# sourceMappingURL=vehicule.js.map