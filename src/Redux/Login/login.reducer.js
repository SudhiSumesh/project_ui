import { createSlice } from "@reduxjs/toolkit";
import { clickLogin } from "./login.actions";
import { replace } from "lodash";

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

      // Redirect to the login page
      window.location.href = "/login"; // Redirect using the full URL
      window.history.pushState(null, null, "/login"); // Update the URL in the browser

      //Reload the page after logout
      window.location.reload();
    },
  },
});
export const { LoginResponse, logout } = LoginSlice.actions;
const { reducer } = LoginSlice;
export default reducer;
