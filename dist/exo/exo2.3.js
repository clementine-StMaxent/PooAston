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
    // getX() {
    //     return this.x;
    // }
    // getY() {
    //     return this.y;
    // }
    Point2D.getcompteur = function () {
        return this.compteur;
    };
    Point2D.compteur = 0;
    return Point2D;
}());
exports.Point2D = Point2D;
var point = new Point2D(10);
console.log(point);
//# sourceMappingURL=exo2.3.js.map