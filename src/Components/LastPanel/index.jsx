import React from "react";
import { Tabs } from "antd";
import "./style.css";
import BasicDetailTab from "./BasicDetailTab";
import Notes from "./Notes";
import Files from "./Files";

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
      <div>
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
const LastPanel = () => <Tabs size="small" type="card" items={items} />;
export default LastPanel;
