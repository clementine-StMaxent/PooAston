"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(leNom) {
        this.nom = leNom;
    }
    Animal.prototype.deplacer = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.nom + " bouge de " + distance + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map