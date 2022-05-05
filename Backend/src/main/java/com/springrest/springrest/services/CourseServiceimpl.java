package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.course;

@Service
public class CourseServiceimpl implements CourseService {
@Autowired
	private CourseDao courseDao;
		public CourseServiceimpl() {
 
	}
	@Override
	public List<course> getCourses() {
	 return courseDao.findAll();
	}
@Override
	public course getCourse(long courseId) {
 
		return courseDao.getOne(courseId);
	}
@Override
	public course addCourse(course course) {
 
		courseDao.save(course);
		return course; 
	}
@Override
	public course updateCourse(course course) {
 
		courseDao.save( course);
		return course;
	}
@Override
	public void deleteCourse(long parseLong) {
 
	course entity=	courseDao.getOne( parseLong);
	courseDao.delete(entity);
	}

}



