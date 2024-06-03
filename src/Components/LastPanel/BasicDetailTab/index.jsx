import React from "react";
import PatientInfo from "./PatientInfo";
import InsuranceTab from "./InsuranceTab";
import PolicyHolder from "./PolicyHolder";
function BasicDetailTab() {
  return (
    <div className="tab-content scrollbarY--custom">
      <PatientInfo />
      <PolicyHolder />
      <InsuranceTab />
    </div>
  );
}

export default BasicDetailTab;
