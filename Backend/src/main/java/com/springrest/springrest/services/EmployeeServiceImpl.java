package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.EmployeeDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {
@Autowired
	private EmployeeDao employeeDao;
		public EmployeeServiceImpl() {
 }
		@Override
		public List<employee> getEmployee() {
			 return employeeDao.findAll();
		}
		@Override
		public employee getEmployee(long eid) {
			return employeeDao.getOne(eid);
		}
		@Override
		public employee addEmployee(employee employee) {
			employeeDao.save(employee);
			return employee; 
		}
		@Override
		public employee updateEmployee(employee employee) {
			employeeDao.save(employee);
			return employee;
		}
		@Override
		public void deleteEmployee(long parseLong) {
			employee entity=	employeeDao.getOne( parseLong);
			employeeDao.delete(entity);
		}
		

}
