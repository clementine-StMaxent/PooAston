declare class Point2D {
    private x;
    private y;
    private _x;
    private _y;
    constructor(pX?: number, pY?: number);
    afficher(): void;
    setX(px: number): void;
    setY(py: number): void;
}
declare let point: Point2D;
