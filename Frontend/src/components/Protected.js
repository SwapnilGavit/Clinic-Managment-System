import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';



function Protected(props) {
const Cmp = props.cmp
var auth = JSON.parse(localStorage.getItem('auth'))
console.warn(auth)
return <div> {auth ? <Cmp /> : <Navigate to="login" ></Navigate>} </div>

}
export default Protected;