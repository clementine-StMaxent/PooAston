export class Vehicule {
    /*
    Marque de la voiture
    */
    private marque: string;

    /*
    modele de la voiture
  */
    private modele: string;

    /*
annee de la voiture
*/
    private annee: Date;

    constructor(laMarque: string, leModele: string, Annee: Date) {
        this.marque = laMarque;
        this.modele = leModele;
        this.annee = Annee;
    }
}