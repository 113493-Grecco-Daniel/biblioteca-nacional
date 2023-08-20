import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentBibliotecaComponent } from './component-biblioteca/component-biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBibliotecaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
