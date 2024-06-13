import React, { useState } from "react";
import { Button, Descriptions, Input, Table } from "antd";
import "./style.css";

function PatientPayments() {
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(false);

  const columns = [
    {
      title: "DOS",
      // width: 100,
      dataIndex: "dos",
      fixed: "center",
    },
    {
      title: "CPT",
      width: 300,
      dataIndex: "cpt",
    },
    {
      title: "Amound",
      dataIndex: "amount",
      fixed: "center",
    },
  ];

  const data = [
    {
      key: "1",
      dos: "11/18/23",
      cpt: "99213",
      amount: "$200",
    },
    {
      key: "2",
      dos: "10/18/23",
      amount: "$100",
      cpt: "99232",
    },
  ];

  return (
    <div>
      {/* <Descriptions> </Descriptions> */}
      <div
        // className="p-md"
        style={{
          border: "1px solid #D7E0E9",
          borderRadius: "10px",
          backgroundColor: "#ffff",
          paddingTop: "1rem",
        }}
      >
        <div
          className="desc-buttons"
          style={{
            paddingInline: ".5rem",
            display: "flex",
            justifyContent: "space-between",
            color: "#139696",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <div className="semibold" style={{ paddingBottom: "24px" }}>
            99215
          </div>

          <div
            style={{ display: "flex", gap: "10px", marginInlineEnd: "10px" }}
          >
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
        <Descriptions></Descriptions>
        <div className="flex-space-between " style={{ padding: "1rem" }}>
          <div className={"semibold"} style={{ color: "#4F566B" }}>
            Billed: $368
          </div>
          <div className={"semibold"} style={{ color: "#4F566B" }}>
            Adjusted :$250
          </div>
          <div className={"semibold"} style={{ color: "#4F566B" }}>
            Paid :$125
          </div>
          <div className={"semibold"} style={{ color: "#4F566B" }}>
            Bal :$25
          </div>
        </div>

        {expand && (
          <div>
            <Table
              className="custom-table-payment"
              columns={columns}
              dataSource={data}
              pagination={false}
              // bordered
              bordered={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default PatientPayments;
