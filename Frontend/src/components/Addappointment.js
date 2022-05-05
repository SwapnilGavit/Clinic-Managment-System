import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function Addappointment() {
  useEffect(() => {
    document.title = "Add appointment";
  }, []);

  const [appointment, setAppointment] = useState({});

  //form handler function

  const handelForm=(e)=>{
      console.log(appointment);
      postDatatoServer(appointment);
      e.preventDefault()
  };

  //creating function to post data on server
  const postDatatoServer=(data)=>{
    console.log(data);
    axios.post(`${base_url}/appointment`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("appointment add successfully")
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
            for="aid"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            AppointmentId
          </label>
          <input
            type="text"
            id="aid"
            className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=>{
                setAppointment({...appointment,aid:e.target.value})
            }}
          />
        </div>

        <div>
          <label
            for="symptoms"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="symptoms"
            className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=>{
                setAppointment({...appointment,aname:e.target.value})
            }}
          />
        </div>

        <div>
          <label
            for="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Diagonosis
          </label>
          <input
            type="text"
            id="Name"
            className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=>{
                setAppointment({...appointment,diagonosis:e.target.value})
            }}
          />
        </div>

        <div>
          <label
            for="Medicineid"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
           Time & Date
          </label>
          <input
            type="text"
            id="Medicineid"
            className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=>{
                setAppointment({...appointment,date_time:e.target.value})
            }}
          />
        </div>

       
        <div className="mb-6">
          <label
            for="Aname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
           Symptoms
          </label>
          <input
            type="text"
            id="Aname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=>{
              setAppointment({...appointment,symptoms:e.target.value})
          }}
          />
        </div>
        
      
        

       
       

       

       

       

       

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

export default Addappointment;