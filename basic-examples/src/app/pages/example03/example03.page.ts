import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.page.html',
  styleUrls: ['./example03.page.scss'],
})
export class Example03Page implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
  }
  
  testButton(): void {
    console.log('Pulsando el botón');
  }

  generateValue() {
    this.n = Math.floor(Math.random() * 10 + 1);
  }
  // Estas dos se han resumido en una sola después
  //incrementValue(n) {
  //  this.n += 1;
  //  return n;
  //}

  //decrementValue(n) {
  //  this.n -= 1;
  //  return n;
  //}

  incValue(x: number): void {
    this.n += x;
  }

}
