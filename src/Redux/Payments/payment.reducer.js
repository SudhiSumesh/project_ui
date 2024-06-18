import { createSlice } from "@reduxjs/toolkit";
import { getPaymentSummary, getLedgerData } from "./payments.actions";

const INITIAL_STATE = {
  paymentSummaryRes: {},
  ledgerDataRes: {},
};

const PaymentSlice = createSlice({
  name: "payment",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getPaymentSummary.fulfilled, (state, action) => {
      state.paymentSummaryRes = action.payload;
    });
    builder.addCase(getLedgerData.fulfilled, (state, action) => {
      state.ledgerDataRes = action.payload;
    });
  },
});

const { reducer } = PaymentSlice;
export default reducer;
