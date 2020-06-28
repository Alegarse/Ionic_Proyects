import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PhotoRecord } from '../model/photo-record';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  photos: PhotoRecord[] = [];

  constructor() { }

  insertPhoto(path: SafeResourceUrl) {
    const record: PhotoRecord = {
      path: path,
      date: new Date()
    }
    this.photos.unshift(record);
  }

  removePhoto(path: SafeResourceUrl) {
    const i = this.photos.map(p => p.path).indexOf(path); // Me da elíndice de donde está la foto
    this.photos.splice(i, 1); // Indico el inice y que voy a borrar 1 (ese mismo)
  }

  getPhotos(){
    return this.photos;
  }
}
