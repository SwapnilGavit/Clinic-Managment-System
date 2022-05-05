import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header className="text-gray-600 body-font bg-indigo-300 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg> */}

          <img src="https://img.icons8.com/external-obvious-flat-kerismaker/48/000000/external-clinic-infirmary-flat-obvious-flat-kerismaker-32.png" />

          <img src='https://see.fontimg.com/api/renderfont4/Zj3q/eyJyIjoiZnMiLCJoIjo0MywidyI6MTAwMCwiZnMiOjQzLCJmZ2MiOiIjNUE0NjdEIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/R0FOREhJJ1MgQ0xJTklD/dreamwood-demo-regular.png'/>



          {/* <span className="title-font sm:text-3xl text-2xl mb-1 font-medium"><h1>G̊⫶Å⫶N̊⫶D̊⫶H̊⫶I̊⫶'̊⫶S̊⫶ C̊⫶L̊⫶I̊⫶N̊⫶I̊⫶C̊⫶</h1></span>
           */}
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" to="/home" >Home</Link>  
           <Link className="mr-5 hover:text-gray-900" to="/location" >Location</Link>  
          <Link className="mr-5 hover:text-gray-900" to="/appointment">Appointment</Link>  
           <Link className="mr-5 hover:text-gray-900" to="/contact">Contact</Link>  
           <Link className="mr-5 hover:text-gray-900" to="/patientpages">Patient pages</Link>            
           <Link className="mr-5 hover:text-gray-900" to="/doctor">Doctor Page</Link>            


        </nav>
        <Link className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" to="login">login
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header;