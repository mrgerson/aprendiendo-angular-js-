import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { ForumarioPlantillaComponent } from './forumario-plantilla/forumario-plantilla.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';


//FormsModule para los formularios de plantillas -- ReactiveFormsModule para formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/*
- en declarations se declaran los componentes que se van agregando
-en imports los diferentes librerias y caracteristicas que se necesitan

*/

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    ForumarioPlantillaComponent,
    FormularioReactivoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
