package com.springrest.springrest.services;
 
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.AppointmentDao;
 
import com.springrest.springrest.entities.appointment;
 
 
@Service
public class AppointmentServiceImpl  implements  AppointmentService {
@Autowired
	private AppointmentDao appointmentDao;
		public AppointmentServiceImpl() {

	 }
		@Override
		public List<appointment> getAppointment() {
			 return appointmentDao.findAll();
		}
		@Override
		public appointment getAppointment(long aid) {
			return appointmentDao.getOne(aid);
		}
		@Override
		public appointment addAppointment(appointment appointment) {
			appointmentDao.save(appointment);
			return appointment; 
		}
		@Override
		public appointment updateAppointment(appointment appointment) {
			appointmentDao.save(appointment);
			return appointment;
		}
		@Override
		public void deleteAppointment(long parseLong) {
			appointment entity=	appointmentDao.getOne( parseLong);
			appointmentDao.delete(entity);
		}
}