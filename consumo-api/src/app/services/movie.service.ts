import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Hace la llamada HTTP
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

// Generamos enum para poner los tipos de busqueda
export enum SearchType {
  all = '',
  movie = 'movie',
  serie = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //Necesitamos la url a donde llamara la api
  url = 'http://www.omdbapi.com/';
  apiKey = 'c8ad84bc';
  

  constructor(private http: HttpClient) { }

  //Ahora creamos dos métodos

  // Uno que llame pidiendo las que en el TITULO tengan esa coincidencia

  searchByTitle(title: string, type: SearchType): Observable <any> {

    //Hacemos la llamada segun indican en la API con un GET
    return this.http.get(
      `${this.url}?apiKey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`
      ).pipe(map(data => data ['Search'])); // Pipe es parta formatear la salida por pantalla -->
      // --> accediendo a un elemento
      // Entre llaves lo que queremos que filtre del resultado del observable
      // MAP coge elementos y los transforma

  }


  // Otro que busque los DETALLES de la película (Siempre usaremos un OBSERVABLEZ<ANY>)

  searchById(id: string): Observable<any> {

    //Hacemos la llamada segun indican en la API
    return this.http.get(`${this.url}?apiKey=${this.apiKey}&i=${id}&plot=full`);

  }


}
