import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej4',
  templateUrl: './ej4.page.html',
  styleUrls: ['./ej4.page.scss'],
})
export class Ej4Page implements OnInit {
  
  //Defino las variables para el nombre y el saludo
  name: string;
  saludo: string;

  constructor() { }

  ngOnInit() {
  }


  saludar(): void {
    this.saludo = "¡Hola " + this.name + "!";
    console.log("Saludo a " + this.name);
    this.name = "";
  }

}
