import React, { useState, useEffect } from "react";
import Login from "./Login";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Alllogin = () => {
    useEffect(() => {
        document.title = "all login";
    }, []);

    //function to call server

    const getAllLoginFromServer = () => {
        axios.get(`${base_url}/login`).then(
            (response) => {
                // for response
                console.log(response.data);
                toast.success("login datails is add", {
                    position: "top-right",
                });
                setLogin(response.data);
            },
            (error) => {
                //for error
                console.log("something went wrong");
            }
        );
    };

    //calling loading login function
    useEffect(() => {
        getAllLoginFromServer();
    }, []);

    const [login, setLogin] = useState([
        { Logid: 1, Role: "Admin", password: "Swapnil123", status: 1 },
        { Logid: 2, Role: "Admin", password: "kaushal123", status: 1 }
    ]);



    // const updatelogin=(pid)=>{
    // setLogin(login.filter((c)=>c.pid != pid));

    const updatelogin = (logid) => {
        setLogin(login.filter((c) => c.logid != logid));
    };

    return (
        <div>
            <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                list of all login
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
                                                    Id
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-8 py-4">
                                                    Role
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-12 py-4">
                                                    Password
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Status
                                                </th>


                                            </tr>
                                        </thead >
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">

                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                            {login.length > 0
                                                ? login.map((item) => <Login login={item} update={updatelogin} />)
                                                : "no login List"}

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

export default Alllogin;
