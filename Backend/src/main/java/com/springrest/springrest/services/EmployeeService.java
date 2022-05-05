package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.employee;

public interface EmployeeService {

	public List<employee> getEmployee();

	public employee getEmployee(long eid);

	public employee addEmployee(employee employee);

	public employee updateEmployee(employee employee);

	public void deleteEmployee(long parseLong);

}
