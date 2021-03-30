import { Vehicule } from "../Voiture/vehicule";
export declare class Voiture extends Vehicule {
    private id;
    private immatriculation;
    private vin;
    constructor(marque: string, modele: string, annee: Date, unId: number, immatriculation?: string);
    getVin(): string;
    setVin(unVin: string): void;
    affecterId(id: number): void;
}
