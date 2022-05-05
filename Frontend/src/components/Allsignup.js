import React, { useState, useEffect } from "react";
import Patient from "./Signup";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allsignup = () => {
  useEffect(() => {
    document.title = "all signup";
  }, []);

  //function to call server

  const getAllSignupFromServer = () => {
    axios.get(`${base_url}/signup`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("signup datails is add", {
          position: "top-right",
        });
        setSignup(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading patient function
  useEffect(() => {
    getAllSignupFromServer();
  }, []);

  const [signup, setSignup] = useState([
    { pname: "aaa", mobilenumber: 123444, emailid: "afeewf", password: "jguwqq", confirmpassword: "23y83" },
    { pname: "dda", mobilenumber: 1, emailid: "afeewf", password: "jwqq", confirmpassword: "y83" },
    { pname: "rtya", mobilenumber: 444, emailid: "ewf", password: "jguq", confirmpassword: "83" },
  ]);

  const updatesignup=(sid)=>{
      setSignup(signup.filter((c)=>c.sid != sid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        list of all signup
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
                signup id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-8 py-4">
               pname
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
               mobilenumber
              </th>
              <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                emailid
              </th>
              <th scope="col" className="text-sm font-medium text-white px-8 py-4">
               password
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
               confirmpassword
              </th>
            </tr>
          </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                   
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {signup.length > 0
                        ? signup.map((item) => <signup  signup={item}  update={updatesignup} />)
                        : "no signup List"}
                        
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

export default Allsignup;
