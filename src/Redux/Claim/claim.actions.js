import { createAsyncThunk } from "@reduxjs/toolkit";
import claimServices from "./claim.services";


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