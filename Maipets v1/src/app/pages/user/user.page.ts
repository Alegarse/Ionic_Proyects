import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  mascotas: Mascota[] = [];

  constructor(
    private mascService: MascotaService, 
    private router: Router, 
    public alertController: AlertController) { }

  ngOnInit() {
  }

  // Retardamos el ciclo de carga de las mascotas
  ionViewWillEnter(){ 
    this.mascService.getMascotas().then( 
      data => this.mascotas = data 
    );
  }

  // Ruta para la pagina de edición
  goEditMasc(id: number) {
    this.router.navigateByUrl(
      `/edit${ id != undefined ? '/' + id : ''}`
    );
  }

  // Borrado de mascota con promesa y una vez borrado se recargan las mscotas
  deleteMasc(id: number) {
    this.mascService.deleteMasc(id).then(
    () => this.mascService.getMascotas().then(
    data => this.mascotas = data)
    );
  }

  // Aviso de cofirmación para borrado
  async presentAlertConfirm(id: number, nombre: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar mascota',
      message: `Vas a borrar la mascota <strong>${nombre}</strong>, ¿Estás seguro?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Si',
          handler: () => this.deleteMasc(id)
        }
      ]
    });
    await alert.present();
  }

}
