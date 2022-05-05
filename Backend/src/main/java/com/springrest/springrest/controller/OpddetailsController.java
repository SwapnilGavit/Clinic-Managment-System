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

 
import com.springrest.springrest.entities.opddetails;
 
import com.springrest.springrest.services.OpddetailsService;
 @CrossOrigin
@RestController
public class OpddetailsController {
	@Autowired
	private OpddetailsService opddetailsService;
	 
	//get course
	@GetMapping("/opddetails")
	public List<opddetails> getOpddetails(){
		return this.opddetailsService.getOpddetails();
	}
	public OpddetailsService getopddetailsService() {
		return opddetailsService;
	}
	public void setOpddetailsService(OpddetailsService opddetailsService) {
		this.opddetailsService =opddetailsService;
	}
	
	@GetMapping("/opddetails/{opdid}")
	public  opddetails getOpddetails(@PathVariable String opdid) {
 
		return this.opddetailsService.getOpddetails( Long.parseLong(opdid));
		
	}
	@PostMapping(path="/opddetails", consumes = "application/json" )
	public opddetails addOpddetails(@RequestBody opddetails opddetails)
	{
		return this.opddetailsService.addOpddetails(opddetails);
   }
	@PutMapping(path="/opddetails", consumes = "application/json" )
	public opddetails updateOpddetails(@RequestBody opddetails opddetails)
	{
		return this.opddetailsService.updateOpddetails(opddetails);}

	@DeleteMapping("/opddetails/{oopdid}")
		
	public ResponseEntity< HttpStatus> deleteOpddetails(@PathVariable String oopdid){
	try {
		this.opddetailsService.deleteOpddetails(Long.parseLong(oopdid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}
