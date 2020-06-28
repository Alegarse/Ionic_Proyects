import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.page.html',
  styleUrls: ['./ej2.page.scss'],
})
export class Ej2Page implements OnInit {

  //Definimos el nombre a mostrar
  name: string = "";
  funcion: string = "Muestra nombre";

  constructor() { }

  ngOnInit() {

  }

  // Métodos para el funcionamiento

  reset(): void {
    this.funcion = "Muestra nombre";
    this.name = "";

  }

  muestraNombre(): void {
    if (this.funcion == "Muestra nombre") {
      this.name = "Alejandro García Serrano";
      this.funcion = "Limpia pantalla";
    } else {
      this.reset(); // Desde este método llamo al siguiente para resetear la cadena de caracteres y dejarla en blanco
    }


  }

}
