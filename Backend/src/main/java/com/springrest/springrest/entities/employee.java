package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class employee {
	 @Id
		private Long eid;
		private String ename;
		private String  birthdate;
		private String gender;
		private String emailid;
		private Long moilenumber;
	    private String  address;
		private String  role;
		private String  qualification;
		private String  specialization;
		private String  aadharno;
		private String  password;
       private String  joiningdate;
	public employee(Long eid, String ename, String birthdate, String gender, String emailid, Long moilenumber,
			String address, String role, String qualification, String specialization, String aadharno, String password,
			String joiningdate) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.birthdate = birthdate;
		this.gender = gender;
		this.emailid = emailid;
		this.moilenumber = moilenumber;
		this.address = address;
		this.role = role;
		this.qualification = qualification;
		this.specialization = specialization;
		this.aadharno = aadharno;
		this.password = password;
		this.joiningdate = joiningdate;
	}
	public employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getEid() {
		return eid;
	}
	public void setEid(Long eid) {
		this.eid = eid;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public Long getMoilenumber() {
		return moilenumber;
	}
	public void setMoilenumber(Long moilenumber) {
		this.moilenumber = moilenumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public String getAadharno() {
		return aadharno;
	}
	public void setAadharno(String aadharno) {
		this.aadharno = aadharno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getJoiningdate() {
		return joiningdate;
	}
	public void setJoiningdate(String joiningdate) {
		this.joiningdate = joiningdate;
	}
	@Override
	public String toString() {
		return "employee [eid=" + eid + ", ename=" + ename + ", birthdate=" + birthdate + ", gender=" + gender
				+ ", emailid=" + emailid + ", moilenumber=" + moilenumber + ", address=" + address + ", role=" + role
				+ ", qualification=" + qualification + ", specialization=" + specialization + ", aadharno=" + aadharno
				+ ", password=" + password + ", joiningdate=" + joiningdate + "]";
	}
	 		 
		
}
