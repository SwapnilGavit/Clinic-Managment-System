package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.employee;

public interface EmployeeDao extends JpaRepository<employee, Long>{

}
