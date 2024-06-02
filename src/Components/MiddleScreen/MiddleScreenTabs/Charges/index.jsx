import React from "react";
import PatientClaims from "./PatientClaims";

function Charges() {
  return (
    <>
      <div className="tab-content scrollbarY--custom">
        <PatientClaims />
        <PatientClaims />
        <PatientClaims />
      </div>
    </>
  );
}

export default Charges;
