import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { PhotoService } from '../services/photo.service';
import { ShareService } from '../services/share.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(
    private cameraService: CameraService,
    private photoService: PhotoService,
    private shareSevice: ShareService,
    public alertController: AlertController
  ) {}

  async takePicture() {
    const photoPath = await this.cameraService.takePicture();
    this.photoService.insertPhoto(photoPath);
  }

  sharePhoto(path: string){
    this.shareSevice.sharePhoto(path);
  }

  removePhoto(path: string) {
    this.photoService.removePhoto(path);
  }

  async presentAlertConfirm(path: string) {
    const alert = await this.alertController.create({
      header: 'Borrar imagen',
      message: `Vas a borrar la fotografía`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => this.photoService.removePhoto(path),
        }
      ]
    });
    await alert.present();
  }
}
