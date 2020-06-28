import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.page.html',
  styleUrls: ['./ej1.page.scss'],
})
export class Ej1Page implements OnInit {

  //Definimos el nombre a mostrar
  name: string = "";

  constructor() { }

  ngOnInit() {
    this.reset(); // Desde este método llamo al siguiente para resetear la cadena de caracteres y dejarla en blanco
  }

  // Métodos para el funcionamiento

  reset(): void {
    this.name = ""; //Hacemos que dee en blanco el string y asi no muestra nada
  }

  muestraNombre(): void{
    this.name = "Alejandro García Serrano";
  }

}
