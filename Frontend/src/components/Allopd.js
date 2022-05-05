import React, { useState, useEffect } from "react";
import Opd from "./Opd";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allopd = () => {
  useEffect(() => {
    document.title = "all opd";
  }, []);

  //function to call server

  const getAllOpdFromServer = () => {
    axios.get(`${base_url}/opd`).then(
      (response) => {
        // for response
        console.log(response.data);
        toast.success("opd datails is add", {
          position: "top-right",
        });
        setOpd(response.data);
      },
      (error) => {
        //for error
        console.log("something went wrong");
      }
    );
  };

  //calling loading patient function
  useEffect(() => {
    getAllOpdFromServer();
  }, []);

  const [opd, setOpd] = useState([
    { Visitdate: "17/09/2022", pid: 123456 ,doctorid: 456, status: 5 },
    { Visitdate: "17/09/2022", pid: 123453 ,doctorid: 46, status: 54 },
    { Visitdate: "17/09/2022", pid: 123457 ,doctorid: 42, status: 45 },
  ]);

  const updateopd=(opdid)=>{
      setOpd(opd.filter((c)=>c.opdid != opdid));
  };

  return (
    <div>
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-purple-700">
        list Of All Opd
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
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
                Opd Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
              Visit Date
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
              PId
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
              Doctor Id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-12 py-4">
              Status
              </th>
              
             
            </tr>
          </thead >
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                   
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                      {opd.length > 0
                        ? opd.map((item) => <Opd opd={item}  update={updateopd} />)
                        : "no opd List"}
                        
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

export default Allopd;
