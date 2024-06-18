import { createAsyncThunk } from "@reduxjs/toolkit";
import filesServices from "./files.services";

export const getClaimFiles = createAsyncThunk(
  "claims/getClaimFiles ",
  async (data) => {
    try {
      const res = await filesServices.getFilesApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addClaimFile = createAsyncThunk(
  "claims/addClaimFile",
  async (data) => {
    try {
      const res = await filesServices.addFile(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteClaimFile = createAsyncThunk(
  "claims/deleteClaimFile ",
  async (data) => {
    try {
      const res = await filesServices.deleteFile(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
