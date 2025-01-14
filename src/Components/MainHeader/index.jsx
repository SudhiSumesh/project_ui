import React from "react";
import NavBar from "../NavBar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";
const MainHeader = () => {
  return (
    <div
      className="main-header-container"
      style={{ height: "75px", borderBottom: "1px solid #C1C9D2" }}
    >
      <div className="flex">
        <NavBar />
      </div>
      <div className="header-right-sec">
        <NotificationsNoneIcon style={{ color: "#999999" }} />

        <div className="company-name">
          Trillium.
          <span style={{ color: "#4F4F4F" }}>health</span>
        </div>
        <div className="profile-settings">
          <MenuIcon /> |<strong>PA</strong>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
