import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader";

function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (token) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [token]);
  return  ok ? <Outlet /> : <Loader />;
}

export default PrivateRoute;
