// function affiche() {
//     console.log("Une fonction qui affiche et qui nest pas une méthode");
// }
var Bonjour = /** @class */ (function () {
    function Bonjour(oneMessage) {
        this.message = oneMessage;
    }
    Bonjour.prototype.affiche = function () {
        console.log("Bonjour " + this.message);
    };
    return Bonjour;
}());
var bjr = new Bonjour("Adrien");
var bjr2 = new Bonjour("Clémentine");
bjr.affiche();
bjr2.affiche();
// affiche();
//# sourceMappingURL=bonjour.js.map