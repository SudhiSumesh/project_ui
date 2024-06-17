import React, { useState } from "react";
import { Button, Layout, Breadcrumb } from "antd";
import SideBar from "../../Components/Sidebar";
import MiddleScreen from "../../Components/MiddleScreen";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import LastPanel from "../../Components/LastPanel";
import MainHeader from "../../Components/MainHeader";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./style.css";
const { Header,  } = Layout;
const ClaimsDetail = () => {
  const navigate=useNavigate()
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
                    onClick={() => navigate("/claimslist")}
                  />
                  Back
                </Button>
                <Breadcrumb
                  className="semibold subheading-small"
                  items={[
                    {
                      title: (
                        <p style={{ color: "black", marginLeft: "1rem" }}>
                          Jenny Andrews 10/10/1990
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
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
export default ClaimsDetail;
