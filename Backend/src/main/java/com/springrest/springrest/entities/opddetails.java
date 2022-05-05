package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class opddetails {
	 @Id
		private Long opdid;
		private String symptoms ;
		private String diagonosis;
		private int  medicineid;
		private String  quantity;
		private String   invegistation;
		private String followupdate;
		public opddetails(Long opdid, String symptoms, String diagonosis, int medicineid, String quantity,
				String invegistation, String followupdate) {
			super();
			this.opdid = opdid;
			this.symptoms = symptoms;
			this.diagonosis = diagonosis;
			this.medicineid = medicineid;
			this.quantity = quantity;
			this.invegistation = invegistation;
			this.followupdate = followupdate;
		}
		public opddetails() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getOpdid() {
			return opdid;
		}
		public void setOpdid(Long opdid) {
			this.opdid = opdid;
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
		@Override
		public String toString() {
			return "opddetails [opdid=" + opdid + ", symptoms=" + symptoms + ", diagonosis=" + diagonosis
					+ ", medicineid=" + medicineid + ", quantity=" + quantity + ", invegistation=" + invegistation
					+ ", followupdate=" + followupdate + "]";
		}
		
}
