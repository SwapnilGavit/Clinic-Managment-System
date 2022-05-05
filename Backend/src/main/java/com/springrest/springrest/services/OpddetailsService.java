package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.opddetails;

public interface OpddetailsService {
	public List<opddetails> getOpddetails();
	public opddetails getOpddetails(long oopdid);
	public opddetails addOpddetails(opddetails opddetails);
	public opddetails updateOpddetails(opddetails opddetails);
	public void deleteOpddetails(long parseLong);

}
