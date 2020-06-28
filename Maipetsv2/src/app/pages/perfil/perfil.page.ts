import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  photoPath: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
    quality: 50,
    allowEditing: false,
    saveToGallery: false,
    correctOrientation: true,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
    });
    this.photoPath = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
    }



}
