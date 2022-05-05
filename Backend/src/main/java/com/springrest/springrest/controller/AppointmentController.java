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

import com.springrest.springrest.entities.appointment;
 
import com.springrest.springrest.services.AppointmentService;
 
@CrossOrigin
@RestController
public class AppointmentController {
	@Autowired
	private AppointmentService appointmentService;
	 
	//get course
	@GetMapping("/appointment")
	public List<appointment> getAppointment(){
		return this.appointmentService.getAppointment();
	}
	public AppointmentService getAppoinmentService() {
		return appointmentService;
	}
	public void setAppoinmentService(AppointmentService appointmentService) {
		this.appointmentService = appointmentService;
	}
	
	@GetMapping("/appointment/{aid}")
	public  appointment getAppoinment(@PathVariable String aid) {
	
		return this.appointmentService.getAppointment( Long.parseLong(aid));
		
	}
	@PostMapping(path="/appointment", consumes = "application/json" )
	public appointment addAppointment(@RequestBody appointment appointment)
	{
		return this.appointmentService.addAppointment(appointment);
   }
	@PutMapping(path="/appointment", consumes = "application/json" )
	public appointment updateAppointment(@RequestBody appointment appointment)
	{
		return this.appointmentService.updateAppointment(appointment);}

	@DeleteMapping("/appointment/{aid}")
		
	public ResponseEntity< HttpStatus> deleteAppointment(@PathVariable String aid){
	try {
		this.appointmentService.deleteAppointment(Long.parseLong(aid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}
