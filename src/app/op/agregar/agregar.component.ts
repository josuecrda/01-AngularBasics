import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPersonaje } from '../interfaces/op.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {


  @Input() nuevoa: IPersonaje = {
    nombre: "",
    poder: 0
  }

  @Output () onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  agregar(){
   
    if ( this.nuevoa.nombre.trim().length === 0) {
      return ;

    }

    console.log(this.nuevoa)
    this.onNuevoPersonaje.emit( this.nuevoa )
    this.nuevoa = {
      nombre: "",
      poder: 0
    }



  }


}
