import React from "react";
import PatientPayments from "./PatientPayments";

function Payments() {
  return (
    <>
      <div className="tab-content scrollbarY--custom">
       <PatientPayments/>
       <PatientPayments/>
       <PatientPayments/>
       <PatientPayments/>

      </div>
    </>
  );
}

export default Payments;
