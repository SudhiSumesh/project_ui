import { createSlice } from "@reduxjs/toolkit";
import { getClaimFiles, addClaimFile, deleteClaimFile } from "./files.actions";

const INITIAL_STATE = {
  filesDataRes: {},
  addFileRes: null,
  deleteFileRes: null,
};

const FileSlice = createSlice({
  name: "files",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimFiles.fulfilled, (state, action) => {
      state.filesDataRes = action.payload;
    });
    builder.addCase(addClaimFile.fulfilled, (state, action) => {
      state.addFileRes = action.payload;
    });
    builder.addCase(deleteClaimFile.fulfilled, (state, action) => {
      state.deleteFileRes = action.payload;
    });
  },
});
const { reducer } = FileSlice;
export default reducer;
