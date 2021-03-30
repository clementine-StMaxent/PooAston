export declare class Vehicule {
    private marque;
    private modele;
    private annee;
    private _desc;
    constructor(laMarque: string, leModele: string, Annee: Date);
    get desc(): string;
    set desc(uneDesc: string);
}
