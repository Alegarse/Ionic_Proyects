import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pantalla: number = 0;
  result: number;
  numAnt: number;
  numPos:number;
  o: string;
  n: number;

  constructor() {}

  //Métodos para la calculadora
  reset() {
    this.pantalla = 0;

  }
  clear(){

  }
  oper(o){

  }
  numero(n){
    this.numAnt = n;

  }
  cambiaSigno(){
    this.pantalla *= -1;

  }
  decimal(){
    this.pantalla 

  }
  resultado(){

  }

}
