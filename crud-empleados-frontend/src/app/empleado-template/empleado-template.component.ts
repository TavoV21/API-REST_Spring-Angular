import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-template',
  templateUrl: './empleado-template.component.html',
  styleUrls: ['./empleado-template.component.css']
})
export class EmpleadoTemplateComponent implements OnInit {

  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute,private empleadoServicio :EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoId(this.id).subscribe(data =>{
    this.empleado = data;
    swal(`Informacion del emplead@ ${this.empleado.nombre}`);
    })
  }

}
