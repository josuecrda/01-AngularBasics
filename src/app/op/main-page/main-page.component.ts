import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/op.interfaces';
import { opService } from '../services/op.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo: IPersonaje = {
    nombre: "Zoro",
    poder: 12500
  }

    constructor(){
    }
 

}
