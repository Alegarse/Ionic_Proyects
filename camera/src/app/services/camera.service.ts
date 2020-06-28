import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins,CameraResultType, CameraSource } from '@capacitor/core';
const { Camera} = Plugins

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  imageOptions = {
    // Await para esperar a que llegue la foto y entonces la guarda
    quality: 50,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
  };

  constructor( private sanitizer: DomSanitizer ) {}

   // Copiado para la camara (Tomadas de https://capacitor.ionicframework.com/docs/apis/camera/)
  async takePicture(): Promise<SafeResourceUrl> {
    const image = await Camera.getPhoto(this.imageOptions);
    return this.sanitizer
    .bypassSecurityTrustResourceUrl(
      image && image.webPath); // Al usar Uri, se debe poner webPath
  }

}
