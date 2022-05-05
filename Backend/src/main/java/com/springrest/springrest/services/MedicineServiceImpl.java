package com.springrest.springrest.services;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.dao.MedicineDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.medicine;

@Service
public class MedicineServiceImpl  implements MedicineService {
@Autowired
	private  MedicineDao  medicineDao;
		public  MedicineServiceImpl() {
 
	}
		@Override
		public List<medicine> getMedicine() {
			 return  medicineDao.findAll();
		}
		@Override
		public medicine getMedicine(long mid) {
			return  medicineDao.getOne(mid);
		}
		@Override
		public medicine addmedicine(medicine medicine) {
			 medicineDao.save(medicine);
			return  medicine; 
		}
		@Override
		public medicine updateMedicine(medicine medicine) {
			 medicineDao.save(medicine);
			return  medicine;
		}
		@Override
		public void deleteMedicine(long parseLong) {
			medicine entity=	medicineDao.getOne( parseLong);
			medicineDao.delete(entity);		}}
