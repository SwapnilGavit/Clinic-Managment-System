import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import 
{   Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from "../Api/Bootapi";

const Signup=({signup,update})=>{

  const  deleteSignup =(sid)=>{
      axios.delete(`${base_url}/signup/${sid}`).then(
          (response)=>{
            toast.success("signup deleted")
            update(sid);
          },
        (error)=>{
            toast.error("signup not deleted ! something went wrong")
        }
      )
  }
return(
<div className="flex flex-col ml-5">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
        
          <tbody>
            <tr className="bg-white border-b">
              <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
              {signup.sid}
              </td>
              <td className="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
              {signup.pname}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {signup.mobilenumber}
              </td>
              <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
              {signup.emailid}
              </td>
              <td className="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
              {signup.password}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {signup.confirnpassword}
              </td>
              <Container>
                <Button  className="text-red bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-700 rounded text-lg"  onClick={()=>{
                   deleteSignup(signup.sid);
                }}  >Delete</Button>
                <Button className="text-red bg-yellow-500 border-0 py-1 px-5 focus:outline-none hover:bg-yellow-700 rounded text-lg"color="bg-warning-300 ml-3">Update</Button>
            </Container>
            </tr >
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


   
);
};

export default Signup;