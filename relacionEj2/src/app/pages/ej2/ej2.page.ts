import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.page.html',
  styleUrls: ['./ej2.page.scss'],
})
export class Ej2Page implements OnInit {

  // Variables que intervienen
  met: number;
  cent: number;
  pulg: number;

  constructor() { }

  ngOnInit() {
  }

  // Métodos del conversor

  cambioMet(): void {
    this.cent = this.met * 100;
    this.pulg = this.met * 39,3701;

  }

  cambioCent(): void {
    this.met = this.cent / 100;
    this.pulg = this.cent * 0,393701;
  }

  cambioPulg(): void {
    this.met = this.pulg * 0.0254;
    this.cent = this.pulg * 2.54;
  }

}
