import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor(private empleadoServico:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServico.registrarEmpleado(this.empleado).subscribe(data =>{
    console.log(data);
    this.direccionarAListaEmpleados();
  },error => console.log(error))
  }

  direccionarAListaEmpleados(){
    this.router.navigate(['/empleados']);
    swal('Empleado registrado',`El empleado ha sido registrado con exito`,`success`);

  }

  onSubmit(){
    this.guardarEmpleado();

  }

}
