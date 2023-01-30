import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  openAlert: boolean = false;

  mostrar_en_consola(name : string){

    this.openAlert = true;
    console.log(name);
  }
}
