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
import { useSelector } from "react-redux";
const { Header } = Layout;
const ClaimsDetail = () => {
  const navigate = useNavigate();
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
                  onClick={() => navigate("/claimslist")}
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
                          {
                            JSON.parse(
                              localStorage.getItem("selectedClaimRecord")
                            )?.patientName
                          }{" "}
                          {
                            JSON.parse(
                              localStorage.getItem("selectedClaimRecord")
                            )?.dos
                          }
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
                          $
                          {
                            JSON.parse(
                              localStorage.getItem("selectedClaimRecord")
                            )?.insBal
                          }
                          .00
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
                          $
                          {
                            JSON.parse(
                              localStorage.getItem("selectedClaimRecord")
                            )?.patBal
                          }
                          .00
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
