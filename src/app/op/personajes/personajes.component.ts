import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/op.interfaces';

import { MainPageComponent } from '../main-page/main-page.component';
import { opService } from '../services/op.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  // @Input() personajes: IPersonaje[] = [];

  get personajes(){
    return this.opService.personajes;
  }


constructor( private opService: opService) {
}
}
