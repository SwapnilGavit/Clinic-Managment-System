import React, { useState, useEffect } from "react";
import Patient from "./Patient";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allpatient = () => {
  useEffect(() => {
    document.title = "all patient";
  }, []);

  //function to call server

  const getAllPatientFromServer = () => {
    axios.get(`${base_url}/patient`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("patient datails is add", {
          position: "top-right",
        });
        setPatient(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading patient function
  useEffect(() => {
    getAllPatientFromServer();
  }, []);

  const [patient, setPatient] = useState([
    { Name: "kaushal", description: "padne ki bimari" },
    { Name: "harshal", description: "very very intellegent" },
    { Name: "swapnil", description: "very intelligent" },
  ]);

  const updatepatient=(pid)=>{
      setPatient(patient.filter((c)=>c.pid != pid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        list of all patient
      </p>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full border text-center">
                <thead class="border-b bg-gray-800">
                  <tr>
                  <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                patient Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-8 py-4">
              Registration Date
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
              Name
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Birth Date
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Gender
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
             EmailID
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              Mobile No
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              Adhar No
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              Address
              </th>
              <th scope="col" className="text-sm font-medium text-white px-4 py-4">
              Blood Group
              </th>
              <th scope="col" className="text-sm font-medium text-white px-10 py-4">
              Chronic Disease
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              Medicine Allergy
              </th>
             
            </tr>
          </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                   
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {patient.length > 0
                        ? patient.map((item) => <Patient patient={item}  update={updatepatient} />)
                        : "no patient List"}
                        
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allpatient;
