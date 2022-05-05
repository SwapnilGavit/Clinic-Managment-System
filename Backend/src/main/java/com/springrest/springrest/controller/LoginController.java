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

 
import com.springrest.springrest.entities.login;
 
import com.springrest.springrest.services.LoginService;
 @CrossOrigin
@RestController
public class LoginController {
	@Autowired
	private  LoginService loginService;
	 
	//get course
	@GetMapping("/login")
	public List<login> getLogin(){
		return this.loginService.getLogin();
	}
	public LoginService getLoginService() {
		return loginService;
	}
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
	
	@GetMapping("/login/{logid}")
	public  login getLogin(@PathVariable String logid) {
	
		return this.loginService.getLogin( Long.parseLong(logid));
		
	}
	@PostMapping(path="/login", consumes = "application/json" )
	public login addLogin(@RequestBody login login)
	{
		return this.loginService.addLogin(login);
   }
	@PutMapping(path="/login", consumes = "application/json" )
	public login updateLogin(@RequestBody login login)
	{
		return this.loginService.updateLogin(login);}

	@DeleteMapping("/login/{logid}")
		
	public ResponseEntity< HttpStatus> deletelogin(@PathVariable String logid){
	try {
		this.loginService.deleteLogin(Long.parseLong(logid));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	
}}
}
