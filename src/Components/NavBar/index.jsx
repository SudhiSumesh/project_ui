import React, { useState } from "react";
import { Tabs } from "antd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentsIcon from "@mui/icons-material/Payments";
import ForumIcon from "@mui/icons-material/Forum";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaidIcon from "@mui/icons-material/Paid";
import ArticleIcon from "@mui/icons-material/Article";
import "./index.css";
function NavBar() {
  const [selectedKey, setSelectedKey] = useState("3");
  const items = [
    {
      key: "1",
      label: (
        <div className="tab-item">
          <CalendarMonthIcon fontSize="large" />
          <div>Calender</div>
        </div>
      ),
      children: "",
    },
    {
      key: "2",
      label: (
        <div className="tab-item">
          <AccountBoxIcon fontSize="large" />
          <div>Accounts</div>
        </div>
      ),
      children: "",
    },
    {
      key: "3",
      label: (
        <div className="tab-item">
          <PaidIcon fontSize="large" />
          <div>Claims</div>
        </div>
      ),
      children: "",
    },
    {
      key: "4",
      label: (
        <div className="tab-item">
          <PaymentsIcon fontSize="large" />
          <div>Payments</div>
        </div>
      ),
      children: "",
    },
    {
      key: "5",
      label: (
        <div className="tab-item">
          <ForumIcon fontSize="large" />
          <div>Messages</div>
        </div>
      ),
      children: "",
    },
    {
      key: "6",
      label: (
        <div className="tab-item">
          <AssessmentIcon fontSize="large" />
          <div>Rounding</div>
        </div>
      ),
      children: "",
    },
    {
      key: "7",
      label: (
        <div className="tab-item">
          <ArticleIcon fontSize="large" />
          <div>Reports</div>
        </div>
      ),
      children: "",
    },
  ];
  return (
    <>
      <Tabs
        className=" custom-tabs"
        activeKey={selectedKey}
        // defaultActiveKey="3"
        items={items}
        size="small"
        // onChange={onChange}
      />
    </>
  );
}

export default NavBar;
