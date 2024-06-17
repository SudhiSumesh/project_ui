import React, { useEffect } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { Button, DatePicker, Input, Select } from "antd";
import { ClaimsFormValidationSchema } from "../../Helpers/ValidationSchema";
import { editClaim } from "../../Redux/Claim/claim.actions";
import { useDispatch, useSelector } from "react-redux";
import {
  providerList,
  serviceList,
  FacilityList,
  statuses,
  payerList,
} from "../../Helpers/enums";
import "./style.css";
// Function to format date to YYYY-MM-DD
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};
function ClaimEditForm({ closeAdd, selectedRecord }) {
  const clinicId = localStorage.getItem("clinic_id");
  const dispatch = useDispatch();
  const { claimUpdateResponse } = useSelector((state) => state.claim);
  // Mapping enums to options for Select components
  const providers = providerList.map((provider) => ({
    value: provider.id,
    label: provider.fullName,
  }));
  const payers = payerList.map((payer) => ({
    value: payer.payerId,
    label: payer.payerName,
  }));
  const services = serviceList.map((service) => ({
    value: service.id,
    label: service.name,
  }));
  const facilities = FacilityList.map((facility) => ({
    value: facility.id,
    label: facility.locationName,
  }));
  const statusOptions = statuses.map((status) => ({
    value: status.value,
    label: status.name,
  }));

  const formik = useFormik({
    initialValues: {
      claimId: selectedRecord?.claimId,
      patientId: selectedRecord?.patientId,
      providerId: selectedRecord?.providerId,
      primaryPayerId: selectedRecord?.primaryPayerId,
      facilityId: selectedRecord?.facilityId,
      apptType: selectedRecord.serviceId,
      patientName: selectedRecord?.patientName,
      mrn: selectedRecord?.mrn,
      providerName: selectedRecord?.provider,
      dos: selectedRecord?.dos,
      primaryPayerName: selectedRecord?.payor,
      facilityName: selectedRecord?.facility,
      appointmentType: selectedRecord?.service,
      billed: selectedRecord?.charges,
      primaryPending: selectedRecord?.insBal,
      patientPending: selectedRecord?.patBal,
      status: selectedRecord?.statusId || null,
      //   statusName: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("submit");
      dispatch(
        editClaim({
          ...values,
          dos: formatDate(values.dos),
          //   clinicId,
        })
      );
      resetForm();
      closeAdd();
    },
    enableReinitialize: true,
  });
  useEffect(() => {
    if (
      claimUpdateResponse &&
      claimUpdateResponse.responseCode === 0 &&
      claimUpdateResponse.data
    ) {
    //   console.log(claimUpdateResponse);
      toast.success("Claim updated successfully");
    }
  }, [claimUpdateResponse]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          display: "flex",
          gap: "18px",
          paddingTop: "16px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "1rem",
        }}
      >
        <span className="model-header-title">Add New Claim</span>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button size={"medium"} onClick={closeAdd}>
            Cancel
          </Button>
          <Button size={"medium"} type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </div>
      <div className="modal-grid">
        <div className="input-container">
          <Select
            placeholder="Patient Name"
            size="large"
            className="modal-grid-buttons"
            options={[{ label: "Amal", value: 1 }]}
            name="patientName"
            value={formik.values.patientName}
            onChange={(value, option) => {
              formik.setFieldValue("patientId", value);
              formik.setFieldValue("patientName", option.label);
            }}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="input-container">
          <Input
            name="mrn"
            placeholder="MRN"
            size="large"
            className="modal-grid-buttons"
            value={formik.values.mrn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="input-container">
          <Select
            placeholder="Provider Name"
            size="large"
            className="modal-grid-buttons"
            options={providers}
            name="providerId"
            value={formik.values.providerId}
            onChange={(value, option) => {
              formik.setFieldValue("providerId", value);
              formik.setFieldValue("providerName", option.label);
            }}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="input-container">
          <DatePicker
            placeholder="DOS"
            size="large"
            className="custom-datepicker"
            name="dos"
            format="MM-DD-YYYY"
            onChange={(date) => formik.setFieldValue("dos", date)}
            // value={formik.values.dos}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dos && formik.errors.dos ? (
            <div className="error">{formik.errors.dos}</div>
          ) : null}
        </div>

        <div className="input-container">
          <Select
            placeholder="Payor Name"
            size="large"
            className="modal-grid-buttons"
            options={payers}
            name="primaryPayerId"
            value={formik.values.primaryPayerId}
            onChange={(value, option) => {
              formik.setFieldValue("primaryPayerId", value);
              formik.setFieldValue("primaryPayerName", option.label);
            }}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="input-container">
          <Select
            placeholder="Facility Name"
            size="large"
            className="modal-grid-buttons"
            options={facilities}
            name="facilityId"
            value={formik.values.facilityId}
            onChange={(value, option) => {
              formik.setFieldValue("facilityId", value);
              formik.setFieldValue("facilityName", option.label);
            }}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="input-container">
          <Select
            placeholder="Service"
            size="large"
            className="modal-grid-buttons"
            options={services}
            name="apptType"
            value={formik.values.apptType}
            onChange={(value, option) => {
              formik.setFieldValue("apptType", value);
              formik.setFieldValue("appointmentType", option.label);
            }}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="input-container">
          <Input
            name="billed"
            placeholder="Charges"
            size="large"
            className="modal-grid-buttons"
            value={formik.values.billed}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="input-container">
          <Input
            name="primaryPending"
            placeholder="Ins Bal"
            size="large"
            className="modal-grid-buttons"
            value={formik.values.primaryPending}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="input-container">
          <Input
            name="patientPending"
            placeholder="Pat Bal"
            size="large"
            className="modal-grid-buttons"
            value={formik.values.patientPending}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="input-container">
          <Select
            placeholder="Claim Status"
            size="large"
            className="modal-grid-buttons"
            options={statusOptions}
            name="status"
            value={formik.values.status}
            onChange={(value, option) => {
              formik.setFieldValue("status", value);
              formik.setFieldValue("statusName", option.label);
            }}
            onBlur={formik.handleBlur}
          />
        </div>


      </div>
    </form>
  );
}

export default ClaimEditForm;
