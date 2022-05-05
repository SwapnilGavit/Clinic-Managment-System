import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div>
   
      <header className="text-gray-600  body-font  Relative bg-inherit">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">All Details</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" to="/add-Employee">Add Employee</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-Employee">View Employee</Link>
      <Link className="mr-5 hover:text-gray-900" to="/add-patient">Add patient</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-patient">view patient</Link>
      <Link className="mr-5 hover:text-gray-900" to="/add-medicine">Add medicine</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-medicine">View medicine</Link>
      <Link className="mr-5 hover:text-gray-900" to="/add-opd">Add opd</Link>     
      <Link className="mr-5 hover:text-gray-900" to="/view-opd">view opd</Link>
      <Link className="mr-5 hover:text-gray-900" to="/add-opd-details">Add opd details</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-opd-details">View opd details</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-signup">view registered users</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-login">Login  users</Link>
      <Link className="mr-5 hover:text-gray-900" to="/add-appointment">Add appoinment</Link>
      <Link className="mr-5 hover:text-gray-900" to="/view-Appointment"> view Appoinment</Link>
      
    </nav>
   
  </div>
</header> 
  </div>
     
   
    
   
  )
}

export default Menus;
