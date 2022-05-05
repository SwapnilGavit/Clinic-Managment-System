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

const Opddetails=({opddetails,update})=>{

  const  deleteOpddetails =(oopdid)=>{
      axios.delete(`${base_url}/opddetails/${oopdid}`).then(
          (response)=>{
            toast.success("opddetails deleted")
            update(oopdid);
          },
        (error)=>{
            toast.error("opddetails not deleted ! something went wrong")
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
              {opddetails.oopdid}
              </td>
              <td className="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
              {opddetails.symptoms}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {opddetails.diagnosis}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {opddetails.medicineid}
              </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {opddetails.quantity}
              </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {opddetails.investigations}
              </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {opddetails.followupdate}
              </td>
              <Container>
                <Button  className="text-red bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-700 rounded text-lg"  onClick={()=>{
                    deleteOpddetails(opddetails.oopdid);
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


    /* <Card className="text-left">
        <CardBody>
        <Container>
            <CardSubtitle className="text-bold">{patient.name}</CardSubtitle>
            <CardText className="ml-10">{patient.registrationdate}</CardText>
            <CardText>{patient.name}</CardText> 
            <CardText>{patient.birthdate}</CardText>
             <CardText>{patient.gender}</CardText> 
             <CardText>{patient.emailid}</CardText>
              <CardText>{patient.mobileno}</CardText> 
              <CardText>{patient.adharno}</CardText> 
              <CardText>{patient.address}</CardText>
               <CardText>{patient.bloodgroup}</CardText> <CardText>{patient.chroniccisease}</CardText> <CardText>{patient.medicineallergy}</CardText> <CardText>{patient.doctorid}</CardText>
               </Container>
            
            <Container>
                <Button  className="text-red bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-700 rounded text-lg"  onClick={()=>{
                    deletePatient(patient.pid);
                }}  >Delete</Button>
                <Button className="text-red bg-yellow-500 border-0 py-1 px-5 focus:outline-none hover:bg-yellow-700 rounded text-lg"color="bg-warning-300 ml-3">Update</Button>
            </Container>
        </CardBody>
    </Card> */
);
};

export default Opddetails;