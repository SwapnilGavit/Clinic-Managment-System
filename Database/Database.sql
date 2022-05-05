create database ClinicManagment;

use ClinicManagment;

/***************************** Create Table **********************************************/
create table login ( 
Role varchar(30),
Username varchar(50),
Password varchar(30),
Status Bool DEFAULT 1,
ExtensionCol01 varchar(255),
ExtensionCol02 double,
primary key(Username)
);


create table employee (
Eid bigint Auto_Increment,
EName varchar(50), 
Birthdate varchar(10),  
Gender char(1), 
EmailID varchar(50),
Mobileno varchar(10), 
Address varchar(255), 
Role varchar(30), 
Qualification varchar(255), 
Specialization varchar(255),
AdharNo bigint, 
Password varchar(30),
JoiningDate varchar(10), 
 primary key (Eid),
 unique(EmailID),
 unique(AdharNo),
 unique(Mobileno));
 
create table patient (
 PId bigint auto_increment,
 RegistrationDate varchar(10),
 PName varchar(50),
 Birthdate varchar(10),  
 Gender char(1), 
 EmailID varchar(50),
 Mobileno varchar(10), 
 Address varchar(255), 
 adharNo bigint, 
 BloodGroup varchar(5), 
 ChronicDiseases varchar(255), 
 MedicineAllergy varchar(255), 
 DoctorId bigint,
 Password varchar(30), 
 primary key (pid), 
 unique(EmailID), 
 unique(AdharNo), 
 unique(Mobileno));
 
 
create table opd (
opdid bigint not null auto_increment, 
visitdate varchar(10), 
pid bigint, 
doctorid bigint, 
status int not null, 
primary key(opdid));


create table opddetails(
opdid bigint, 
symptoms varchar(255), 
diagnosis varchar(255), 
MedicineID int,  
Quantity int, 
investigations varchar(255), 
followupDate varchar(10)
);

CREATE table MedicineDetails (
    MId int not null auto_increment, 
    MName VARCHAR(255) NOT NULL,
    Rate decimal NOT NULL,
    primary key (MId)
);

alter table opddetails add constraint 
fk_mid foreign key (MedicineID) references MedicineDetails(MId);

Create table Appointment (
    Appointment_Id Bigint auto_increment,
    PId Bigint,
    Pname varchar(50),
    A_date varchar(10),
    A_time varchar(10),
    extension_col_1 datetime,
    extension_col_2 varchar(100),
    extension_col_3 bigint,
    primary key (Appointment_Id)
);

/*****************************Forenign Key Constrains**********************************************/

alter table Appointment add constraint 
fk_apointment_Pid foreign key (PId) references patient(PId);

alter table employee add constraint 
 fk_Email foreign key (EmailID) references login(Username);
 
 alter table patient add constraint 
fk_Email_patient foreign key (EmailID) references login(Username);

alter table opd add constraint 
fk_pid foreign key (pid) references patient(pid);

alter table opd add constraint 
fk_doctorid foreign key (doctorid) references employee(eid);

alter table opddetails add constraint 
fk_opdid foreign key (opdid) references opd(opdid) on delete cascade;

/***************************** Check Constrains for Validations ******************************************/
alter table patient add
constraint Check_Gender check(gender in('M','F'));
-- alter table patient drop constraint Check_Gender;

alter table patient add
constraint Valid_Mobile_NO
check (REGEXP_LIKE (mobilenumber, '^[1-9]\d{9}$'));
-- alter table patient drop constraint Valid_Mobile_NO;

alter table patient add
constraint Valid_Email_ID
check (REGEXP_LIKE (emailid, '^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$'));
-- alter table patient drop constraint Valid_Email_ID;

alter table patient add
constraint Valid_Blood_Group
check (bloodgroup in('A+','B+','AB+','O+','A-','B-','AB-','O-'));
-- alter table patient drop constraint Valid_Blood_Group;

alter table patient add
constraint Valid_Aadhar_No
check ((REGEXP_LIKE (aadharno, '^\d{16}$')));
