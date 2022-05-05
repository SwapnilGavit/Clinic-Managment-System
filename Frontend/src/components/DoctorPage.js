import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Addappointment from "./Addappointment";
import Addemployee from "./Addemployee";
import Addmedicine from "./Addmedicine";
import Addopd from "./Addopd";
import Addopddetails from "./Addopddetails";
import Addpatient from "./Addpatient";
import Allemployee from "./Allemployee";
import Alllogin from "./Alllogin";
import Allmedicine from "./Allmedecine";
import Allopd from "./Allopd";
import Allopddetails from "./Allopddetails";
import Allpatient from "./Allpatient";
import Allsignup from "./Allsignup";

import Menus from "./Menus";

const DoctorPage = () => {
  return (
    <>
      <Menus />

      <Routes>
        <Route exact path="/add-patient" element={<Addpatient />} />

        <Route exact path="/view-patient" element={<Allpatient />} />

        <Route exact path="/add-Employee" element={<Addemployee />} />

        <Route exact path="/view-Employee" element={<Allemployee />} />

        <Route exact path="/add-medicine" element={<Addmedicine />} />

        <Route exact path="/view-medicine" element={<Allmedicine />} />
        <Route exact path="/add-opd" element={<Addopd />} />

        <Route exact path="/view-opd" element={<Allopd />} />
        <Route exact path="/add-opd-details" element={<Addopddetails />} />

        <Route exact path="/view-opd-details" element={<Allopddetails />} />
        <Route exact path="/view-signup" element={<Allsignup />} />

        <Route exact path="/view-login" element={<Alllogin />} />

        <Route exact path="/add-appointment" element={<Addappointment />} />
        <Route exact path="/view-Appointment" element={<Allsignup />} />

      </Routes>
    </>
  );
};

export default DoctorPage;
