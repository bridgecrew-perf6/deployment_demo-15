import React from "react";
import { FaUsers, FaLaptopCode, FaImages, FaCreditCard } from 'react-icons/fa';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from '../Assets/Images/logo.png';
import Banner2 from '../Assets/Images/microphone.png';
import Banner3 from '../Assets/Images/location.png';

const Nav =()=>{
    return(
        <div> 
        <header> 
            <div className="row headerworapper">
              
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center imglogo">
                <img src={Banner1} width={100 + '%'}></img>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
                <section className="mb-4 text-center">
                <h3>SHOP NAME</h3>
              </section>
              </div> 
              

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center">
                <section className="mb-4 text-center">
                <h5>Company Overview</h5>
                <a className="companyover " role="button"><FaUsers/></a>
                <a className="companyover " href="#!" role="button" ><FaLaptopCode /></a>
                <a className="companyover " href="#!" role="button" ><FaImages/></a>
                <a className="companyover " href="#!" role="button" ><FaCreditCard/></a>
          
              </section>
              
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center">
                <h5>Our Services</h5>
                </div>
                <div className="col-lg-1 col-md-6 mb-4 mb-md-0 text-center imgw">
                <img src={Banner3} width={40 + '%'}></img>
                </div>
                <div className="col-lg-1 col-md-6 mb-4 mb-md-0 text-center imgw1">
                <img src={Banner2} width={60 + '%'}></img>
                </div>
                
              </div>
        </header>
    </div>
    );
}
 export default Nav;