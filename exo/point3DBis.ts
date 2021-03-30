import { Point2D } from '../exo/exo2.4';

export class Point3DBis extends Point2D {

    private z: number | undefined;

    constructor(pZ?: number, pX?: number, pY?: number) {
        super(pX, pY)
        this.setZ(pZ)
    }

    setZ(pz: number) {
        this.z = pz
    }

}

console.log(new Point3DBis(10,5,7));