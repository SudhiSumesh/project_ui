import React from "react";
import { Tabs } from "antd";
import "./style.css";
import PatientInfo from "./BasicDetailTab/PatientInfo";
import InsuranceTab from "./BasicDetailTab/InsuranceTab";
import BasicDetailTab from "./BasicDetailTab";
import Notes from "./Notes";
import Files from "./Files";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    title: "Basic",
    label: (
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "20px",
        }}
      >
        Basic
      </div>
    ),
    children: (
      <div
      // className="tab-content scrollbarY--custom"
      // key={`tab-content-${elem.key}`}
      >
        <BasicDetailTab />
      </div>
    ),
  },
  {
    key: "2",
    title: "Notes",
    label: (
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "20px",
        }}
      >
        Notes
      </div>
    ),
    children: <Notes />,
  },
  {
    key: "3",
    title: "Files",
    label: (
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "20px",
        }}
      >
        Files
      </div>
    ),
    children: <Files />,
  },
];

const LastPanel = () => (
  <Tabs size="small" onChange={onChange} type="card" items={items} />
);

export default LastPanel;
