import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []; //Inicializamos para que su valor no sea null, sinó array vacio.

  constructor() {

    //Aquí se almacenarán las tareas
    this.tasks = [
      {
        id: 0,
        title: "Hacer la compra",
        description: "Ir al super a por los ingredientes"
      },{
        id: 1,
        title: "Preparar la comida",
        description: "Mezclar los ingredientes hasta que esa mezcla sea comestible"
      },{
        id: 2,
        title: "Poner la mesa",
        description: "Porque en el suelo no mola comer"
      },{
        id: 3,
        title: "Fregar los platos",
        description: "O no, es opcional aunque recomendable"
      },{
        id: 4,
        title: "Dormir la siesta",
        description: "Imprescindible, somos andaluces!!"
      }
    ];

   }
   //Get para devolver las tareas que se pidan
   getTasks(): Task [] 
   {
    return this.tasks;
   }

   //Creamos método para guardar las tareas
   saveTask(t: Task)
   {
     let id = 0;
     if (this.tasks.length > 0) {
     //Creamos variable local al ámbito donde estoy
     id = this.tasks[this.tasks.length - 1].id + 1; // Sinó es cero el id lo calculamos dentro del if
    } 
     const taskToSave = {
       id: id, 
       title: t.title, 
       description: t.description}

    this.tasks.push(taskToSave);
   }

   deleteTask(id: number){
     this.tasks = this.tasks.filter(t => t.id != id); // Aquí usamos filter para buscar el id, de manera que
     // se creará otro array de tareas machacnado el que teniamos pero sin la tarea del id que queremos borrar
   }
    
}
