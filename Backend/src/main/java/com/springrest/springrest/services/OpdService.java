package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.opd;

public interface OpdService {

	public List<opd> getOpd();

	public opd getOpd(long parseLong);

	public opd addOpd(opd opd);

	public opd updateOpd(opd opd);

	public void deleteOpd(long parseLong);

}
