package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.dao.LoginDao;
import com.springrest.springrest.entities.course;
import com.springrest.springrest.entities.login;

@Service
public class LoginServiceImpl implements  LoginService {
@Autowired
	private  LoginDao  loginDao;
		public  LoginServiceImpl() {
 	}
		@Override
		public List<login> getLogin() {
			 return loginDao.findAll();
		}
		@Override
		public login getLogin(long logid) {
			return  loginDao.getOne(logid);
		}
		@Override
		public login addLogin(login login) {
			 loginDao.save(login);
			return  login; 
		}
		@Override
		public login updateLogin(login login) {
			 loginDao.save(login);
			return login;
		}
		@Override
		public void deleteLogin(long parseLong) {
			 login entity=	 loginDao.getOne( parseLong);
			 loginDao.delete(entity);
		}
}