import React from "react";
import { Tabs } from "antd";
import "./style.css";
import Charges from "./Charges";
import Payments from "./Payments";
import Charts from "./Charts";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",

    label: (
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "20px",
        }}
      >
        Charges
      </div>
    ),
    children: <Charges />,
  },
  {
    key: "2",
    title: "Payments",
    label: (
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "20px",
        }}
      >
        Payments
      </div>
    ),
    children: <Payments />,
  },
  {
    key: "3",
    title: "Charts",
    label: (
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "20px",
        }}
      >
        Charts
      </div>
    ),
    children: <Charts />,
  },
];

const MiddleScreenTabs = () => {
  return <Tabs size="small" onChange={onChange} type="card" items={items} />;
};
export default MiddleScreenTabs;
