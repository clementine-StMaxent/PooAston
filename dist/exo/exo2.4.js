"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(pX, pY) {
        this.setX(pX);
        this.setY(pY);
    }
    Point2D.prototype.setX = function (px) {
        this.x = px;
    };
    Point2D.prototype.setY = function (py) {
        this.y = py;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
//# sourceMappingURL=exo2.4.js.map