import React from "react";
import { Tabs } from "antd";
import "./style.css";
import PatientInfo from "./BasicDetailTab/PatientInfo";
import InsuranceTab from "./BasicDetailTab/InsuranceTab";
import BasicDetailTab from "./BasicDetailTab";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    title: "Basic",
  },
  {
    key: "2",
    title: "Notes",
  },
  {
    key: "3",
    title: "Files",
  },
  {
    key: "4",
    title: "Claims",
  },
  {
    key: "5",
    title: "Payments",
  },
];

const LastPanel = () => (
  <Tabs
    size="small"
    onChange={onChange}
    type="card"
    items={items.map((elem) => ({
      label: (
        <div
          style={{
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "20px",
          }}
        >
          {elem.title}
        </div>
      ),
      key: elem.key,
      children: (
        <div
          className="tab-content scrollbarY--custom"
          key={`tab-content-${elem.key}`}
        >
          <PatientInfo />
          <InsuranceTab />
        </div>
      ),
    }))}
  />
);

export default LastPanel;
