import { createSlice } from "@reduxjs/toolkit";
import { editClaimsDiagnosis, getClaimsDiagnosis } from "./diagnosis.actions";

const INITIAL_STATE = {
  diagnosisData: {},
  editDiagnosisRes: null,
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
  },
});

const { reducer } = DiagnosisSlice;

export default reducer;
