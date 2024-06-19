import { createAsyncThunk } from "@reduxjs/toolkit";
import chargesServices from "./charges.services";
import toast from "react-hot-toast";

export const getClaimsCharges = createAsyncThunk(
  "claims/getClaimsCharges",
  async (data) => {
    try {
      const res = await chargesServices.getClaimChargesApi(data);
      return res.data;
    } catch (error) {
      // toast.error("Faild to get charges please try again");
      console.log(error);
    }
  }
);
export const addNewCharges = createAsyncThunk(
  "claims/addNewCharges",
  async (data) => {
    try {
      const res = await chargesServices.addChargesApi(data);
      return res.data;
    } catch (error) {
      // toast.error("Faild to add charges please try again");
      console.log(error);
    }
  }
);
export const updateCharges = createAsyncThunk(
  "claims/updateCharges",
  async (data) => {
    try {
      const res = await chargesServices.updateChargesApi(data);
      return res.data;
    } catch (error) {
      // toast.error("Faild to update charges please try again");
      console.log(error);
    }
  }
);
export const deleteCharges = createAsyncThunk(
  "claims/deleteCharges",
  async (data) => {
    try {
      const res = await chargesServices.deleteChargesApi(data);
      return res.data;
    } catch (error) {
      toast.error("Faild to delete charges please try again");
      console.log(error);
    }
  }
);
export const searchCptCode = createAsyncThunk(
  "claims/searchCptCode",
  async (data) => {
    try {
      const res = await chargesServices.searchCptCodeApi(data);
      return res.data;
    } catch (error) {
      toast.error("Faild , please try again");
      console.log(error);
    }
  }
);
