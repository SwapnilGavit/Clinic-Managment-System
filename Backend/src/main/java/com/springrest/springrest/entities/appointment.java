package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class appointment {
	 @Id
		private Long aid;
		private String symptoms ;
		private String diagonosis;
		private int  medicineid;
		private String  quantity;
		private String   invegistation;
		private String followupdate;
		private Long id;
		private String aname;
		private String appointment_id;
		private String date_time;
		public appointment(Long aid, String symptoms, String diagonosis, int medicineid, String quantity,
				String invegistation, String followupdate, Long id, String aname, String appointment_id,
				String date_time) {
			super();
			this.aid = aid;
			this.symptoms = symptoms;
			this.diagonosis = diagonosis;
			this.medicineid = medicineid;
			this.quantity = quantity;
			this.invegistation = invegistation;
			this.followupdate = followupdate;
			this.id = id;
			this.aname = aname;
			this.appointment_id = appointment_id;
			this.date_time = date_time;
		}
		public appointment() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getAid() {
			return aid;
		}
		public void setAid(Long aid) {
			this.aid = aid;
		}
		public String getSymptoms() {
			return symptoms;
		}
		public void setSymptoms(String symptoms) {
			this.symptoms = symptoms;
		}
		public String getDiagonosis() {
			return diagonosis;
		}
		public void setDiagonosis(String diagonosis) {
			this.diagonosis = diagonosis;
		}
		public int getMedicineid() {
			return medicineid;
		}
		public void setMedicineid(int medicineid) {
			this.medicineid = medicineid;
		}
		public String getQuantity() {
			return quantity;
		}
		public void setQuantity(String quantity) {
			this.quantity = quantity;
		}
		public String getInvegistation() {
			return invegistation;
		}
		public void setInvegistation(String invegistation) {
			this.invegistation = invegistation;
		}
		public String getFollowupdate() {
			return followupdate;
		}
		public void setFollowupdate(String followupdate) {
			this.followupdate = followupdate;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getAname() {
			return aname;
		}
		public void setAname(String aname) {
			this.aname = aname;
		}
		public String getAppointment_id() {
			return appointment_id;
		}
		public void setAppointment_id(String appointment_id) {
			this.appointment_id = appointment_id;
		}
		public String getDate_time() {
			return date_time;
		}
		public void setDate_time(String date_time) {
			this.date_time = date_time;
		}
		@Override
		public String toString() {
			return "appointment [aid=" + aid + ", symptoms=" + symptoms + ", diagonosis=" + diagonosis + ", medicineid="
					+ medicineid + ", quantity=" + quantity + ", invegistation=" + invegistation + ", followupdate="
					+ followupdate + ", id=" + id + ", aname=" + aname + ", appointment_id=" + appointment_id
					+ ", date_time=" + date_time + "]";
		}

}

		