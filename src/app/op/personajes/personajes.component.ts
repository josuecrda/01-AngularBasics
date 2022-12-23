import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/op.interfaces';

import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  @Input() personajes: IPersonaje[] = [];

}
