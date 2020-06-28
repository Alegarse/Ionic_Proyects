import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example04',
  templateUrl: './example04.page.html',
  styleUrls: ['./example04.page.scss'],
})
export class Example04Page implements OnInit {

  //Definimos las variables a usar
  word: string;

  constructor() { }

  ngOnInit() {
    this.reset(); // Desde este método llamo al siguiente para resetear la cadena de caracteres y dejarla en blanco
  }

  reset(): void {
    this.word = ""; //Deja la cadena de caracteres'word' en blanco

  }

}
