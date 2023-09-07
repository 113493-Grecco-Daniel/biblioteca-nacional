import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngresoDatosComponent } from './components/ingreso-datos/ingreso-datos.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoDatosComponent,
    OperacionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
