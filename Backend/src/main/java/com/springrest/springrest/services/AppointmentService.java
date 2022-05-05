package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.appointment;

public interface AppointmentService {

	public List<appointment> getAppointment();

	public appointment getAppointment(long parseLong);

	public appointment addAppointment(appointment appointment);

	public appointment updateAppointment(appointment appointment);

	public void deleteAppointment(long parseLong);

}
