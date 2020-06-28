import { Injectable } from '@angular/core';
import { Plugins, FilesystemDirectory, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const { Filesystem } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  imageOptions = {
    quality: 60,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
  };

  constructor(private sanitizer: DomSanitizer) { }

  async takePicture(): Promise<string> {
    const originalPhoto = await Plugins.Camera.getPhoto(this.imageOptions);
    const photoInTempStorage = await Filesystem.readFile( {path: originalPhoto.path} );
    const miliseconds = (new Date()).getTime();
    const fileName = miliseconds + ".jpg";

    await Filesystem.writeFile({
      data: photoInTempStorage.data,
      path: fileName,
      directory: FilesystemDirectory.Data
    });

    const finalPhotoUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName
    });

    const photoPath = Capacitor.convertFileSrc(finalPhotoUri.uri);

    console.log('\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log('\nURL1: '+ finalPhotoUri.uri )
    console.log('\nURL2: '+ photoPath )
    console.log('\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

    return photoPath;
  }
}
