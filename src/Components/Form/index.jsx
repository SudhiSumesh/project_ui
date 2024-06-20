import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { AutoComplete, Button, DatePicker, Input, Select } from "antd";
import { ClaimsFormValidationSchema } from "../../Helpers/ValidationSchema";
import { createNewClaim, patientSearch } from "../../Redux/Claim/claim.actions";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../Helpers/dateFormater";
import {
  providerList,
  serviceList,
  FacilityList,
  statuses,
  payerList,
} from "../../Helpers/enums";
import "./style.css";

function Form({ closeAdd }) {
  const [searchInput, setSearchInput] = useState("");
  const clinicId = localStorage.getItem("clinic_id");
  const dispatch = useDispatch();
  const { claimCreateResponse, patientSearchRes } = useSelector(
    (state) => state.claim
  );

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
  useEffect(() => {
    if (searchInput.length >= 3) {
      dispatch(
        patientSearch({
          clinicId: clinicId,
          searchInput: searchInput,
        })
      );
    }
  }, [searchInput]);

  // Form handling using formik
  const formik = useFormik({
    initialValues: {
      patientName: "",
      patientId: null,
      mrn: null,
      providerId: null,
      providerName: "",
      dos: null,
      primaryPayerId: null,
      primaryPayerName: "",
      facilityId: null,
      facilityName: "",
      apptType: null,
      appointmentType: "",
      billed: "",
      primaryPending: null,
      patientPending: null,
      status: "",
      statusName: "",
      visitId: null,
    },
    validationSchema: ClaimsFormValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("submit");
      dispatch(
        createNewClaim({
          ...values,
          dos: formatDate(values.dos),
          clinicId,
        })
      );
      resetForm();
      closeAdd();
    },
  });
  useEffect(() => {
    if (
      claimCreateResponse &&
      claimCreateResponse.responseCode === 0 &&
      claimCreateResponse.data
    ) {
      // console.log(claimCreateResponse);
      toast.success(claimCreateResponse.data?.message);
    }
  }, [claimCreateResponse]);
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
          <AutoComplete
            options={patientSearchRes?.results?.map((patient) => ({
              value: patient.patientId,
              label: patient.patientName,
            }))}
            onSelect={(value, option) => {
              formik.setFieldValue("patientName", option.label);
              formik.setFieldValue("patientId", value);
              setSearchInput(option.label);
            }}
            onSearch={(value) => setSearchInput(value)}
            value={searchInput}
          >
            <Input
              placeholder="Patient Name"
              size="large"
              className="modal-grid-buttons"
              name="patientName"
              value={formik.values.patientName}
              onChange={(e) => {
                setSearchInput(e.target.value);
                formik.setFieldValue("patientName", e.target.value);
              }}
              onBlur={formik.handleBlur}
            />
          </AutoComplete>
          {formik.touched.patientName && formik.errors.patientName ? (
            <span className="error">{formik.errors.patientName}</span>
          ) : null}
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
          {formik.touched.mrn && formik.errors.mrn ? (
            <span className="error">{formik.errors.mrn}</span>
          ) : null}
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
          {formik.touched.providerId && formik.errors.providerId ? (
            <span className="error">{formik.errors.providerId}</span>
          ) : null}
        </div>

        <div className="input-container">
          <DatePicker
            placeholder="DOS"
            size="large"
            className="custom-datepicker"
            name="dos"
            format="MM-DD-YYYY"
            onChange={(date) => formik.setFieldValue("dos", date)}
            value={formik.values.dos}
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
          {formik.touched.primaryPayerId && formik.errors.primaryPayerId ? (
            <span className="error">{formik.errors.primaryPayerId}</span>
          ) : null}
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

          {formik.touched.facilityId && formik.errors.facilityId ? (
            <span className="error">{formik.errors.facilityId}</span>
          ) : null}
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
          {formik.touched.apptType && formik.errors.apptType ? (
            <span className="error">{formik.errors.apptType}</span>
          ) : null}
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
          {formik.touched.billed && formik.errors.billed ? (
            <span className="error">{formik.errors.billed}</span>
          ) : null}
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
          {formik.touched.primaryPending && formik.errors.primaryPending ? (
            <span className="error">{formik.errors.primaryPending}</span>
          ) : null}
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
          {formik.touched.patientPending && formik.errors.patientPending ? (
            <span className="error">{formik.errors.patientPending}</span>
          ) : null}
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
          {formik.touched.status && formik.errors.status ? (
            <span className="error">{formik.errors.status}</span>
          ) : null}
        </div>

        <div className="input-container">
          <Input
            name="visitId"
            placeholder="Visit No"
            size="large"
            className="modal-grid-buttons"
            value={formik.values.visitId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.visitId && formik.errors.visitId ? (
            <span className="error">{formik.errors.visitId}</span>
          ) : null}
        </div>
      </div>
    </form>
  );
}

export default Form;
