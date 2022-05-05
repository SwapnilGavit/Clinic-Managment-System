package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.login;

public interface LoginService {

	public List<login> getLogin();

	public login getLogin(long parseLong);

	public login addLogin(login login);

	public login updateLogin(login login);

	public void deleteLogin(long parseLong);

}
