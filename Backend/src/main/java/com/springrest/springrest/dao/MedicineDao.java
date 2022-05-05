package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.medicine;

public interface MedicineDao extends JpaRepository<medicine, Long>{

}
