import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []; // inicializamos el array vacio

  constructor(private storage: Storage) {

    /* Tareas antiguas por defecto
    this.tasks = [
      {
        id: 0,
        title: 'Hacer la compra',
        description: 'Ir al super y comprar macarrones y tomate frito.'
      },
      {
        id: 1,
        title: 'Preparar la comida',
        description: 'Cocer la pasta al dente y gratinar con queso.'
      }
    ];*/

    this.getTasks().then(
      data => this.tasks = (data == null) ? [] : data)  
    // Si llegan datos los metemos en el array tasks
    // En caso de ser null mete el array vacio y sino mete datos

  }

  // Obtener tareas cuando llegen
  getTasks(): Promise<Task[]> {
    return this.storage.get('tasks');  // Mientras no tenga datos mostrará el array vacio
    
  }

  getTask(id: number): Task {
    return this.tasks.filter(t => t.id == id)[0];
  }

  // Guardar la tarea usando una promesa
  saveTask(t: Task): Promise<boolean> { // Promesa para asegurarme de que se ha grabado y abajo el return de el guardado
    if (t.id == undefined) { // Sino existe ese Id añado una tarea con ese indice
      this.addTask(t);
    } else {
      this.updateTask(t); // Si existe ese Id de tarea, la updato en su valor
    }

    return this.storage.set('tasks', this.tasks); // Machaco y guardo todo el array de tareas
  }

  addTask(t: Task) {
    let id = 0;

    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1].id + 1;
    }

    const taskToSave = {
      id: id,
      title: t.title,
      description: t.description,
      priority: t.priority
    };
    this.tasks.push(taskToSave);
  }

  updateTask(t) {
    const index = this.tasks.findIndex(
      tAux => tAux.id == t.id
    );
    this.tasks[index].title = t.title; // Update de su titulo
    this.tasks[index].description = t.description; // Update de su descripcion
    this.tasks[index].priority = t.priority; // Update de su prioridad
  }

  deleteTask(id: number): Promise<boolean> {

    this.tasks = this.tasks.filter(t => t.id != id);
    return this.storage.set('tasks', this.tasks) // Return por la promesa y machacamos el array con todo menos el borrado
  }
}
