import React from "react";
import ClaimsList from "./Containers/ClaimsList";
import "./GlobalStyles.css";
import './index.css'
import { ConfigProvider } from "antd";

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
        {/* <Toaster position="top-right" reverseOrder={false} /> */}

        {/* <Route
          path="/login"
          name="login"
          render={(props) => <Login {...props} />}
        /> */}
        <ClaimsList />
      </div>
    </ConfigProvider>
  );
}

export default App;
