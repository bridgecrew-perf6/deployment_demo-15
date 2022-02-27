import React from "react";
import { FaFacebookF , FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaSearchLocation, FaPhoneAlt, FaLocationArrow, FaEnvelope} from 'react-icons/fa';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from '../Assets/Images/barcode.png';

const Footer =()=>{

    return(
    

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container ">
  
    <div className="col-lg-3 ">

               <a className="socialicon " role="button"><FaFacebookF/></a>
                <a className="socialicon " href="#!" role="button" ><FaInstagram /></a>
                <a className="socialicon " href="#!" role="button" ><FaTwitter/></a>
                <a className="socialicon " href="#!" role="button" ><FaLinkedin/></a>
                <a className="socialicon " href="#!" role="button" ><FaYoutube/></a>
                <a className="socialicon " role="button"><FaWhatsapp/></a>
                <a className="socialicon " href="#!" role="button" ><FaPhone /></a>

    </div>
    <div className="col-lg-7">
    </div>
    <div className="col-lg-1">
  <a><img src={Banner1} width={45+ '%'}/></a>
    </div>
    <div className="col-lg-1"> 
    <button className="btn btn-danger"> Shop </button>
    </div>
    </div>
  </nav>

    );
}

export default Footer;