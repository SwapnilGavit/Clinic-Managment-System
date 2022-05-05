package com.springrest.springrest.entities;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class opd {
	 @Id
	 private Long opdid;
		private String  visitdate;
		private  long pid;
		private  long docid;
		private  int   status;
		public opd(Long opdid, String visitdate, long pid, long docid, int status) {
			super();
			this.opdid = opdid;
			this.visitdate = visitdate;
			this.pid = pid;
			this.docid = docid;
			this.status = status;
		}
		public opd() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getOpdid() {
			return opdid;
		}
		public void setOpdid(Long opdid) {
			this.opdid = opdid;
		}
		public String getVisitdate() {
			return visitdate;
		}
		public void setVisitdate(String visitdate) {
			this.visitdate = visitdate;
		}
		public long getPid() {
			return pid;
		}
		public void setPid(long pid) {
			this.pid = pid;
		}
		public long getDocid() {
			return docid;
		}
		public void setDocid(long docid) {
			this.docid = docid;
		}
		public int getStatus() {
			return status;
		}
		public void setStatus(int status) {
			this.status = status;
		}
		@Override
		public String toString() {
			return "opd [opdid=" + opdid + ", visitdate=" + visitdate + ", pid=" + pid + ", docid=" + docid
					+ ", status=" + status + "]";
		}
		 
}
