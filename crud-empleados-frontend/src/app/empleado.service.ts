import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
//URL para enlazar el backend y frontend
  private URL="http://localhost:8080/api/backend/empleados"; 

  constructor(private HttpClient:HttpClient) {}

  //Obtiene los Empleados
    obtenerListaEmpleados(): Observable<Empleado[]>{
   let HttpGetAll= this.HttpClient.get<Empleado[]>(`${this.URL}`);
    return HttpGetAll;
  }
//Registra los Empleados
    registrarEmpleado(empleado:Empleado): Observable<Object>{
    let HttpPost= this.HttpClient.post(`${this.URL}`,empleado);
     return HttpPost;
   }

   
   obtenerEmpleadoId(id:number): Observable<Empleado>{
     
    let HttpGetById= this.HttpClient.get<Empleado>(`${this.URL}/${id}`);
    return HttpGetById;
   }

   actualizarEmpleado(id:number,empleado:Empleado): Observable<Object>{
     
    let HttpPut= this.HttpClient.put(`${this.URL}/${id}`,empleado);
    return HttpPut;
   }

   eliminarEmpleado(id:number): Observable<Object>{
     
    let HttpDelete= this.HttpClient.delete(`${this.URL}/${id}`);
    return HttpDelete;
   }

}
