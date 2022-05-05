package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.patient;

public interface PatientService {
	public List<patient> getPatient();
	public patient getPatient(long patientId);
	public patient addPatient(patient patient);
	public patient updatePatient(patient patient);
	public void deletePatient(long parseLong);
}
