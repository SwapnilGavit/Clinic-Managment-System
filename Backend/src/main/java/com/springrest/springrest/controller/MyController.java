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

import com.springrest.springrest.entities.course;
import com.springrest.springrest.services.CourseService;
 @CrossOrigin
@RestController
public class MyController {

	@Autowired
	private CourseService courseService;
	 
	//get course
	@GetMapping("/courses")
	public List<course> getCourses(){
		return this.courseService.getCourses();
	}
	public CourseService getCourseService() {
		return courseService;
	}
	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}
	
	@GetMapping("/courses/{courseId}")
	public  course getCourse(@PathVariable String courseId) {
	
		return this.courseService.getCourse( Long.parseLong(courseId));
		
	}
	@PostMapping(path="/courses", consumes = "application/json" )
	public course addCourse(@RequestBody course course)
	{
		return this.courseService.addCourse(course);
   }
	@PutMapping(path="/courses", consumes = "application/json" )
	public course updateCourse(@RequestBody course course)
	{
		return this.courseService.updateCourse(course);}

	@DeleteMapping("/courses/{courseID}")
		
	public ResponseEntity< HttpStatus> deleteCourse(@PathVariable String courseID){
	try {
		this.courseService.deleteCourse(Long.parseLong(courseID));
	
		return new ResponseEntity<>(HttpStatus.OK);}
	catch (Exception e) {
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}}