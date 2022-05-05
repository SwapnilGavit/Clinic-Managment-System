import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function Addopddetails() {
    useEffect(() => {
        document.title = "Add opddetails";
      }, []);
      
      const [opddetails, setOpddetails] = useState({});

//form handler function

const handelForm=(e)=>{
    console.log(opddetails);
    postDatatoServer(opddetails);
    e.preventDefault()
};

//creating function to post data on server
const postDatatoServer=(data)=>{
    console.log(data);
    axios.post(`${base_url}/opddetails`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("opddetails add successfully")
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
                  for="OOPDID"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Opd details Id
                </label>
                <input
                  type="text"
                  id="OOPDID"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                      setOpddetails({...opddetails,oopdid:e.target.value})
                  }}
                />
              </div>
    
              <div>
                <label
                  for="Symptoms"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Symptoms
                </label>
                <input
                  type="text"
                  id="Symptoms"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                    setOpddetails({...opddetails,symptoms:e.target.value})
                  }}
                />
              </div>
    
              <div>
                <label
                  for="Diagnosis"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Diagnosis
                </label>
                <input
                  type="text"
                  id="Diagnosis"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                    setOpddetails({...opddetails,diagnosis:e.target.value})
                  }}
                />
              </div>
    
              <div>
                <label
                  for="MedicineID"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  MedicineID
                </label>
                <input
                  type="text"
                  id="MedicineID"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                    setOpddetails({...opddetails,medicineid:e.target.value})
                  }}
                />
              </div>
    
              <div>
                <label
                  for="Quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="Quantity"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                    setOpddetails({...opddetails,quantity:e.target.value})
                  }}
                />
              </div>
    
              <div>
                <label
                  for="Investigations"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Investigations
                </label>
                <input
                  type="text"
                  id="Investigations"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                    setOpddetails({...opddetails,investigations:e.target.value})
                  }}
                />
              </div>
    
              <div>
                <label
                  for="followupDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  followupDate
                </label>
                <input
                  type="text"
                  id="followupDate"
                  className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{
                    setOpddetails({...opddetails,followupdate:e.target.value})
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
    
    export default Addopddetails;
