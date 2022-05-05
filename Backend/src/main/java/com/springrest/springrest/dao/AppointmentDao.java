package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.appointment;

public interface AppointmentDao extends JpaRepository<appointment, Long>{

}
