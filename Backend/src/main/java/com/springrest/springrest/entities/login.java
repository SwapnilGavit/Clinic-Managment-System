package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class login {
	 @Id
		private Long logid;
		private String role;
		private String password;
		private String status;
		private String  extensioncol1;
		private String  extensioncol2;
		public login(Long logid, String role, String password, String status, String extensioncol1,
				String extensioncol2) {
			super();
			this.logid = logid;
			this.role = role;
			this.password = password;
			this.status = status;
			this.extensioncol1 = extensioncol1;
			this.extensioncol2 = extensioncol2;
		}
		public login() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getLogid() {
			return logid;
		}
		public void setLogid(Long logid) {
			this.logid = logid;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public String getExtensioncol1() {
			return extensioncol1;
		}
		public void setExtensioncol1(String extensioncol1) {
			this.extensioncol1 = extensioncol1;
		}
		public String getExtensioncol2() {
			return extensioncol2;
		}
		public void setExtensioncol2(String extensioncol2) {
			this.extensioncol2 = extensioncol2;
		}
		@Override
		public String toString() {
			return "login [logid=" + logid + ", role=" + role + ", password=" + password + ", status=" + status
					+ ", extensioncol1=" + extensioncol1 + ", extensioncol2=" + extensioncol2 + "]";
		}
		
}
