import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Form, FormGroup, Toast } from "reactstrap";
import { Button } from "bootstrap";
import { data } from "autoprefixer";
import axios from "axios";
import base_url from "../Api/Bootapi";
import { toast } from "react-toastify";

function Addlogin() {
  useEffect(() => {
    document.title = "Add login";
  }, []);

  const [login, setLogin] = useState({});

  //form handler function

  const handelForm = (e) => {
    console.log(login);
    postDatatoServer(login);
    e.preventDefault()
  };

  //creating function to post data on server
  const postDatatoServer = (data) => {
    console.log(data);
    axios.post(`${base_url}/login`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("login add successfully")
      },
      (error) => {
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
              for="logid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Logid
            </label>
            <input
              type="text"
              id="logid"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setLogin({ ...login, logid: e.target.value })
              }}
            />
          </div>

          <div>
            <label
              for="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setLogin({ ...login, role: e.target.value })
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
              id="password"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value })
              }}
            />
          </div>

          <div>
            <label
              for="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              status
            </label>
            <input
              type="text"
              id="status"
              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setLogin({ ...login, status: e.target.value })
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

export default Addlogin;
