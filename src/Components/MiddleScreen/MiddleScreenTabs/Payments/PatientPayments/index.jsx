import React, { useState } from "react";
import { Button, Descriptions, Input, Table } from "antd";
import "./style.css";

function PatientPayments() {
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(false);

  const expandedItems = [
    { key: "1", value: "Card-36870" }, //
    { key: "2", value: "Paid :$250" },
    { key: "3", value: "Unapplied :$125" }, //
  ];

  const collapsedItems = [
    { key: "1", value: "Card-3687" }, //
    { key: "2", value: "Paid :$250" },
    { key: "3", value: "Unapplied :$125" }, // Account No
  ];

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
            Patient Payment
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
                    style={{
                      color: "#4F566B",
                      fontSize: "14px",
                      // backgroundColor: "blue",
                    }}
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
export default PatientPayments;
