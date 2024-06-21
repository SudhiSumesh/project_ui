import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Layout, Dropdown, Space } from "antd";
import "./style.css";
import SidebarContent from "./Sidebaritem";
import { useDispatch, useSelector } from "react-redux";
import { getClaimsData } from "../../Redux/Claim/claim.actions";
import { statuses } from "../../Helpers/enums";
import { formatDate, lastYear } from "../../Helpers/dateFormater";
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const { claimData } = useSelector((state) => state.claim);
  const { Sider } = Layout;
  const start = JSON.parse(localStorage.getItem("selectedClaimRecord"))?.key;
  useEffect(() => {
    dispatch(
      getClaimsData({
        clinicId: 93422,
        start: start + 1,
        limit: 5,
        providerId: "",
        serviceIds: "",
        facilityIds: "",
        status: "",
        startDate: lastYear(new Date()),
        endDate: formatDate(new Date()),
      })
    );
  }, []);
  const handleSidebarItemClick = (item) => {
    localStorage.setItem("selectedClaimRecord", JSON.stringify(item));
    setSelectedItem(item);
  };
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
        {!collapsed && (
          <>
            {" "}
            <SidebarContent
              patientName={
                JSON.parse(localStorage.getItem("selectedClaimRecord"))
                  ?.patientName
              }
              dos={JSON.parse(localStorage.getItem("selectedClaimRecord"))?.dos}
              claimStatus={
                JSON.parse(localStorage.getItem("selectedClaimRecord"))
                  ?.claimStatus
              }
            />
            {claimData?.result?.providerSummary?.map((item, index) => (
              <SidebarContent
                key={index}
                patientName={item.spatientName}
                claimId={item.claimId}
                claimStatus={
                  item.claimStatus ? statuses[item.claimStatus - 1].name : ""
                }
                facilityName={item.facilityName}
                dos={formatDate(item.sdos)}
                onClick={() => handleSidebarItemClick(item)}
                isSelected={
                  JSON.stringify(item) ===
                  localStorage.getItem("selectedClaimRecord")
                }
              />
            ))}
          </>
        )}
      </div>
    </Sider>
  );
};

export default SideBar;
