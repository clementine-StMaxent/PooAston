import { IOnOff } from "../Voiture/Interface/IOnOff";

export class Appareil  {

    private appareils: Array<IOnOff>;

    eteindre(){
        this.appareils.forEach(e =>{
            e.off()
        });
    }

    allumer(){
        this.appareils.forEach(e =>{
            e.on()
        });
    }
}