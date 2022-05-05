package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class patient {
	 @Id
		private Long pid;
		private String  registrationdate ;
		private String pname;
		private String   birthdate;
		private String   gender;
		private String   emailid;
		private String  mobilenumber;
		private String  adderss;
		private String    aadharno;
		private String   bloodgroup;
		private String  chronicdisease;
		private String   medicineallergy;
		private  int  docid;
		private String   password;
		public patient(Long pid, String registrationdate, String pname, String birthdate, String gender, String emailid,
				String mobilenumber, String adderss, String aadharno, String bloodgroup, String chronicdisease,
				String medicineallergy, int docid, String password) {
			super();
			this.pid = pid;
			this.registrationdate = registrationdate;
			this.pname = pname;
			this.birthdate = birthdate;
			this.gender = gender;
			this.emailid = emailid;
			this.mobilenumber = mobilenumber;
			this.adderss = adderss;
			this.aadharno = aadharno;
			this.bloodgroup = bloodgroup;
			this.chronicdisease = chronicdisease;
			this.medicineallergy = medicineallergy;
			this.docid = docid;
			this.password = password;
		}
		public patient() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getPid() {
			return pid;
		}
		public void setPid(Long pid) {
			this.pid = pid;
		}
		public String getRegistrationdate() {
			return registrationdate;
		}
		public void setRegistrationdate(String registrationdate) {
			this.registrationdate = registrationdate;
		}
		public String getPname() {
			return pname;
		}
		public void setPname(String pname) {
			this.pname = pname;
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
		public String getMobilenumber() {
			return mobilenumber;
		}
		public void setMobilenumber(String mobilenumber) {
			this.mobilenumber = mobilenumber;
		}
		public String getAdderss() {
			return adderss;
		}
		public void setAdderss(String adderss) {
			this.adderss = adderss;
		}
		public String getAadharno() {
			return aadharno;
		}
		public void setAadharno(String aadharno) {
			this.aadharno = aadharno;
		}
		public String getBloodgroup() {
			return bloodgroup;
		}
		public void setBloodgroup(String bloodgroup) {
			this.bloodgroup = bloodgroup;
		}
		public String getChronicdisease() {
			return chronicdisease;
		}
		public void setChronicdisease(String chronicdisease) {
			this.chronicdisease = chronicdisease;
		}
		public String getMedicineallergy() {
			return medicineallergy;
		}
		public void setMedicineallergy(String medicineallergy) {
			this.medicineallergy = medicineallergy;
		}
		public int getDocid() {
			return docid;
		}
		public void setDocid(int docid) {
			this.docid = docid;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		@Override
		public String toString() {
			return "patient [pid=" + pid + ", registrationdate=" + registrationdate + ", pname=" + pname
					+ ", birthdate=" + birthdate + ", gender=" + gender + ", emailid=" + emailid + ", mobilenumber="
					+ mobilenumber + ", adderss=" + adderss + ", aadharno=" + aadharno + ", bloodgroup=" + bloodgroup
					+ ", chronicdisease=" + chronicdisease + ", medicineallergy=" + medicineallergy + ", docid=" + docid
					+ ", password=" + password + "]";
		}
		
 
}
