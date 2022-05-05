import React, { useState, useEffect } from "react";
import Patient from "./Opddetails";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allopddetails = () => {
  useEffect(() => {
    document.title = "all opddetails";
  }, []);

  //function to call server

  const getAllOpddetailsFromServer = () => {
    axios.get(`${base_url}/opddetails`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("opddetails datails is add", {
          position: "top-right",
        });
        setOpddetails(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading patient function
  useEffect(() => {
    getAllOpddetailsFromServer();
  }, []);

  const [opddetails, setOpddetails] = useState([
    { Symptoms:"khujli", diagnosis:"dawai", medicineid:45, quantity:2, investigations:"jaachpartal", followupdate:"popo" },
    { Symptoms:"sardi", diagnosis:"dawai", medicineid:58, quantity:4, investigations:"jaachpartal", followupdate:"uouo" },
    { Symptoms:"piles", diagnosis:"dawai", medicineid:63, quantity:2, investigations:"jaachpartal", followupdate:"yoyo" },
  ]);

  const updateopddetails=(oopdid)=>{
      setOpddetails(opddetails.filter((c)=>c.oopdid != oopdid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        list of all opddetails
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
                Opddetails Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-8 py-4">
              Symptoms
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
              Diagnosis
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Medicine ID
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Quantity
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
             Investigations
              </th>
              <th scope="col" className="text-sm font-medium text-white px-16 py-4">
              Followup Date
              </th>
              
             
            </tr>
          </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                   
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {opddetails.length > 0
                        ? opddetails.map((item) => <opddetails opddetails={item}  update={updateopddetails} />)
                        : "no opddetails List"}
                        
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

export default Allopddetails;
