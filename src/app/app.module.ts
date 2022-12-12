import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador/contador.modulo';
import { OpModule } from './op/op.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    OpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
