import { Component } from '@angular/core';


@Component({
  selector: 'app-forumario-plantilla',
  templateUrl: './forumario-plantilla.component.html',
  styleUrls: ['./forumario-plantilla.component.css']
})
export class ForumarioPlantillaComponent {

  persona = {
    nombre: '',
    edad: ''
  };

  procesar(){
    console.log(this.persona)
  }


}
