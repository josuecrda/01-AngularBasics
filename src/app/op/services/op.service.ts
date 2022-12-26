import { Injectable } from "@angular/core";
import { IPersonaje } from "../interfaces/op.interfaces";

@Injectable()
export class opService {

    private _personajes: IPersonaje[] = [
        {nombre: "Luffy",
        poder: 14000},
        {
          nombre: "Law",
          poder: 13500
        }
    
    ];

    get personajes(){
        return [...this._personajes];
    }
    constructor(){

    }

    agregarPersonajes(personaje: IPersonaje){
        this._personajes.push(personaje);

    }


}