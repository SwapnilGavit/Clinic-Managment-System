package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class medicine {
	 @Id
	private long  mid;
	private String  mname;
	private  int rate;
	public medicine(long mid, String mname, int rate) {
		super();
		this.mid = mid;
		this.mname = mname;
		this.rate = rate;
	}
	public medicine() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getMid() {
		return mid;
	}
	public void setMid(long mid) {
		this.mid = mid;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	@Override
	public String toString() {
		return "medicine [mid=" + mid + ", mname=" + mname + ", rate=" + rate + "]";
	}
	 
}
