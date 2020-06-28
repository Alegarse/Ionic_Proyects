import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  pageTitle: string = "Nueva mascota"
  action: string = "Guardar"
  id: string;
  loading: boolean;

  mascota: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    color: '',
    fechaN: '',
    imageUrl: ''
  }

 constructor(
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
  ) { }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.itemService.getItemById(this.id).subscribe(
        data => {
          this.mascota = data;
          this.pageTitle = "Editar mascota";
          this.action = "Actualizar mascota"
        }
      )
    }
  }

  addItem() {
    if (this.action == "Guardar") {
      this.itemService.addItem(this.mascota);
    } else {
      this.itemService.updateItemById(this.id, this.mascota)
    }
    this.router.navigateByUrl('/list')
  }  

  
  onUpload(event) {

    this.loading = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      
      reader.onload = (e:any) => {

        // Para subir la imagen a Firebase
        const fileraw = event.target.files[0];
        console.log(fileraw);
        const idf = Math.random().toString(36).substring(2);
        const filePath = `uploads/file_${idf}`;
        const result = this.SaveImageRef(filePath, fileraw);
        const ref = result.ref;

        result.task.then(a => {
          ref.getDownloadURL().subscribe(a => {
            console.log(a);
            this.loading = false;
            // Asocio la url a laimagen de la mascota
            this.mascota.imageUrl = a;
          });
        });
      }, error => {
        alert("Error en la subida");
      }
    }
  }

  SaveImageRef(filePath, file) {
    return {
      task: this.storage.upload(filePath, file)
      , ref: this.storage.ref(filePath)
    };
  } 
}