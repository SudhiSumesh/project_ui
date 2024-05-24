import React from "react";

import Loader from "./Components/loader";
import Header from "Components/Header";

function App() {
  let pathName = window.location.href.split("/");
  return (
    <div className="app__mainContainer">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}

        {/* <Route
          path="/login"
          name="login"
          render={(props) => <Login {...props} />}
        /> */}
    </div>
  );
}

export default App;
