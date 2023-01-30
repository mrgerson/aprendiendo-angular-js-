import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent  implements OnInit{


  constructor(){

  }

  ngOnInit(): void {

  }

  //variables que se utilizan en el html
  text_color : string = '';
  button_disable: boolean = false;
}
