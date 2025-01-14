import React, { useState } from "react";
import { Button, Descriptions, Input, Table } from "antd";
import "./style.css";

function InsuranceTab() {
  const [edit, setEdit] = useState(false);

  const columns = [
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      fixed: "left",
    },
    {
      title: "Policy#",
      width: 100,
      dataIndex: "age",
    },
    {
      title: "Group#",
      dataIndex: "address",
      fixed: "left",
    },
    {
      title: "Holder",
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
      key: "2",
      name: "John Brown",
      age: 32,
      address: "New York Park",
    },
    {
      key: "3",
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
            fontWeight: "400",
          }}
        >
          <div
            className="semibold"
            style={{
              paddingBottom: "24px",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Insurance
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              type="primary"
              ghost
              style={{ fontSize: "16px" }}
              size="small"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </Button>
          </div>
        </div>

        <Table
          className="custom-table"
          dataSource={data}
          columns={columns}
          pagination={false}
          // bordered={false}
          size="inherit"
          //   style={{ minWidth: 650 }}
        />
      </div>
    </div>
  );
}
export default InsuranceTab;
