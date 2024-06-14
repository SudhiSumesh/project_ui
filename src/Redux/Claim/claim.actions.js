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
      toast.error("Something went wrong please try again");
      console.log(error);
    }
  }
);

export const deleteClaim = createAsyncThunk(
  "claims/deleteClaim",
  async (data) => {
    try {
      const res = await claimServices.deleteClaimApi(data);
      return res.data;
    } catch (error) {
      toast.error(
        error.response.data.data.message
          ? error.response.data.data.message
          : "Something went wrong please try again"
      );
      console.log(error.response.data.data.message);
    }
  }
);
