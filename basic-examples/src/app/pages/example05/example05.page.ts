import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example05',
  templateUrl: './example05.page.html',
  styleUrls: ['./example05.page.scss'],
})
export class Example05Page implements OnInit {

  // Creamos arrays para usarlos (nombre: tipoDeDatos [])
  numbers: number[];
  fruits: string[];

  constructor() { }

  ngOnInit() {
    this.numbers = [1, 2, 23, 42, 51, 66, 74, 85, 99];
    this.fruits = ["pera", "manzana", "kiwi", "platano", "melon", "sandia", "mango"];

  }
}