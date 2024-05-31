import React, { useState } from "react";
import { Button, Layout, Menu, theme, Dropdown, Space, Breadcrumb } from "antd";
import SideBar from "../../Components/Sidebar";
import MiddleScreen from "../../Components/MiddleScreen";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import "./style.css";
import LastPanel from "../../Components/LastPanel";
import MainHeader from "../../Components/MainHeader";
const { Header, Sider, Content } = Layout;
const ClaimsDetail = () => {
  return (
    <>
      <MainHeader />
      <Layout>
        <SideBar />
        <div className="tab-container">
          <div className="tab-header">
            <Header>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: "px 0px",
                  alignItems: "center",
                  justifyContent: "",
                }}
              >
                <Button
                  type="primary"
                  size="small"
                  ghost
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: ".4rem",
                  }}
                >
                  <KeyboardReturnIcon
                    fontSize="small"
                    style={{ marginRight: 2, fontSize: 18 }}
                  />
                  Back
                </Button>
                <Breadcrumb
                  className="semibold subheading-small"
                  items={[
                    {
                      title: (
                        <p style={{ color: "black", marginLeft: "1rem" }}>
                   
                          Jenny Andrews  10/10/1990
                        </p>
                      ),
                    },
                    {
                      title: (
                        <p style={{ color: "black", marginLeft: "1rem" }}>
                          <span
                            style={{ marginRight: "5px", color: "#139696" }}
                          >
                            Paid
                          </span>
                          $200
                        </p>
                      ),
                    },
                    {
                      title: (
                        <p style={{ color: "black", marginLeft: "1rem" }}>
                          <span
                            style={{ marginRight: "5px", color: "#139696" }}
                          >
                            Ins Bal
                          </span>
                          $0.00
                        </p>
                      ),
                    },
                    {
                      title: (
                        <p style={{ color: "black", marginLeft: "1rem" }}>
                          <span
                            style={{ marginRight: "5px", color: "#139696" }}
                          >
                            Pat Bal
                          </span>
                          $200
                        </p>
                      ),
                    },
                  ]}
                  separator="   "
                />
              </div>
            </Header>
          </div>

          <div className="tabs">
            <MiddleScreen />
            <LastPanel />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default ClaimsDetail;
