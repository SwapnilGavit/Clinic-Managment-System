package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.patient;

public interface PatientDao extends JpaRepository<patient, Long>{

}
