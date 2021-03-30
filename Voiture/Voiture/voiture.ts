import { Vehicule } from "../Voiture/vehicule";

export class Voiture extends Vehicule {

    private id: number;
    /*
    immatriculation de la voiture
    */
    private immatriculation: string;

    private vin: string = "";

    constructor(marque: string, modele: string, annee: Date, unId: number, immatriculation: string = "") {
        super(marque, modele, annee);
        this.immatriculation = immatriculation;
        this.id = unId;
    }

    public getVin(): string {
        return this.vin
    }

    public setVin(unVin: string) {
        this.vin = unVin;
    }

    affecterId(id: number) {
        this.id = id;
    }

}

// let voiture = new Voiture ("", "", new Date, 1, "");
// voiture.setVin("1234")
// console.log(voiture.getVin());



