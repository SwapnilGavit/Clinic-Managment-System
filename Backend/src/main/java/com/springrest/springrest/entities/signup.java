package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class signup {
	 @Id
		private Long  sid;
    	private String pname;
    	private String  mobilenumber;
    	private String   emailid;
		private String    password;
		private String  confirmpassword;
		public signup(Long sid, String pname, String mobilenumber, String emailid, String password,
				String confirmpassword) {
			super();
			this.sid = sid;
			this.pname = pname;
			this.mobilenumber = mobilenumber;
			this.emailid = emailid;
			this.password = password;
			this.confirmpassword = confirmpassword;
		}
		public signup() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getSid() {
			return sid;
		}
		public void setSid(Long sid) {
			this.sid = sid;
		}
		public String getPname() {
			return pname;
		}
		public void setPname(String pname) {
			this.pname = pname;
		}
		public String getMobilenumber() {
			return mobilenumber;
		}
		public void setMobilenumber(String mobilenumber) {
			this.mobilenumber = mobilenumber;
		}
		public String getEmailid() {
			return emailid;
		}
		public void setEmailid(String emailid) {
			this.emailid = emailid;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getConfirmpassword() {
			return confirmpassword;
		}
		public void setConfirmpassword(String confirmpassword) {
			this.confirmpassword = confirmpassword;
		}
		@Override
		public String toString() {
			return "signup [sid=" + sid + ", pname=" + pname + ", mobilenumber=" + mobilenumber + ", emailid=" + emailid
					+ ", password=" + password + ", confirmpassword=" + confirmpassword + "]";
		}
		
		
		
		 
}
