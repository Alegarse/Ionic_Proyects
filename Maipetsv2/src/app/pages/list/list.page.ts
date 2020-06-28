import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/model/mascota';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  mascotas: Observable<Mascota[]>;

  constructor(
    private itemService: ItemService, 
    private router: Router,
    private authService: AuthService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      () => this.mascotas = this.itemService.getItems()
    );
  }

  addItem() {
    this.router.navigateByUrl('/create-item')
  }

  goEditItem(id: string) {
    this.router.navigateByUrl('/edit-item/' + id);
  }

  // Aviso de cofirmación para borrado
  async presentAlertConfirm(id: string, nombre: string) {
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
          handler: () => this.itemService.deleteItemById(id)
        }
      ]
    });
    await alert.present();
  }
}