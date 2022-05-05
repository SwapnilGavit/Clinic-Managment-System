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

const Appointment=({appointment,update})=>{

  const  deleteAppointment =(pid)=>{
      axios.delete(`${base_url}/appointment/${pid}`).then(
          (response)=>{
            toast.success("appointment deleted")
            update(pid);
          },
        (error)=>{
            toast.error("appointment not deleted ! something went wrong")
        }
      )
  }
return(
<div className="flex flex-col ml-5">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-1 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left">
        
          <tbody>
            <tr className="bg-white border-b">
              <td className="text-sm text-gray-900 font-light px-9 py-4 whitespace-nowrap">
              {appointment.aid}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {appointment.aname}
              </td>
              <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
              {appointment.diagonosis}
              </td>
              <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
              {appointment.date_time}
              </td> 
              <td className="text-sm text-gray-900 font-light px-16 py-4 whitespace-nowrap text-left">
              {appointment.symptoms}
              </td> 


              <Container>
                <Button  className="text-red bg-red-500 border-0 py-1 px-1 focus:outline-none hover:bg-red-700 rounded text-lg"  onClick={()=>{
                    deleteAppointment(appointment.aid);
                }}  >Delete</Button>
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
            <CardSubtitle className="text-bold">{appointment.name}</CardSubtitle>
            <CardText className="ml-10">{appointment.registrationdate}</CardText>
            <CardText>{appointment.name}</CardText> 
            <CardText>{appointment.birthdate}</CardText>
             <CardText>{appointment.gender}</CardText> 
             <CardText>{appointment.emailid}</CardText>
              <CardText>{appointment.mobileno}</CardText> 
              <CardText>{appointment.adharno}</CardText> 
              <CardText>{appointment.address}</CardText>
               <CardText>{appointment.bloodgroup}</CardText> <CardText>{appointment.chroniccisease}</CardText> <CardText>{appointment.medicineallergy}</CardText> <CardText>{appointment.doctorid}</CardText>
               </Container>
            
            <Container>
                <Button  className="text-red bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-700 rounded text-lg"  onClick={()=>{
                    deleteAppointment(appointment.pid);
                }}  >Delete</Button>
                <Button className="text-red bg-yellow-500 border-0 py-1 px-5 focus:outline-none hover:bg-yellow-700 rounded text-lg"color="bg-warning-300 ml-3">Update</Button>
            </Container>
        </CardBody>
    </Card> */
);
};

export default Appointment;