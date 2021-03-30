export class Point2D {

    private x: number | undefined;
    private y: number | undefined;

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


}