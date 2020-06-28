import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/empleado';
import { LISTA_EMPLEADOS } from 'src/app/model/lista-empleado';

@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {

  empleados: Empleado[];

  //Atributos del constructor
  inputName: string;
  inputJob: string;
  inputSalar: number;

  constructor() { }

  ngOnInit() {
    this.empleados = LISTA_EMPLEADOS;
  }

  anadirEmpleado() {
    const empleadoAux = new Empleado(this.inputName,this.inputJob,this.inputSalar);
    this.empleados.push(empleadoAux);
    console.log(empleadoAux);
    this.reset();

  }

  reset(): void {
    this.inputName = "";
    this.inputJob = "";
    this.inputSalar = null;
  }

}
