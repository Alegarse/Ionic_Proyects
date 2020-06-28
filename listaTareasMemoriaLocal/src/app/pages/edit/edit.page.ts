import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  cod: String = "";

  task: Task = {
    title: '',
    description: '',
    priority: 1
  };

  constructor(
    private taskService : TaskService,
    // Inyectado para poder usar el navigateByUrl
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.cod = "Editar";
      this.task = this.taskService.getTask(+id);
    } else {
      this.cod = "Crear"
    }
  }

  saveTask() {
    this.taskService.saveTask(this.task).then(
      () => this.router.navigateByUrl(`/`)
    );

    // Para que al darle a guardar vuelva a la lista de tareas en home
    // this.router.navigateByUrl(`/`); Al estar asincrono mejor ponerlo con un then
  }

}
