import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: number = 0;
  num: number = 0;ç
  n: number;

  constructor() {}

  suma(){

  }

  resta() {

  }

  mult() {

  }

  div(){

  }

  clear(){
    this.resultado = 0;
  }

  intNum(n){
    this.num = n;
    this.constNum();
  }

  constNum(){
    this.num = num + 10* this.num;
  }

}
