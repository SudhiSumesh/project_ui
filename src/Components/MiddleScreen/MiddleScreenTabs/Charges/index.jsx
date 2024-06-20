import React from "react";
import Diagnosis from "./Diagnosis";
import Services from "./Services";

function Charges() {
  return (
    <>
      <div className="tab-content scrollbarY--custom">
        <Diagnosis />
        <Services />
      </div>
    </>
  );
}

export default Charges;
