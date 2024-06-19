// import jwt from "jsonwebtoken";
import store from "../Redux/store";

let logoutTimer;

// Function to set logout timer
const setLogoutTimer = () => {
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }

  logoutTimer = setTimeout(() => {
    store.dispatch({ type: "auth/tokenExpired" });
  }, 900000); // 15 minutes in milliseconds 900000
};

// Function to reset logout timer on user activity
export const resetLogoutTimer = () => {
  clearTimeout(logoutTimer);
  setLogoutTimer();
};
// Function to handle token expiration
const handleTokenExpiration = () => {
  console.log("Token expired. Logging out user.");
  store.dispatch({ type: "auth/tokenExpired" });
};

// Function to monitor token expiration
// const monitorTokenExpiration = (token) => {
//   const { exp } = jwt.decode(token);
//   const expirationTime = exp * 1000; // Convert expiration time to milliseconds
//   const currentTime = new Date().getTime();

//   const timeout = expirationTime - currentTime;
//   setTimeout(() => {
//     handleTokenExpiration();
//   }, timeout);
// };

// Function to get token from Keycloak
export const handleLogout = () => {
  // Monitor token expiration
//   monitorTokenExpiration(data.access_token);
  // Set logout timer for 15 minutes
  setLogoutTimer();
};

// Function to initialize session management
export const initializeSessionManagement = (token) => {
//   monitorTokenExpiration(token);
  setLogoutTimer();

  document.addEventListener("mousemove", resetLogoutTimer);
  document.addEventListener("keypress", resetLogoutTimer);
};

export const cleanupSessionManagement = () => {
  clearTimeout(logoutTimer);

  document.removeEventListener("mousemove", resetLogoutTimer);
  document.removeEventListener("keypress", resetLogoutTimer);
};