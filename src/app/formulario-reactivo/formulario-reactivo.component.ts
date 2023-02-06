import { Component } from '@angular/core';

//importar de angular forms los grupos de formularios para trabajar con formularios reactivos
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  constructor(private fb: FormBuilder){

  }

  //creo los getter para la validación de los formularios
  /* estos metodos los llamó en la vista para ahorrar la lógica en el front */
  get name(){
    return this.formUser.get('name') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }

  //campos de formularios en un grupo
  //de esta manera más larga ya que toca agregar FormControl a cada campo del formulario
  /* formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  }); */

 /*  de esta manera se ahorra instaciar el FormControl en cada propiedad, con la diferncia
    que hay que importar el FormBuilder para armar un grupo
  */
  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  });

  procesar(){
    console.log(this.formUser.value);
  }

}
