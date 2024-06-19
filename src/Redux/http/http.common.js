import axios from "axios";
import store from "../../Redux/store";

const httpCommon = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor to include the token dynamically
httpCommon.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add a response interceptor to handle token expiration
httpCommon.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response ,"token expire res http common ");
    if (error.response && error.response.error) {
      // Dispatch logout action if the token is expired or invalid
      store.dispatch({ type: "auth/tokenExpired" });
    }
    return Promise.reject(error);
  }
);

export default httpCommon;
