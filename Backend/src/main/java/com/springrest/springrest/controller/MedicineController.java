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

 
import com.springrest.springrest.entities.medicine;
 
import com.springrest.springrest.services.MedicineService;
 @CrossOrigin
@RestController
public class MedicineController {
	@Autowired
	private MedicineService medicineService;
	 
	//get course
	@GetMapping("/medicine")
	public List<medicine> getMedicine(){
		return this.medicineService.getMedicine();
	}
	public MedicineService getMedicineService() {
		return medicineService;
	}
	public void setMedicineService(MedicineService medicineService) {
		this.medicineService = medicineService;
	}
	
	@GetMapping("/medicine/{mid}")
	public  medicine getMedicine(@PathVariable String mid) {
	
		return this.medicineService.getMedicine( Long.parseLong(mid));
		
	}
	@PostMapping(path="/medicine", consumes = "application/json" )
	public medicine addMedicine(@RequestBody medicine medicine)
	{
		return this.medicineService.addmedicine(medicine);
   }
	@PutMapping(path="/medicine", consumes = "application/json" )
	public medicine updateMedicine(@RequestBody medicine medicine)
	{
		return this.medicineService.updateMedicine(medicine);}

	@DeleteMapping("/medicine/{mid}")
		
	public ResponseEntity< HttpStatus> deleteCourse(@PathVariable String mid){
	try {
		this.medicineService.deleteMedicine(Long.parseLong(mid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}}

