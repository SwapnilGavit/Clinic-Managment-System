import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function AddsignUp() {
  useEffect(() => {
    document.title = "Add signup";
  }, []);

  const [signup, setSignup] = useState({});

  //form handler function

  const handelForm=(e)=>{
      console.log(signup);
      postDatatoServer(signup);
      e.preventDefault()
  };

  //creating function to post data on server
  const postDatatoServer=(data)=>{
    console.log(data);
    axios.post(`${base_url}/signup`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("signup add successfully")
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
              for="SId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
               Signup Id
            </label>
            <input
              type="text"
              id="SId"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setSignup({...signup,sid:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="Pname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Patient Name
            </label>
            <input
              type="text"
              id="RegistrationDate"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setSignup({...signup,name:e.target.value})
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
                setSignup({...signup,name:e.target.value})
              }}
            />
          </div>
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
                setSignup({...signup,mobileno:e.target.value})
            }}
            />
          
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
                  setSignup({...signup,emailid:e.target.value})
              }}
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
               Password
            </label>
            <input
              type="text"
              id="Password"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setSignup({...signup,password:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="confirmpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              confirmpassword
            </label>
            <input
              type="text"
              id="confirmpassword"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setSignup({...signup,confirmpassword:e.target.value})
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

export default AddsignUp;