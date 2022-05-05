package com.springrest.springrest.services;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.dao.OpdDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.opd;

@Service
public class OpdServiceImpl implements  OpdService {
@Autowired
	private  OpdDao opdDao;
		public  OpdServiceImpl() {
 
	}
		@Override
		public List<opd> getOpd() {
			 return opdDao.findAll();
		}
		@Override
		public opd getOpd(long opdid) {
			return opdDao.getOne(opdid);
		}
		@Override
		public opd addOpd(opd opd) {
			opdDao.save(opd);
			return opd; 
		}
		@Override
		public opd updateOpd(opd opd) {
			opdDao.save(opd);
			return opd;
		}
		@Override
		public void deleteOpd(long parseLong) {
			// TODO Auto-generated method stub
			
		}
}
	 