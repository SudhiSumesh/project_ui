import { createSlice } from "@reduxjs/toolkit";
import {
  createNewClaim,
  deleteClaim,
  editClaim,
  getClaimsData,
} from "./claim.actions";

const INITIAL_STATE = {
  claimData: {},
  claimDeleteResponse: null,
  claimCreateResponse: null,
  claimUpdateResponse: null,
  selectedClaimRecord: null,
};

const ClaimSlice = createSlice({
  name: "claims",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimsData.fulfilled, (state, action) => {
      state.claimData = action.payload;
    });
    builder.addCase(deleteClaim.fulfilled, (state, action) => {
      state.claimDeleteResponse = action.payload;
    });
    builder.addCase(createNewClaim.fulfilled, (state, action) => {
      state.claimCreateResponse = action.payload;
    });
    builder.addCase(editClaim.fulfilled, (state, action) => {
      state.claimUpdateResponse = action.payload;
    });
  },
  reducers: {
    clearClaimEditResponse(state, action) {
      state.claimUpdateResponse = action.payload || null;
    },
    clearClaimCreateResponse(state, action) {
      state.claimCreateResponse = action.payload || null;
    },
    clearClaimDeleteResponse(state, action) {
      state.claimDeleteResponse = action.payload || null;
    },
    setSelectedClaimRecord(state, action) {
      state.selectedClaimRecord = action.payload;
    },
  },
});

const { reducer } = ClaimSlice;
export const { clearClaimEditResponse, setSelectedClaimRecord ,clearClaimCreateResponse,clearClaimDeleteResponse} =
  ClaimSlice.actions;
export default reducer;
