import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Tendremos otra varible task que pertenece a esta pagina.
  //Cuando cargue la pagina se rellenara con las tareas que 
  //proprciona el servicio creado

  tasks: Task[] = [];
  dato: string;

  constructor(
    private taskservice: TaskService,
    private router: Router, //Para poder navegar entre páginas desde el código
    public alertController: AlertController, 
  ) {

    //Para poder utilizar un servicio hay que inyectarlo en el
    // constructor como lo de entre paréntesis de arriba. 
    //Se suele poner igual pero en minúsculas
  }
  ///Hago que cuando se inicie la página ya me cargue los datos:
  ngOnInit() {
    this.tasks = this.taskservice.getTasks();
  }

  goEditTask() 
  {
    this.router.navigateByUrl('/edit'); //Para navegar entre paginas
  }

  deleteTask(id: number){
    this.taskservice.deleteTask(id); //Para llamar al servicio y borrar
    this.tasks = this.taskservice.getTasks();
  }


  async presentAlertConfirm(id: number, title: string) {
    const alert = await this.alertController.create({ // Hay que inyectar AlertController en el constructor y despues importarlo
      header: `Va a borrar la tarea '${title}`,
      message: '¿Está seguro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Si',
          handler: () => {
            this.taskservice.deleteTask(id); //Para llamar al servicio y borrar
            this.tasks = this.taskservice.getTasks();
          }
        }
      ]
    });

    await alert.present();
  }

}
