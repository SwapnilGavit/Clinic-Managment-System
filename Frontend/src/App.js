import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Patientpages from "./components/Patientpages";
import GoogleSignIn from "./components/GoogleSignIn";
import GoogleSignout from "./components/GoogleSignout";
import pageNotFound from "./components/pageNotFound";
import { Route, Routes } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Patient from "./components/Patient";
import Allpatient from "./components/Allpatient";
import Addpatient from "./components/Addpatient";
import Menus from "./components/Menus";
import DoctorPage from "./components/DoctorPage";
import Addemployee from "./components/Addemployee";
import Allemployee from "./components/Allemployee";
import Addmedicine from "./components/Addmedicine";
import Allmedicine from "./components/Allmedecine";
import Addopd from "./components/Addopd";
import Allopd from "./components/Allopd";
import Addopddetails from "./components/Addopddetails";
import Allopddetails from "./components/Allopddetails";
import Allsignup from "./components/Allsignup";
import Alllogin from "./components/Alllogin";
import Addappointment from "./components/Addappointment";
import Addlogin from "./components/Addlogin";
import AddsignUp from "./components/AddsignUp";
import Allappointment from "./components/Allappointment";

const clientId =
  "759490956581-7i571b001qbqn4jk596iqs1pvgnevc71.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  //var accessToken = gapi.auth.getToken().accessToken;

  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/login" element={<Addlogin />} />

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
        <Route exact path="/view-appointment" element={<Allappointment />} />

        <Route exact path="/add-patient" element={<Addpatient />} />

        <Route exact path="/view-patient" element={<Allpatient />} />

        <Route exact path="/" element={< Center />} />

        <Route exact path="/home" element={< Center />} />

        <Route exact path="/appointment" element={< Addappointment />} />

        <Route exact path="/contact" element={< Contact />} />

        <Route exact path="/patientpages" element={< Patientpages />} />

        <Route exact path="/doctor" element={<DoctorPage />} />

       

        <Route exact path="/Signup" element={<AddsignUp />} />

        <Route components={<pageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

ReactDOM.render(App, document.getElementById("root"));

export default App;
