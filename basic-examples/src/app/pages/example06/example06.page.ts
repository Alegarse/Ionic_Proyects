import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {

  // Creamos arrays para usarlos (nombre: tipoDeDatos [])
  numbers: number[];
  fruits: string[];
  n: number;
  frut: string;
  num: number;

  constructor() { }

  ngOnInit() {
    this.numbers = [1, 2, 23, 42, 51, 66, 74, 85, 99];
    this.fruits = ["pera", "manzana", "kiwi", "platano", "melon", "sandia", "mango"];

  }

  inputNum (n) {
    this.numbers.push(n);
  }

  reset(): void {
    this.num = null;
    this.frut = ""; //Deja la cadena de caracteres'word' en blanco

  }

  inputFrut (f) {
    this.fruits.push(f);
  }

}
