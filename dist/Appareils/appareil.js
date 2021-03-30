"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appareil = void 0;
var Appareil = /** @class */ (function () {
    function Appareil() {
    }
    Appareil.prototype.eteindre = function () {
        this.appareils.forEach(function (e) {
            e.off();
        });
    };
    Appareil.prototype.allumer = function () {
        this.appareils.forEach(function (e) {
            e.on();
        });
    };
    return Appareil;
}());
exports.Appareil = Appareil;
//# sourceMappingURL=appareil.js.map