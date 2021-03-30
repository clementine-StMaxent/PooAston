"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
var vehicule_1 = require("../Voiture/vehicule");
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(marque, modele, annee, unId, immatriculation) {
        if (immatriculation === void 0) { immatriculation = ""; }
        var _this = _super.call(this, marque, modele, annee) || this;
        _this.vin = "";
        _this.immatriculation = immatriculation;
        _this.id = unId;
        return _this;
    }
    Voiture.prototype.getVin = function () {
        return this.vin;
    };
    Voiture.prototype.setVin = function (unVin) {
        this.vin = unVin;
    };
    Voiture.prototype.affecterId = function (id) {
        this.id = id;
    };
    return Voiture;
}(vehicule_1.Vehicule));
exports.Voiture = Voiture;
// let voiture = new Voiture ("", "", new Date, 1, "");
// voiture.setVin("1234")
// console.log(voiture.getVin());
//# sourceMappingURL=voiture.js.map