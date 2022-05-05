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

 
import com.springrest.springrest.entities.patient;
 
import com.springrest.springrest.services.PatientService;
 @CrossOrigin
@RestController
public class PatientController {
	@Autowired
	private PatientService patientService;
	 
	//get course
	@GetMapping("/patient")
	public List<patient> getPatient(){
		return this.patientService.getPatient();
	}
	public PatientService getPatientService() {
		return patientService;
	}
	public void setPatientService(PatientService patientService) {
		this.patientService = patientService;
	}
	
	@GetMapping("/patient/{pid}")
	public  patient getPatient(@PathVariable String pid) {
	
		return this.patientService.getPatient( Long.parseLong(pid));
		
	}
	@PostMapping(path="/patient", consumes = "application/json" )
	public patient addPatient(@RequestBody patient patient)
	{
		return this.patientService.addPatient(patient);
   }
	@PutMapping(path="/patient", consumes = "application/json" )
	public patient updatePatient(@RequestBody patient patient)
	{
		return this.patientService.updatePatient(patient);}

	@DeleteMapping("/patient/{pid}")
		
	public ResponseEntity< HttpStatus> deletePatient(@PathVariable String pid){
	try {
		this.patientService.deletePatient(Long.parseLong(pid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}
