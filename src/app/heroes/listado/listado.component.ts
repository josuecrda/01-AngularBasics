import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Thor", "Capitan America", "Wolverine", "Hulk", "AntMan"]; 
  heroeBorrado: string = ""

  borrarHeroe(){ 
    console.log("Borrando Heroe...");
    this.heroeBorrado =this.heroes.shift() || "";
   
  }
  
   }

 
