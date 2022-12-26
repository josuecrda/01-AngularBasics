import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { opService } from './services/op.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent 
  ],
  providers: [
    opService
  ]
})
export class OpModule { }
