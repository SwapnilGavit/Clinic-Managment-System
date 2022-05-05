import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allemployee = () => {
  useEffect(() => {
    document.title = "all employee";
  }, []);

  //function to call server

  const getAllemployeeFromServer = () => {
    axios.get(`${base_url}/employee`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("employee datails is add", {
          position: "top-right",
        });
        setEmployee(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading employee function
  useEffect(() => {
    getAllemployeeFromServer();
  }, []);

  const [employee, setEmployee] = useState([
    { Ename: "Swapnil", birthdate: "30/09/1997", gender: "M", emailid: "swapnilgavit19@gmail.com", mobileno: "8177931221", address: "Roha Raigad", role: "admin", qualification: "BTech", specialization: "EXTC", adharno: 4567891234561234, password: "Swapnil123", joiningdate: "10/10/2010" },
    { Ename: "Kaushal", birthdate: "10/09/1997", gender: "M", emailid: "kaushalpatil@gmail.com", mobileno: "0000001221", address: "Nandurbar", role: "admin", qualification: "BTech", specialization: "EXTC", adharno: 4567891234561234, password: "Kaushal", joiningdate: "10/10/2010" },
    { Ename: "Harshal", birthdate: "01/09/1997", gender: "M", emailid: "swapnilgavit19@gmail.com", mobileno: "8177931221", address: "Roha Raigad", role: "admin", qualification: "BTech", specialization: "EXTC", adharno: 4567891234561234, password: "Swapnil123", joiningdate: "10/10/2010" }
  ]);

  const updateemployee = (eid) => {
    setEmployee(employee.filter((c) => c.eid != eid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        list of all employee
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
                          Employee Id
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-8 py-4">
                          Employee Name
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-12 py-4">
                          Birthdate
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                          Gender
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                          EmailID
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                          Mobile No
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-16 py-4">
                          Address
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-16 py-4">
                          Role
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-16 py-4">
                          Qualification
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-4 py-4">
                          Specialization
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-10 py-4">
                          Adhar No
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-16 py-4">
                          Password
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-16 py-4">
                          JoiningDate
                        </th>


                      </tr>
                    </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">

                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {employee.length > 0
                        ? employee.map((item) => <Employee employee={item} update={updateemployee} />)
                        : "no employee List"}

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

export default Allemployee;
