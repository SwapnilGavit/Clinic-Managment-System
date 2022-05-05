package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.PatientDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.patient;

@Service
public class PatientServiceImpl implements PatientService {
@Autowired
	private PatientDao patientDao;
		public PatientServiceImpl() {
 
	}
		@Override
		public List<patient> getPatient() {
			return patientDao.findAll();
		}
		@Override
		public patient getPatient(long patientId) {
			return patientDao.getOne(patientId);
		}
		@Override
		public patient addPatient(patient patient) {
			patientDao.save(patient);
			return patient; 
		}
		@Override
		public patient updatePatient(patient patient) {
			patientDao.save(patient);
			return patient;
		}
		@Override
		public void deletePatient(long parseLong) {
			patient entity=	patientDao.getOne( parseLong);
			patientDao.delete(entity);
		}
}