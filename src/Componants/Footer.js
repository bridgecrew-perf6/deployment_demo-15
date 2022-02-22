import React from "react";
import { FaFacebookF , FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaPhone, FaMap, FaSearchLocation, FaPhoneAlt, FaLocationArrow, FaEnvelope} from 'react-icons/fa';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from '../Assets/Images/barcode.png';
import Banner2 from '../Assets/Images/map.png';

const Footer =()=>{

    return(
    
    <div>
        <footer className="bg-dark text-white"> 
            <div className="row socialiconsrow">
              
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center">
                <section className="mb-4 text-center">
                <h5>Social</h5>
                <a className="socialicon " role="button"><FaFacebookF/></a>
                <a className="socialicon " href="#!" role="button" ><FaInstagram /></a>
                <a className="socialicon " href="#!" role="button" ><FaTwitter/></a>
                <a className="socialicon " href="#!" role="button" ><FaLinkedin/></a>
                <a className="socialicon " href="#!" role="button" ><FaYoutube/></a>
              </section>
              
                </div>

                <div className="col-lg-1 col-md-6 mb-4 mb-md-0 text-center imgw1f">
                <img src={Banner1} width={100 + '%'}></img>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
                  
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center">
                <section className="mb-4 text-center">
                <h5>Contact Me</h5>
                <a className="socialicon " role="button"><FaWhatsapp/></a>
                <a className="socialicon " href="#!" role="button" ><FaPhone /></a>
                <a className="socialicon " href="#!" role="button" ><FaMap/></a>
              </section>
                </div>

                <div className="col-lg-1 col-md-6 mb-4 mb-md-0 text-center imgw2f">
                <img src={Banner2} width={100 + '%'}></img>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center">
                <button className="btn btn-danger"> Take Me To The Shop </button>
                </div>
              </div>


            <div className="row text-center credit">
              <section>
                <p className="text-white" >© 2021-2022 All Rights Reserved</p>
              </section>
            </div>
                
        </footer>
    </div>
    );
}

export default Footer;