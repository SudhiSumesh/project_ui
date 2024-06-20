import { createSlice } from "@reduxjs/toolkit";
import {
  editClaimsDiagnosis,
  getClaimsDiagnosis,
  icdSearch,
} from "./diagnosis.actions";

const INITIAL_STATE = {
  diagnosisData: {},
  editDiagnosisRes: null,
  icdSearchData: {},
};

const DiagnosisSlice = createSlice({
  name: "diagnosis",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimsDiagnosis.fulfilled, (state, action) => {
      state.diagnosisData = action.payload;
    });
    builder.addCase(editClaimsDiagnosis.fulfilled, (state, action) => {
      state.editDiagnosisRes = action.payload;
    });
    builder.addCase(icdSearch.fulfilled, (state, action) => {
      state.icdSearchData = action.payload;
    });
  },
});

const { reducer } = DiagnosisSlice;

export default reducer;
