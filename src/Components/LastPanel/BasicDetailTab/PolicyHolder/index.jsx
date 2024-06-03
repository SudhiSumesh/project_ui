import React, { useState } from "react";
import { Button, Table } from "antd";
import EditIcon from "@mui/icons-material/Edit";

import "./style.css";

function PolicyHolder() {
  const [edit, setEdit] = useState(false);

  const columns = [
    {
      title: "#",
      width: 50,
      dataIndex: "key",
      fixed: "left",
    },
    {
      title: "Insurance",
      width: 150,
      dataIndex: "insurance",
    },
    {
      title: "Policy#",
      dataIndex: "policy",
      width: 100,
      fixed: "left",
    },
    {
      title: "Group#",
      dataIndex: "group",
      width: 100,
    },
    {
      width: 50,
      title: "Action",
      render: () => (
        <span style={{ color: "#A3ACB9", cursor: "pointer" }}>
          <EditIcon fontSize="small" />
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      insurance: "Medicare of TX Regular inurance-Primary",
      policy: "087122-12",
      group: "TR54590",
    },
    {
      key: "2",
      insurance: "Medicare of TX Regular inurance-Primary",
      policy: "087122-12",
      group: "TR54590",
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
            Policy Holder
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
          className="policy-holder-custom-table"
          dataSource={data}
          columns={columns}
          pagination={false}
          size="small"
          //   style={{ minWidth: 650 }}
        />
      </div>
    </div>
  );
}
export default PolicyHolder;
