import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function Addmedicine() {
  useEffect(() => {
    document.title = "Add medicine";
  }, []);

  const [medicine, setMedicine] = useState({});

  //form handler function

  const handelForm=(e)=>{
      console.log(medicine);
      postDatatoServer(medicine);
      e.preventDefault()
  };

  //creating function to post data on server
  const postDatatoServer=(data)=>{
    console.log(data);
    axios.post(`${base_url}/medicine`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Medicine add successfully")
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
              for="mid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
             medicineId
            </label>
            <input
              type="text"
              id="mid"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setMedicine({...medicine,mid:e.target.value})
              }}
            />
          </div>

          <div>
            <label
           
              for="mname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
            medicine Name
            </label>
            <input
              type="text"
              id="mname"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setMedicine({...medicine,mname:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="Birthdate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Rate
            </label>
            <input
              type="text"
              id="Rate"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setMedicine({...medicine,rate:e.target.value})
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

export default Addmedicine;
