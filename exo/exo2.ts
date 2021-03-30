class Point2D {

    private x: number | undefined;
    private y: number | undefined;
    private _x: number = 10;
    private _y: number = 0;

    constructor(pX?: number, pY?: number) {
        this.setX(pX)
        this.setY(pY);
    }

    afficher(): void {

    }

    setX(px: number) {
        this.x = px
    }


    setY(py: number) {
        this.y = py
    }
}

let point = new Point2D(10);
console.log(point);