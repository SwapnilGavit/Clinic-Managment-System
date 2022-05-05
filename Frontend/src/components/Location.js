import Header from './Header';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Route, Routes } from 'react-router-dom';



//  function Location() {
//    return (
   
     
     
//   <iframe
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.34922544208084!2d78.33899974365661!3d25.88304700441589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39771faaadb585a5%3A0x5ccc688cfbe0d7d1!2sDabra%2C%20Madhya%20Pradesh%20475110!5e0!3m2!1sen!2sin!4v1649007011574!5m2!1sen!2sin"  width="1200" height="800" style="border:0;" allowfullscreen="" loading="lazy"
//    referrerpolicy="no-referrer-when-downgrade"></iframe>
   
  

  
//     )
//  }

//  export default Location;
//   function Location() {
// return (
//      <div>
//    <div>

//  <section class="text-gray-600 body-font relative">
//    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//  <iframe
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.34922544208084!2d78.33899974365661!3d25.88304700441589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39771faaadb585a5%3A0x5ccc688cfbe0d7d1!2sDabra%2C%20Madhya%20Pradesh%20475110!5e0!3m2!1sen!2sin!4v1649007011574!5m2!1sen!2sin"
// width="1200" height="800" style="border:0;" allowfullscreen="" loading="lazy"
// referrerpolicy="no-referrer-when-downgrade"></iframe>


  
//      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//         <div class="lg:w-1/2 px-6">
//            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>         
//             <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
//          </div>
//          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
//            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
//            <a class="text-indigo-500 leading-relaxed">example@email.com</a>
//            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
//            <p class="leading-relaxed">123-456-7890</p>
//         </div>
//       </div>
//     </div>
//     <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
//      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
//      <div class="relative mb-4">
//        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
//         <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//        <div class="relative mb-4">
//         <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
//         <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//        </div>
//        <div class="relative mb-4">
//        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
//        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//       </div>
//       <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
//     </div>
//   </div>
//  </section>
//   </div>
//   </div>
//    );
//  }

// export default Location; 

//import React from 'react'

// function Location() {
//   return (
//     <div>Location
// var node = document.getElementById('node-id');
// node.innerHTML(
//   `

//  <h2>find us on map</h2>
//   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.34922544208084!2d78.33899974365661!3d25.88304700441589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39771faaadb585a5%3A0x5ccc688cfbe0d7d1!2sDabra%2C%20Madhya%20Pradesh%20475110!5e0!3m2!1sen!2sin!4v1648986141515!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//  `);
//  </div>
//    )
//  }

//  export default Location



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat:25.882994820068287, 
      lng:78.33917073447314,
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:" AIzaSyD1gtVLX4fgEC9ZIXaJaomq__aZ0xWJl54"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={25.882994820068287}
            lng={78.33917073447314}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
    }
  }

  export default Location
