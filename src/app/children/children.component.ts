import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {


  /* comunicación entre componentes. Input y Output para entrada y salida de información con estos se usan para comunicar
  componentes padres e hijo y viceversa. y EventEmitter se usa para poder emitir la información*/

  //recibir información desde el padre con input
  @Input() title?: string;

  //mandar información al padre desde el componente hijo
  @Output() titleChange = new EventEmitter<string>();

  //metodo que llama desde el hijo, se ejecta cada vez que hay un evento de presionar una tecla
  //emite el mensaje hacía el componente padre
  emitTitlleChange(){
    this.titleChange.emit(this.title);
  }
}
