import { createSlice } from "@reduxjs/toolkit";
import {
  addNewCharges,
  deleteCharges,
  getClaimsCharges,
  searchCptCode,
  updateCharges,
} from "./charges.actions";

const INITIAL_STATE = {
  ChargesDataRes: {},
  deleteChargeRes: null,
  updateChargeRes: null,
  addChargesRes: null,
  cptCodes: {},
};

const chargesSlice = createSlice({
  name: "charges",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimsCharges.fulfilled, (state, action) => {
      state.ChargesDataRes = action.payload;
    });
    builder.addCase(addNewCharges.fulfilled, (state, action) => {
      state.addChargesRes = action.payload;
    });
    builder.addCase(updateCharges.fulfilled, (state, action) => {
      state.updateChargeRes = action.payload;
    });
    builder.addCase(deleteCharges.fulfilled, (state, action) => {
      state.deleteChargeRes = action.payload;
    });
    builder.addCase(searchCptCode.fulfilled, (state, action) => {
      state.cptCodes = action.payload;
    });
  },
});

const { reducer } = chargesSlice;

export default reducer;
