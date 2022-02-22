import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from '../Assets/Images/logo1.png';
import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
      <>
    <div className="col-lg-1 col-md-6 mb-4 mb-md-0 text-center imgw1f">
    <img src={Banner1} width={100 + '%'}></img>
    </div>
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4 ">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
    </>
  );
}

export default SearchPage;