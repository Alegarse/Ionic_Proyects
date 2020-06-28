import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];
  est: string;

  constructor(

    private taskService: TaskService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() { // Vamos a retardar en el ciclo de vida la carga de las tareas a ionViewWillEnter...(1)

    //this.taskService.getTasks().then( // Then indica cuando lleguen los datos
      //data => this.tasks = data // Actualizo los tasks con datos. Esto es así siempre
    //);
  }

  ionViewWillEnter(){ // (1)...para de esta forma al grabar un dato recarga mostrandolo tambien con los ya existentes

    this.taskService.getTasks().then( // Then indica cuando lleguen los datos
      data => this.tasks = data // Actualizo los tasks con datos. Esto es así siempre
    );
  }

  goEditTask(id: number) {
    this.router.navigateByUrl(
      `/edit${ id != undefined ? '/' + id : ''}`
    );
  }

  deleteTask(id: number) { // Como el deleteTask de servicios devuelve una promesa, cuandos e haya resuelto 
                           // me lo muestras de nuevo actualizado (then)
    this.taskService.deleteTask(id).then( //Ha borrado y entonces cargo las tareas al array
      () => this.taskService.getTasks().then( // Y entonces recargame las tareas
        data => this.tasks = data 
      )
    );
    //this.tasks = this.taskService.getTasks();
  }

  async presentAlertConfirm(id: number, title: string) {
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `Vas a borrar la tarea <strong>${title}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => this.deleteTask(id)
        }
      ]
    });
    await alert.present();
  }
}
