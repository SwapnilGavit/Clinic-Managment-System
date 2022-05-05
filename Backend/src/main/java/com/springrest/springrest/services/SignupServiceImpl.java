package com.springrest.springrest.services;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.dao.SignupDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.signup;
@Service
public class SignupServiceImpl implements SignupService{
	@Autowired
	private SignupDao signupDao;
		public SignupServiceImpl() {
 
	}
	@Override
	public List<signup> getSignup() {
		return signupDao.findAll();
	}

	@Override
	public signup getSignup(long sid) {
		return signupDao.getOne(sid);
	}

	@Override
	public signup addSignup(signup signup) {
		signupDao.save(signup);
		return signup; 
	}

	@Override
	public signup updateSignup(signup signup) {
		signupDao.save(signup);
		return signup;
	}

	@Override
	public void deleteSignup(long parseLong) {
		signup entity=	signupDao.getOne( parseLong);
		signupDao.delete(entity);
	}


}
