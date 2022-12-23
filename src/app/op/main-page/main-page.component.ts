import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/op.interfaces';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  

  personajes: IPersonaje[] = [
    {nombre: "Luffy",
    poder: 14000},
    {
      nombre: "Law",
      poder: 13500
    }


  ]
  nuevo: IPersonaje = {
    nombre: "Zoro",
    poder: 12500
  }


  
  cambiarNombre(event:any){
    console.log(event.target.value)
  }


  agregarNuevoPersonaje( argumento: IPersonaje) {
      this.personajes.push(argumento);
      console.log(argumento);
    }


 

}
