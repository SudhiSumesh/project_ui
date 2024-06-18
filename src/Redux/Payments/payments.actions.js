import { createAsyncThunk } from "@reduxjs/toolkit";
import paymentsServices from "./payments.services";



export const getPaymentSummary = createAsyncThunk(
  "claims/getPaymentSummary",
  async (data) => {
    try {
      const res = await paymentsServices.paymentSummaryApi(data);
      return res.data;
    } catch (error) {
     
      console.log(error);
    }
  }
);
export const getLedgerData = createAsyncThunk(
  "claims/getLedgerData",
  async (data) => {
    try {
      const res = await paymentsServices.ledgerApi(data);
      return res.data;
    } catch (error) {
     
      console.log(error);
    }
  }
);