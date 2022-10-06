package com.crud.empleados.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.empleados.excepciones.ResourceNotFoundException;
import com.crud.empleados.modelo.Empleado;
import com.crud.empleados.repositorio.EmpleadoRepositorio;

@RestController
@RequestMapping("api/backend/")
@CrossOrigin(origins = "http://localhost:4200" )
public class EmpleadoControlador {

	@Autowired
	private EmpleadoRepositorio repositorio;

	//Obtener todos los datos
	@GetMapping("/empleados")
	public List<Empleado> listarEmpleados() {

		return repositorio.findAll();
	}
	
	//Guardar los datos
	@PostMapping("/empleados")
	public Empleado guardarEmpleado(@RequestBody Empleado empleado) {
		return repositorio.save(empleado);
		
	}
	
	//Buscar por el id
	@GetMapping("/empleados/{id}")
	public ResponseEntity<Empleado> obtenerEmpleadoPorElId(@PathVariable Long id){
		Empleado empleado= repositorio.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No hay resultados por el id:"+id));
		
		return ResponseEntity.ok(empleado);
				
	}
	
	@PutMapping("/empleados/{id}")
	public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id,@RequestBody Empleado infEmpleado){
		Empleado empleado= repositorio.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No hay resultados por el id:"+id));
		empleado.setNombre(infEmpleado.getNombre());
		empleado.setApellido(infEmpleado.getApellido());
		empleado.setEmail(infEmpleado.getEmail());
		
		Empleado empleadoActualizado = repositorio.save(empleado);
		return ResponseEntity.ok(empleado);
				
	}
	
	@DeleteMapping("/empleados/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable Long id){
		Empleado empleado = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el id:" + id));
		
		repositorio.delete(empleado);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
	
	
}
