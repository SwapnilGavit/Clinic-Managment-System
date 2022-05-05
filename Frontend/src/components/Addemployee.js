import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function Addemployee() {
  useEffect(() => {
    document.title = "Add employee";
  }, []);

  const [employee, setEmployee] = useState({});

  //form handler function

  const handelForm=(e)=>{
      console.log(employee);
      postDatatoServer(employee);
      e.preventDefault()
  };

  //creating function to post data on server
  const postDatatoServer=(data)=>{
    console.log(data);
    axios.post(`${base_url}/employee`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("employee add successfully")
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
              for="EId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              employeeId
            </label>
            <input
              type="text"
              id="EId"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setEmployee({...employee,eid:e.target.value})
              }}
            />
          </div>

          <div>
            <label
              for="Ename"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Ename
            </label>
            <input
              type="text"
              id="Ename"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                  setEmployee({...employee,ename:e.target.value})
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
                  setEmployee({...employee,birthdate:e.target.value})
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
                  setEmployee({...employee,gender:e.target.value})
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
                setEmployee({...employee,emailid:e.target.value})
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
                setEmployee({...employee,mobileno:e.target.value})
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
                setEmployee({...employee,address:e.target.value})
            }}
            />
          </div>

          <div className="mb-6">
            <label
              for="Role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Role
            </label>
            <input
              type="text"
              id="Role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setEmployee({...employee,role:e.target.value})
            }}
            />
          </div>

          <div className="mb-6">
            <label
              for="Qualification"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Qualification
            </label>
            <input
              type="text"
              id="Qualification"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setEmployee({...employee,qualification:e.target.value})
            }}
            />
          </div>

          <div className="mb-6">
            <label
              for="Specialization"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Specialization
            </label>
            <input
              type="text"
              id="Specialization"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setEmployee({...employee,specialization:e.target.value})
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
                setEmployee({...employee,adharno:e.target.value})
            }}
            />
          </div>
          <div className="mb-6">
            <label
              for="Password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Password
            </label>
            <input
              type="text"
              id="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setEmployee({...employee,password:e.target.value})
            }}
            />
          </div>

          <div className="mb-6">
            <label
              for="Joiningdate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Joiningdate
            </label>
            <input
              type="text"
              id="Joiningdate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e)=>{
                setEmployee({...employee,joiningdate:e.target.value})
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

export default Addemployee;
