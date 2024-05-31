import React from "react";
import { Button, Layout, Menu, theme, Breadcrumb } from "antd";
import MiddlePanel from "../MiddlePanel";
import "./style.css";
const { Header, Sider, Content } = Layout;
const MiddleScreen = () => {
  return (
    <div>
      <Content style={{ padding: "0px  0px 0px 47px " }}>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <MiddlePanel />
        </div>
      </Content>
    </div>
  );
};

export default MiddleScreen;
