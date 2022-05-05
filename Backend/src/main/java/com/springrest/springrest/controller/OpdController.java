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
 
import com.springrest.springrest.entities.opd;
 
import com.springrest.springrest.services.OpdService;
 @CrossOrigin
@RestController
public class OpdController {
	@Autowired
	private OpdService opdService;
	 
	//get course
	@GetMapping("/opd")
	public List<opd> getOpd(){
		return this.opdService.getOpd();
	}
	public OpdService getOpdService() {
		return opdService;
	}
	public void setOpdService(OpdService opdService) {
		this.opdService = opdService;
	}
	
	@GetMapping("/opd/{opdid}")
	public  opd getOpd(@PathVariable String opdid) {
	
		return this.opdService.getOpd( Long.parseLong(opdid));
		
	}
	@PostMapping(path="/opd", consumes = "application/json" )
	public opd addOpd(@RequestBody opd opd)
	{
		return this.opdService.addOpd(opd);
   }
	@PutMapping(path="/opd", consumes = "application/json" )
	public opd updateOpd(@RequestBody opd opd)
	{
		return this.opdService.updateOpd(opd);}

	@DeleteMapping("/opd/{opdid}")
		
	public ResponseEntity< HttpStatus> deleteOpd(@PathVariable String opdid){
	try {
		this.opdService.deleteOpd(Long.parseLong(opdid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}
