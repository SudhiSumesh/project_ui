import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import diagnosisServices from "./diagnosis.services";

export const getClaimsDiagnosis = createAsyncThunk(
  "claims/getClaimsDiagnosis ",
  async (data) => {
    try {
      const res = await diagnosisServices.getDiagnosisData(data);
      return res.data;
    } catch (error) {
    //   toast.error("Faild to load  diagnosis please try again");
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
      // toast.error("Faild to edit  diagnosis please try again");
      console.log(error);
    }
  }
);
export const icdSearch = createAsyncThunk("claims/icdSearch ", async (data) => {
  try {
    const res = await diagnosisServices.getIcdeCode(data);
    return res.data;
  } catch (error) {
    // toast.error("Faild to get  icdCode please try again");
    console.log(error);
  }
});
