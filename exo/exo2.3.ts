export class Point2D {

    private x: number | undefined;
    private y: number | undefined;
    private static compteur: number = 0;

    constructor(pX?: number, pY?: number) {
        this.setX(pX);
        this.setY(pY);
    }

    setX(px: number) {
        this.x = px;
    }

    setY(py: number) {
        this.y = py;
    }

    // getX() {
    //     return this.x;
    // }

    // getY() {
    //     return this.y;
    // }

    static getcompteur() {
        return this.compteur;
    }
}

let point = new Point2D(10);
console.log(point);