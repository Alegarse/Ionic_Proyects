import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascotas: Mascota[] = [];

  constructor(private storage: Storage) {

    this.getMascotas().then(
      data => this.mascotas = (data == null) ? [] : data)  
    // Si llegan datos los metemos en el array mascotas
    // En caso de ser null mete el array vacio y sino mete datos
   }

     // Obtener mascotas cuando llegen
  getMascotas(): Promise<Mascota[]> {
    return this.storage.get('mascotas');  // Mientras no tenga datos mostrará el array vacio
    
  }

  getMascota(id: number): Mascota {
    return this.mascotas.filter(t => t.id == id)[0];
  }

  // Guardar la mascota usando una promesa
  saveMasc(t: Mascota): Promise<boolean> { 
    if (t.id == undefined) { // Sino existe ese Id añado una mascota con ese indice
      this.addMasc(t);
    } else {
      this.updateMasc(t); // Si existe ese Id de mascota, la introduzco en su valor
    }

    return this.storage.set('mascotas', this.mascotas); // Machaco y guardo todo el array de mascotas
  }

  // Añadir mascota
  addMasc(m: Mascota) {
    let id = 0;

    if (this.mascotas.length > 0) {
      id = this.mascotas[this.mascotas.length - 1].id + 1;
    }
    const mascToSave = {
      id: id,
      nombre: m.nombre.toUpperCase(),
      especie: m.especie.toLowerCase(),
      raza: m.raza.toLowerCase(),
      color: m.color.toLowerCase(),
      fechaN: m.fechaN
    };
    this.mascotas.push(mascToSave);
  }

  // Editar mascota
  updateMasc(m) {
    const index = this.mascotas.findIndex(
      mAux => mAux.id == m.id
    );
    this.mascotas[index].nombre = m.nombre; // Update nombre
    this.mascotas[index].especie = m.especie; // Update especie
    this.mascotas[index].raza = m.raza; // Update raza
    this.mascotas[index].color = m.color; // Update color
    this.mascotas[index].fechaN = m.fechaN; // Update fecha de nacimiento
  }

  // Eliminar mascota
  deleteMasc(id: number): Promise<boolean> {

    this.mascotas = this.mascotas.filter(t => t.id != id);
    return this.storage.set('mascotas', this.mascotas) // Return por la promesa y machacamos el array con todo menos el borrado
  }


}



