import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import notesServices from "./notes.services";

export const getClaimNotes = createAsyncThunk(
  "claims/getClaimNotes",
  async (data) => {
    try {
      const res = await notesServices.getClaimNotes(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addClaimNotes = createAsyncThunk(
  "claims/addClaimNotes",
  async (data) => {
    try {
      const res = await notesServices.AddClaimNotesApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const DeleteNotes = createAsyncThunk(
  "claims/DeleteNotes",
  async (data) => {
    try {
      const res = await notesServices.DeleteClaimNotes(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
