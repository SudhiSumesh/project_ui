import React from "react";
import { Route, Routes } from "react-router-dom";
// import ClaimsList from "./Containers/ClaimsList";
import "./GlobalStyles.css";
import "./index.css";
import { ConfigProvider } from "antd";
import PrivateRoute from "./Routes/PrivateRoute";
// import LoginForm from "./Containers/Login";
const Login = React.lazy(() => import("./Containers/Login"));
const ClaimsList = React.lazy(() => import("./Containers/ClaimsList"));
const ClaimsDetail=React.lazy(()=>import('./Containers/ClaimsDetail'))
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#139696",
          colorLink: "#139696",
          colorInfo: "#139696",
          colorSuccess: "#1ACE7F",
          colorError: "#E15A3C",
          colorWarning: "#FFBF43",
          colorTextBase: "#3C4257",
        },
      }}
    >
      <div className="app__mainContainer">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/claimslist" element={<PrivateRoute />}>
            <Route path="" element={<ClaimsList />} />
            <Route path="claims-details" element={<ClaimsDetail />} />
          </Route>
        </Routes>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
        
        {/* <Route
          path="/login"
          name="login"
          render={(props) => <Login {...props} />}
        /> */}
        {/* <ClaimsList /> */}
      </div>
    </ConfigProvider>
  );
}

export default App;
