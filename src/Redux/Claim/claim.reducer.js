import { createSlice } from "@reduxjs/toolkit";
import { getClaimsData } from "./claim.actions";

const INITIAL_STATE = {
  claimData: {},
};

const ClaimSlice = createSlice({
  name: "claims",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimsData.fulfilled, (state, action) => {
      state.claimData = action.payload;
    });
  },
});

const { reducer } = ClaimSlice;
export default reducer;
