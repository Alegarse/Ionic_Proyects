import { Component, OnInit } from '@angular/core';

// Importo los JSON con datos
import films from 'src/assets/json/films.json';


@Component({
  selector: 'app-ej6',
  templateUrl: './ej6.page.html',
  styleUrls: ['./ej6.page.scss'],
})
export class Ej6Page implements OnInit {

    // Exporto los datos de los archivos JSON a la  vista
    Peliculas: any = films;

  constructor() { }

  ngOnInit() {
  }

}
