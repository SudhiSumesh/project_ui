import { createAsyncThunk } from "@reduxjs/toolkit";
import claimServices from "./claim.services";
import toast from "react-hot-toast";

export const getClaimsData = createAsyncThunk(
  "claims/getClaimsData ",
  async (data) => {
    try {
      const res = await claimServices.getClaimsData(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createNewClaim = createAsyncThunk(
  "claims/createNewClaim",
  async (data) => {
    try {
      const res = await claimServices.createNewClaimsApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const editClaim = createAsyncThunk("claims/editClaim", async (data) => {
  try {
    const res = await claimServices.editClaimApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteClaim = createAsyncThunk(
  "claims/deleteClaim",
  async (data) => {
    try {
      const res = await claimServices.deleteClaimApi(data);
      return res.data;
    } catch (error) {
      toast.error(
        error.response.data.error
          ? error.response.data.error
          : "Faild to delete claim please try again"
      );
    }
  }
);
export const patientSearch = createAsyncThunk(
  "claims/patientSearch",
  async (data) => {
    try {
      const res = await claimServices.SearchPatientApi(data);
      return res.data;
    } catch (error) {
      toast.error(
        error.response.data.error
          ? error.response.data.error
          : "Faild to search  patient please try again"
      );
    }
  }
);
