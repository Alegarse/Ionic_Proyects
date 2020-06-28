import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  // Para recoger todos los datos
  item: any;

  // Inyectamos con activedRoute para que recoja la info pasada desde la otra pantalla
  // y movieService para poder usarlo
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit() {
    // Recogemos el id de la ruta pasada
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.searchById(id).subscribe(
      data => this.item = data // Cuando lleguen datos actualizo el item con esos datos
    );
  }

  openWebsite() {
    window.open(this.item.Website, '_blank');
  }

}
