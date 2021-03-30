var Point2D = /** @class */ (function () {
    function Point2D(pX, pY) {
        this._x = 10;
        this._y = 0;
        this.setX(pX);
        this.setY(pY);
    }
    Point2D.prototype.afficher = function () {
    };
    Point2D.prototype.setX = function (px) {
        this.x = px;
    };
    Point2D.prototype.setY = function (py) {
        this.y = py;
    };
    return Point2D;
}());
var point = new Point2D(10);
console.log(point);
//# sourceMappingURL=exo2.js.map