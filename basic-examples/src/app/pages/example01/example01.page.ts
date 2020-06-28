import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {
  //Definimos aquí variables de distintos tipos,cuyoámbito es la página (Son atributos)
  x: number;
  y: number;
  word: string;
  person: object; //Objeto de Javascript (JSON)

  constructor() { }

  ngOnInit() {
    // Aquí inicializamos los valores si queremos
    this.x = 24;
    this.y = 9;
    this.word = "wonderfull";
    this.person = { //Creacion en JSON. Se estructura como clave: valor
      name: "Alan Brito",
      job: "Junior Developer",
      salary: 2000
    }
  }

}
