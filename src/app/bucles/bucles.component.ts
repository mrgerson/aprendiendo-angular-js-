import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit  {

  personas: Persona[] = [
    {nombre: 'Gerson', edad: 29},
    {nombre: 'Emmanuel', edad: 23},
    {nombre: 'Jesus', edad: 28},
    {nombre: 'Arnobis', edad: 30}
  ];

  constructor(){

  }

  ngOnInit(): void {

  }

}
