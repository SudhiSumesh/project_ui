import { createSlice } from "@reduxjs/toolkit";
import { DeleteNotes, addClaimNotes, getClaimNotes } from "./notes.actions";

const INITIAL_STATE = {
  claimNotesRes: {},
  addNotesRes: null,
  deleteNotesRes: null,
};

const NotesSlice = createSlice({
  name: "notes",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getClaimNotes.fulfilled, (state, action) => {
      state.claimNotesRes = action.payload;
    });
    builder.addCase(addClaimNotes.fulfilled, (state, action) => {
      state.addNotesRes = action.payload;
    });
    builder.addCase(DeleteNotes.fulfilled, (state, action) => {
      state.deleteNotesRes = action.payload;
    });
  },
  reducers: {
    clearAddNotesRes(state, action) {
      state.addNotesRes = action.payload || null;
    },
    clearDeleteNotesRes(state, action) {
      state.deleteNotesRes = action.payload || null;
    },
  },
});
const { reducer } = NotesSlice;
export const {clearAddNotesRes,clearDeleteNotesRes}=NotesSlice.actions
export default reducer;
