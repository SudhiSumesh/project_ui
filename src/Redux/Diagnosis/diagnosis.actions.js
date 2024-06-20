import { createAsyncThunk } from "@reduxjs/toolkit";
import diagnosisServices from "./diagnosis.services";

export const getClaimsDiagnosis = createAsyncThunk(
  "claims/getClaimsDiagnosis ",
  async (data) => {
    try {
      const res = await diagnosisServices.getDiagnosisData(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const editClaimsDiagnosis = createAsyncThunk(
  "claims/editClaimsDiagnosis ",
  async (data) => {
    try {
      const res = await diagnosisServices.EditDiagnosis(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const icdSearch = createAsyncThunk("claims/icdSearch ", async (data) => {
  try {
    const res = await diagnosisServices.getIcdeCode(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
