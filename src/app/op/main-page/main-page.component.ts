import { Component, OnInit } from '@angular/core';

interface IPersonaje {
  nombre: string;
  poder: number;
}

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

  agregar(){
   
    if ( this.nuevo.nombre.trim().length === 0) {
      return ;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

  cambiarNombre(event:any){
    console.log(event.target.value)

  }

}
