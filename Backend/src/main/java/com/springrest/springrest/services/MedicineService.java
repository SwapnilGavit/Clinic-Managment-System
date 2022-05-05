package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.medicine;

public interface MedicineService {

	public List<medicine> getMedicine();

	public medicine getMedicine(long parseLong);

	public medicine addmedicine(medicine medicine);

	public medicine updateMedicine(medicine medicine);

	public void deleteMedicine(long parseLong);

}
