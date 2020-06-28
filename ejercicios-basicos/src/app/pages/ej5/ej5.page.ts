import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej5',
  templateUrl: './ej5.page.html',
  styleUrls: ['./ej5.page.scss'],
})
export class Ej5Page implements OnInit {

  //Defino las variables que intervienen
  min: number = 0;
  max: number = 0;
  num: number = 0;

  constructor() { }

  ngOnInit() {
  }

  generaNum(): void {
  //this.num = Math.floor(Math.random() * ((this.max - this.min) + this.min));
  this.num = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));
  }

}
