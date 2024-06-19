import { createAsyncThunk } from "@reduxjs/toolkit";
import loginServices from "./login.services";
import toast, { Toaster } from "react-hot-toast";

export const clickLogin = createAsyncThunk(
  "user/login",
  async (credentials) => {
    try {
      const res = await loginServices.login(credentials);
      // console.log(res.data, 'login actions')

      return res.data;
    } catch (error) {
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong please try again");
        console.log(error);
      }
    }
  }
);
