import { createSlice } from "@reduxjs/toolkit";
import { clickLogin } from "./login.actions";

const INITIAL_STATE = {
  Status: false,
  login: false,
  loginResponse: {},
  patientTicker: {},
  userdata: null,
  logout: null,
};
const LoginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(clickLogin.fulfilled, (state, action) => {
      state.loginResponse = action.payload;
      state.login = true;
    });
  },
  reducers: {
    LoginResponse(state, action) {
      state.loginResponse = action.payload;
    },

    logout: (state) => {
      localStorage.clear();
      localStorage.removeItem("access_token");
      localStorage.removeItem("selectedClaimRecord");
      state.isAuthenticated = false;
      state.user = null;
      // Optionally, redirect to login page

      window.location.href = "/login";
    },
  },
});
export const { LoginResponse, logout } = LoginSlice.actions;
const { reducer } = LoginSlice;
export default reducer;
