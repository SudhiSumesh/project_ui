import React, { useState } from "react";
import { Button, Descriptions, Input, Table } from "antd";
import "./style.css";

function PatientClaims() {
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(false);
  const [values, setValues] = useState({
    firstName: "Jenny",
    middleName: "Ann",
    lastName: "Andrews",
    dob: "10/09/98",
    age: "25",
    gender: "Female",
    addressLine: "123 Privet drive",
    city: "Dallas",
    state: "TX",
    zip: "35678",
    phone: "(205) 356 - 7677",
  });

  const expandedItems = [
    { key: "1", value: "Jenny Andrews" }, // Full name
    { key: "2", value: "10/10/1990" }, // DOB
    { key: "3", value: "11403" }, // Account No
    { key: "15", value: "Venkata Aligeti MD" }, // Provider
    { key: "16", value: "$75.45" }, // Patient Balance
    { key: "17", value: "$256.54" }, // Insurance Balance
  ];

  const collapsedItems = [
    { key: "1", value: "Jenny Andrews" }, // Full name
    { key: "2", value: "10/10/1990" }, // DOB
    { key: "3", value: "11403" }, // Account No
    { key: "15", value: "Venkata Aligeti MD" }, // Provider
    { key: "16", value: "$75.45" }, // Patient Balance
    { key: "17", value: "$256.54" },
    { key: "12", value: "jenny@gmail.com" }, // Email
    { key: "13", value: "11403" }, // Account No
    { key: "14", value: "BSW Frisco" }, // Insurance Balance
  ];

  const columns = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      fixed: "left",
    },
    {
      title: "Column 2",
      dataIndex: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York Park",
    },
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York Park",
    },
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York Park",
    },
  ];

  return (
    <div>
      <div
        className="p-md"
        style={{
          border: "1px solid #D7E0E9",
          borderRadius: "10px",
          backgroundColor: "#ffff",
        }}
      >
        <div
          className="desc-buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#139696",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <div className="semibold" style={{ paddingBottom: "24px" }}>
            11/18/13
          </div>
          <div className="semibold" style={{ paddingBottom: "24px" }}>
            Closed
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              type="primary"
              ghost
              size="small"
              onClick={() => setExpand(!expand)}
            >
              {expand ? "Collapse" : "Expand"}
            </Button>
            <Button type="primary" ghost size="small">
              Edit
            </Button>
          </div>
        </div>

        <Descriptions layout="vertical">
          {expand
            ? expandedItems.map((item) => (
                <Descriptions.Item key={item.key}>
                  <div
                    className={edit ? "semibold edit_input" : "semibold"}
                    style={{ color: "#4F566B" }}
                  >
                    {item.value}
                  </div>
                </Descriptions.Item>
              ))
            : collapsedItems.map((item) => (
                <Descriptions.Item key={item.key}>
                  <div
                    className="semibold"
                    style={{ color: "#4F566B", fontSize: "14px" }}
                  >
                    {item.value}
                  </div>
                </Descriptions.Item>
              ))}
        </Descriptions>

        {expand && (
          <div>
            <Table
              className="custom-table"
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default PatientClaims;
