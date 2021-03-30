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

    private _desc: string = "";

    constructor(laMarque: string, leModele: string, Annee: Date) {
        this.marque = laMarque;
        this.modele = leModele;
        this.annee = Annee;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(uneDesc: string) {
        this._desc = uneDesc;
    }
}

// let maVoiture = new Vehicule("", "", new Date);
// maVoiture.desc = "Une desc"
// console.log(maVoiture.desc);