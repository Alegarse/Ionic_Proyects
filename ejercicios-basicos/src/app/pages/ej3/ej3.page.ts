import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej3',
  templateUrl: './ej3.page.html',
  styleUrls: ['./ej3.page.scss'],
})
export class Ej3Page implements OnInit {

  num: number = 0 ;

  constructor() { }

  ngOnInit() {
  }

  modValue(n): void{
    this.num += n;
  }

  reset (): void{
    this.num = 0;
  }

}
