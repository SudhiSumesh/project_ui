import React from 'react'
import PatientCharts from './PatientCharts/index';

function Charts() {
  return (
    <>
      <div className="tab-content scrollbarY--custom">
     <PatientCharts/>
     <PatientCharts/>
     <PatientCharts/>
     <PatientCharts/>
  
      </div>
    </>
  );
}

export default Charts
