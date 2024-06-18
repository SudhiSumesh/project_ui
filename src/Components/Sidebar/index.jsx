import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Layout, Dropdown, Space } from "antd";
import "./style.css";
import { useSelector } from "react-redux";
import { setSelectedClaimRecord } from "../../Redux/Claim/claim.reducer";
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4th menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState(false);
  const { Sider } = Layout;
  // const { } = useSelector((state) => state.claim);
  // console.log(JSON.parse(localStorage.getItem("selectedClaimRecord")).key);
  const sideBarContent = (
    <div
      className="sideBarContent "
      style={{
        padding: "10px",
        borderBottom: "1px solid #C1C9D2",
        width: "100%",
      }}
    >
      {/* use ref or something to uniquly identify each element do some changes in the sidebarComponent ,for change bgcolor on selecting each item  */}
      <div
        onClick={() => {
          setSelected(!selected);
        }}
        className={selected ? " selected-bg" : ""}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          border: "1px solid #8792A2",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "10px",
          }}
        >
          <span
            style={{ fontSize: "14px", fontWeight: "700", color: "#8792A2" }}
          >
            {JSON.parse(localStorage.getItem("selectedClaimRecord"))?.patientName || ""} (
            {JSON.parse(localStorage.getItem("selectedClaimRecord"))?.dos || ""})
          </span>
          <a href="#">Edit</a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#8792A2",
          }}
        >
          <span>{JSON.parse(localStorage.getItem("selectedClaimRecord"))?.claimStatus || ""}</span>
          <span>BCBS OF TX</span>
        </div>
      </div>
    </div>
  );

  const menuProps = {
    items,
  };
  return (
    <Sider
      width={!collapsed ? 255 : 40}
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: "white",
        marginLeft: "1.5rem",
        marginTop: "10px",
        // marginBottom: "60px",
        minHeight: "100vh",
        // paddingRight: ".9rem",
        borderRadius: ".3rem",
        display: "flex",
      }}
      className={collapsed ? "collapsedSidebar" : ""}
    >
      <div>
        <div
          className="firstRow-sideBar"
          style={{
            display: "flex",
            height: "4rem",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 10px",
            borderBottom: !collapsed ? "1px solid #C1C9D2" : "none",
          }}
        >
          {!collapsed && (
            <Dropdown menu={menuProps} className="dropdown-menu">
              <Button style={{ display: "flex", alignItems: "center" }}>
                <Space>
                  <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                    Search for results
                  </div>
                  <ExpandMoreIcon />
                </Space>
              </Button>
            </Dropdown>
          )}
          <Button
            type="text"
            icon={<MenuIcon />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#8792A2",
            }}
          />
        </div>
        {/* use ref or something to uniquly identify each element do some changes in the sidebarComponent ,for change bgcolor on selecting each item  */}
        {sideBarContent}
      
      </div>
    </Sider>
  );
};

export default SideBar;
