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
exports.Point3DBis = void 0;
var exo2_4_1 = require("../exo/exo2.4");
var Point3DBis = /** @class */ (function (_super) {
    __extends(Point3DBis, _super);
    function Point3DBis(pZ, pX, pY) {
        var _this = _super.call(this, pX, pY) || this;
        _this.setZ(pZ);
        return _this;
    }
    Point3DBis.prototype.setZ = function (pz) {
        this.z = pz;
    };
    return Point3DBis;
}(exo2_4_1.Point2D));
exports.Point3DBis = Point3DBis;
console.log(new Point3DBis(10, 5, 7));
//# sourceMappingURL=point3DBis.js.map