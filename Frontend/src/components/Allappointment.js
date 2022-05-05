import React, { useState, useEffect } from "react";
import Appointment from "./Appointment";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allappointment = () => {
  useEffect(() => {
    document.title = "all appointment";
  }, []);

  //function to call server

  const getAllAppointmentFromServer = () => {
    axios.get(`${base_url}/appointment`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("appointment datails is add", {
          position: "top-right",
        });
        setAppointment(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading appointment function
  useEffect(() => {
    getAllAppointmentFromServer();
  }, []);

  const [appointment, setAppointment] = useState([
  ]);

  const updateappointment=(pid)=>{
      setAppointment(appointment.filter((c)=>c.pid 
      !== pid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        list of all appointment
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
              <th scope="col" className="text-sm font-medium text-white px-8 py-4">
                appointment Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-14 py-4">
              Name
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              Diagonosis
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              DateTime
              </th>
              <th scope="col" className="text-right text-sm font-medium text-white px-48 py-4">
             Symptoms
              </th>
             
            </tr>
          </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                   
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {appointment.length > 0
                        ? appointment.map((item) => <Appointment appointment={item}  update={updateappointment} />)
                        : "no appointment List"}
                        
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

export default Allappointment;