import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.page.html',
  styleUrls: ['./ej1.page.scss'],
})
export class Ej1Page implements OnInit {

  //Defino las variables que intervienen
  min: number;
  max: number;
  num: number = 0;

  mensaje: string = "Imposible generar el número";

  constructor() { }

  ngOnInit() {
  }

  generaNum(): void {
    if (this.min > this.max) {
    } else {
      this.num = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));
    }
  }

  change(): void {
    if (this.num == this.min) {
      this.num = this.max;
    } else {
      this.num = this.min;
    }
  }

}
