
export class Animal {

    nom: string;

    constructor(leNom: string) {
        this.nom = leNom;

    }

    deplacer(distance: number = 0) {
        console.log(`${this.nom} bouge de ${distance}m.`);
    }

    // autreMethode(unParam:string){
    //     console.log(unParam);
    // }
}
