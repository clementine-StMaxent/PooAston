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
var animal_1 = require("./animal");
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(name) {
        return _super.call(this, name) || this;
    }
    Chien.prototype.deplacer = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Je suis fénant");
    };
    // autreMethode(unParam: string, unsecondParam: number = 10) {
    //     // console.log(unParam + " " + unsecondParam);
    //     return unParam + " " + unsecondParam
    // }
    Chien.prototype.manger = function () {
        console.log("Je mange");
    };
    return Chien;
}(animal_1.Animal));
var chien = new Chien("Milou");
chien.deplacer(25);
// chien.autreMethode("param")
chien.manger();
var chien2;
chien2 = chien;
// chien2.manger()
chien2.deplacer();
chien2.deplacer(56);
//# sourceMappingURL=chien.js.map