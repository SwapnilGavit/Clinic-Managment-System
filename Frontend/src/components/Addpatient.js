import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function Addpatient() {
  useEffect(() => {
    document.title = "Add patient";
  }, []);

  const [patient, setPatient] = useState({});

  //form handler function

  const handelForm=(e)=>{
      console.log(patient);
      postDatatoServer(patient);
      e.preventDefault()
  };

  //creating function to post data on server
  const postDatatoServer=(data)=>{
    console.log(data);
    axios.post(`${base_url}/patient`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("patient add successfully")
    },
    (error)=>{
    console.log(error);
    console.log("error");
    toast.error("Error something went wrong")
    }
    );
  };


  return (
    <>
      <div className=" Container ml-20 py-10 w-100">
        <Form onSubmit={handelForm}>
        

        <div>
            <label
              for="PId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              patientId
            </label>
            <input
              type="text"
              id="PId"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,pid:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="RegistrationDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              RegistrationDate
            </label>
            <input
              type="text"
              id="RegistrationDate"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,registrationdate:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Patient Name
            </label>
            <input
              type="text"
              id="Name"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,name:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="Birthdate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Birthdate
            </label>
            <input
              type="text"
              id="Birthdate"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,birthdate:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="Gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Gender
            </label>
            <input
              type="text"
              id="Gender"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,gender:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="EmailID"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              EmailID
            </label>
            <input
              type="text"
              id="EmailID"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,emailid:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="MobileNo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Mobile No.
            </label>
            <input
              type="text"
              id="MobileNo"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,mobileno:e.target.value})
            }}
            />
          </div>

          <div>
            <label
              for="AdharNo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              AdharNo
            </label>
            <input
              type="text"
              id="AdharNo"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,adharno:e.target.value})
            }}
            />
          </div>

          <div className="mb-6">
            <label
              for="Address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,address:e.target.value})
            }}
            />
          </div>

          <div>
            <label
              for="BloodGroup"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              BloodGroup
            </label>
            <input
              type="text"
              id="BloodGroup"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setPatient({...patient,bloodgroup:e.target.value})
              }}
            />
          </div>

          <div className="mb-6">
            <label
              for="ChronicDisease"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
             ChronicDisease
            </label>
            <input
              type="text"
              id="ChronicDisease"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,chronicdisease:e.target.value})
            }}
            />
          </div>

          {/* <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Age
            </label>
            <input
              type="text"
              id="small-input"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,Age:e.target.value})
            }}
            />
          </div>

          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              weight
            </label>
            <input
              type="text"
              id="small-input"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,Weight:e.target.value})
            }}
            />
          </div> */}

          <div className="mb-6">
            <label
              for="MedicineAllergy"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              MedicineAllergy
            </label>
            <input
              type="text"
              id="MedicineAllergy"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,medicineallergy:e.target.value})
            }}
            />
          </div>

          <div>
            <label
              for="DoctorId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              DoctorId
            </label>
            <input
              type="text"
              id="DoctorId"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,doctorid:e.target.value})
            }}
            />
          </div>
         
          {/* <div className="mb-6">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Medical problem
            </label>
            <input
              type="text"
              id="Medical"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,Medical:e.target.value})
            }}
            />
          </div> */}

          {/* <div className="mb-6">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Prescription
            </label>
            <input
              type="text"
              id="large-input"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setPatient({...patient,Prescription:e.target.value})
            }}
            />
          </div> */}


          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          <button
            
            className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
           type="reset"
          >
            Clear
          </button>
        </Form>
      </div>
    </>
  );
}

export default Addpatient;
