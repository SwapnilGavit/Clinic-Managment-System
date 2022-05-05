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

 
import com.springrest.springrest.entities.signup;
 
import com.springrest.springrest.services.SignupService;
 @CrossOrigin
@RestController
public class SignupController {
	@Autowired
	private SignupService signupService;
	 
	//get course
	@GetMapping("/signup")
	public List<signup> getSignup(){
		return this.signupService.getSignup();
	}
	public SignupService getSignupService() {
		return signupService;
	}
	public void setSignupService(SignupService signupService) {
		this.signupService = signupService;
	}
	
	@GetMapping("/signup/{sid}")
	public  signup getSignup(@PathVariable String sid) {
	
		return this.signupService.getSignup( Long.parseLong(sid));
		
	}
	@PostMapping(path="/signup", consumes = "application/json" )
	public signup addSignup(@RequestBody signup signup)
	{
		return this.signupService.addSignup(signup);
   }
	@PutMapping(path="/signup", consumes = "application/json" )
	public signup updateSignup(@RequestBody signup signup)
	{
		return this.signupService.updateSignup(signup);}

	@DeleteMapping("/signup/{sid}")
		
	public ResponseEntity< HttpStatus> deleteCourse(@PathVariable String sid){
	try {
		this.signupService.deleteSignup(Long.parseLong(sid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}}

