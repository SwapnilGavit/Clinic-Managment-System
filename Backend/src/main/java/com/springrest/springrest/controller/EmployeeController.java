package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.springrest.springrest.entities.employee;
 
import com.springrest.springrest.services.EmployeeService;
 @CrossOrigin
@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	 
	//get course
	@GetMapping("/employee")
	public List<employee> getEmployee(){
		return this.employeeService.getEmployee();
	}
	public EmployeeService getEmployeeService() {
		return employeeService;
	}
	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	@GetMapping("/employee/{eid}")
	public  employee getEmployee(@PathVariable String eid) {
	
		return this.employeeService.getEmployee( Long.parseLong(eid));
		
	}
	@PostMapping(path="/employee", consumes = "application/json" )
	public employee addEmployee(@RequestBody employee employee)
	{
		return this.employeeService.addEmployee(employee);
   }
	@PutMapping(path="/employee", consumes = "application/json" )
	public employee updateEmployee(@RequestBody employee employee)
	{
		return this.employeeService.updateEmployee(employee);}

	@DeleteMapping("/employee/{eid}")
		
	public ResponseEntity< HttpStatus> deleteEmployee(@PathVariable String eid){
	try {
		this.employeeService.deleteEmployee(Long.parseLong(eid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}
