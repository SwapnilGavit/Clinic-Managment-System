import React, { useState, useEffect } from "react";
//import Patient from "./Medicine";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import Medicine from "./Medicine";

const Allmedicine = () => {
  useEffect(() => {
    document.title = "all medicine";
  }, []);

  //function to call server

  const getAllMedicineFromServer = () => {
    axios.get(`${base_url}/medicine`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("medicine datails is add", {
          position: "top-right",
        });
        setMedicine(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading patient function
  useEffect(() => {
    getAllMedicineFromServer();
  }, []);

  const [medicine, setMedicine] = useState([
    { Name: "crosin", rate:  10.00 },
    { Name: "disprint", rate:  15.00 },
    { Name: "vics", rate:  12.00 },
  ]);

  const updatemedicine=(mid)=>{
      setMedicine(medicine.filter((c)=>c.mid != mid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-purple-700">
        List of all Medicine
      </p>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full border text-right">
                <thead class="border-b bg-gray-800">
                  <tr>
                  <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-20 py-4  pl-100">
                Medicine Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-20 py-4   pl-200">
               MName
              </th>
              <th scope="col" className="text-sm font-medium text-white px-32 py-4 pl-300">
               Rate
              </th>
               
            </tr>
          </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                   
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {medicine.length > 0
                        ? medicine.map((item) => <Medicine medicine={item}  update={updatemedicine} />)
                        : "no medicine List"}
                        
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

export default Allmedicine;
