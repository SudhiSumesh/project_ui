import React, { useEffect, useState } from "react";
import PatientPayments from "./PatientPayments";
import { getPaymentSummary } from "../../../../Redux/Payments/payments.actions";
import { useDispatch, useSelector } from "react-redux";
import { Descriptions } from "antd";

function Payments() {
  const dispatch = useDispatch();
  const { paymentSummaryRes } = useSelector((state) => state.payment);

  const visitId = JSON.parse(
    localStorage.getItem("selectedClaimRecord")
  )?.visitId;

  useEffect(() => {
    if (visitId) {
      dispatch(getPaymentSummary(visitId));
    }
  }, [dispatch, visitId]);

  useEffect(() => {
    if (
      paymentSummaryRes &&
      paymentSummaryRes.responseCode === 0 &&
      paymentSummaryRes.data
    ) {
      console.log(paymentSummaryRes);
    }
  }, [paymentSummaryRes]);

  return (
    <div className="tab-content scrollbarY--custom">
      <Descriptions></Descriptions>
      {paymentSummaryRes?.data?.map((item, index) => (
        <PatientPayments key={index} procedureData={item} />
      ))}
    </div>
  );
}

export default Payments;
