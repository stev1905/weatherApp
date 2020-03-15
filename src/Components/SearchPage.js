import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const SearchPage = ({ searchChange, submitButton }) => {
  return (
    <MDBCol md="5 flex justify-center ma4">
      <MDBFormInline className="br4 br4 ba b--none bg-lightest-blue w-20">
        <input 
          className="b--none sm ml-3 bg-lightest-blue outline-0-l mr3 pv3 ph3"
          type="text" 
          placeholder="Enter a Zipcode" 
          aria-label="Search" 
          onChange={searchChange}
        />
        <MDBIcon icon="search pointer" onClick={submitButton} />
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage