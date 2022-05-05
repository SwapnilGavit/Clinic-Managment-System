package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.OpddetailsDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.opddetails;

@Service
public class OpddetailsServiceImpl implements OpddetailsService{
@Autowired
private OpddetailsDao opddetailsDao;
	public OpddetailsServiceImpl() {
		
	}
	@Override
	public List<opddetails> getOpddetails() {
		return opddetailsDao.findAll();
	}
	@Override
	public opddetails getOpddetails(long opdid) {
		return opddetailsDao.getOne(opdid);
	}
	@Override
	public opddetails addOpddetails(opddetails opddetails) {
		opddetailsDao.save(opddetails);
		return opddetails;
	}
	@Override
	public opddetails updateOpddetails(opddetails opddetails) {
		opddetailsDao.save(opddetails);
		return opddetails;
	}
	@Override
	public void deleteOpddetails(long parseLong) {
		opddetails entity=	opddetailsDao.getOne( parseLong);
		opddetailsDao.delete(entity);
	}
	
}

