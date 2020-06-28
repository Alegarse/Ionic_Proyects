import { Component } from "@angular/core";

// Importaciones para la camara (Tomadas de https://capacitor.ionicframework.com/docs/apis/camera/)
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CameraService } from '../services/camera.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {

  constructor(private cameraService: CameraService,
    private photoService: PhotoService) {}

  async takePicture(){
    const photoPath = await this.cameraService.takePicture();
    this.photoService.insertPhoto(photoPath);
    console.log("Ruta de la foto: " + photoPath);
  }

  removePhoto(path: SafeResourceUrl){
    this.photoService.removePhoto(path);
  }
  
}
