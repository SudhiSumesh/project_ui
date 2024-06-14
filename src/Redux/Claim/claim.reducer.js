import { createSlice } from "@reduxjs/toolkit";
import { deleteClaim, getClaimsData } from "./claim.actions";

const INITIAL_STATE = {
  claimData: {},
  claimDeleteResponse: null,
};

const ClaimSlice = createSlice({
  name: "claims",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimsData.fulfilled, (state, action) => {
      state.claimData = action.payload;
    });
    builder.addCase(deleteClaim.fulfilled, (state, action) => {
      state.claimDeleteResponse  = action.payload;
    });
  },
});

const { reducer } = ClaimSlice;
export default reducer;
