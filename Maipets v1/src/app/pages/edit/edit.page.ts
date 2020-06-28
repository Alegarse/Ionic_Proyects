import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  cod: String = "";

  mascota: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    color: '',
    fechaN: ''
  }
  
  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Para establecer diferencia en el título de la pagina
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.cod = "Editar";
      this.mascota = this.mascotaService.getMascota(+id);
    } else {
      this.cod = "Añadir"
    }
  }

  saveMasc() {
    this.mascotaService.saveMasc(this.mascota).then(
      () => this.router.navigateByUrl(`/user`)
    );
    }
}
