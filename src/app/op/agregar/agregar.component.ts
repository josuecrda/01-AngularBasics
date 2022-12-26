import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPersonaje } from '../interfaces/op.interfaces';
import { opService } from '../services/op.service';

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

  constructor(private opService:opService){

  }

  // @Output () onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  agregar(){
   
    if ( this.nuevoa.nombre.trim().length === 0) {
      return ;

    }

    this.opService.agregarPersonajes(this.nuevoa);

    // this.onNuevoPersonaje.emit( this.nuevoa )
    this.nuevoa = {
      nombre: "",
      poder: 0
    }



  }


}
