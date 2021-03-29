import { Vehicule } from "./vehicule";

class Voiture extends Vehicule {

    /*
    immatriculation de la voiture
    */
    private immatriculation: string;

    constructor(marque: string, modele: string, annee: Date, immatriculation: string = "") {
        super(marque, modele, annee);
        this.immatriculation = immatriculation;
    }

}

