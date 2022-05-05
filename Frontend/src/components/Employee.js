import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from "../Api/Bootapi";

const Employee = ({ employee, update }) => {

    const deleteEmployee = (eid) => {
        axios.delete(`${base_url}/employee/${eid}`).then(
            (response) => {
                toast.success("Employee deleted")
                update(eid);
            },
            (error) => {
                toast.error("Employee not deleted ! something went wrong")
            }
        )
    }
    return (
        <div className="flex flex-col ml-5">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">

                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                                        {employee.eid}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
                                        {employee.ename}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.birthdate}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.gender}
                                    </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.emailid}
                                    </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.mobileno}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.address}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.role}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.qualification}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.specialization}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.adharno}
                                    </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.password}
                                    </td>  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {employee.joiningdate}
                                    </td>
                                    <Container>
                                        <Button className="text-red bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-700 rounded text-lg" onClick={() => {
                                            deleteEmployee(employee.eid);
                                        }}  >Delete</Button>
                                        <Button className="text-red bg-yellow-500 border-0 py-1 px-5 focus:outline-none hover:bg-yellow-700 rounded text-lg" color="bg-warning-300 ml-3">Update</Button>
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

export default Employee;