package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.signup;

public interface SignupService {
	public List<signup> getSignup();
	public signup getSignup(long sid);
	public signup addSignup(signup signup);
	public signup updateSignup(signup signup);
	public void deleteSignup(long parseLong);
}
