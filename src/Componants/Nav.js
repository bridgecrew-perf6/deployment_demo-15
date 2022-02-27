import React from "react";
import { FaUsers, FaLaptopCode, FaImages, FaCreditCard, FaMapMarkerAlt, FaMicrophoneSlash } from 'react-icons/fa';
import './Footer.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from '../Assets/Images/logo.png';


const Nav =()=>{
    return(

  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
  <div className="first">
  <img src={Banner1} width={50 + '%'}></img>
  </div>
  <div className="col-md-7">
  
  </div>
  <div className="col-md-2">
      
        <a className="companyover " role="button"><FaUsers/></a>
        <a className="companyover " href="#!" role="button" ><FaLaptopCode /></a>
        <a className="companyover " href="#!" role="button" ><FaImages/></a>
        <a className="companyover " href="#!" role="button" ><FaCreditCard/></a>
   
    </div>
    <div className="col-md-1">
       <a className="companyover " href="#!" role="button" ><FaMapMarkerAlt/></a>
        <a className="companyover " href="#!" role="button" ><FaMicrophoneSlash/></a>
 
    </div>
    </div>
</nav>

    );
}
 export default Nav;