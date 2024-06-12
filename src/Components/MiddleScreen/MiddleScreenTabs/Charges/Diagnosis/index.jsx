import React, { useState } from "react";
import { Button, ConfigProvider, Descriptions, Input, Modal, Table } from "antd";
import "./style.css";

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
function Diagnosis() {
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const closeAdd = () => {
    setOpenAdd(false);
  };
  const collapsedItems = [
    { key: "1", value: `DX1: E11.51` },
    { key: "2", value: "DX2: I10" },
    { key: "3", value: "DX3:E23.2" },
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
      <Modal
        open={openAdd}
        onOk={() => closeAdd()}
        onCancel={() => closeAdd()}
        closable={false}
        width={700}
        footer={null}
        className="custom-modal"
      >
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultColor: "white",
                defaultBg: "#109590",
                defaultGhostColor: "#109590",
                defaultGhostBorderColor: "",
              },
              Table: {
                headerBg: "#E0F0F2",
              },
            },
          }}
        >
          <div className="add-charges-modal">
            <div className="modal-header">
              <div className="heading-text">Diagnosis</div>
              <div className="modal-btns">
                <Button size="" ghost onClick={() => closeAdd()}>
                  Cancel
                </Button>
                <Button size="">Save</Button>
              </div>
            </div>
            <div className="modal-controls">
              <div className="modal-controll-btns-left">
                <Input
             
                  ghost
                >
                  {/* E11.51 */}
                </Input>
                <Button icon={<PlusOutlined />} ghost>
                  DX2
                </Button>
                <Button icon={<PlusOutlined />} ghost>
                  DX3
                </Button>
                <Button icon={<PlusOutlined />} ghost>
                  DX4
                </Button>
              </div>
              {/* <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              style={{ width: 200 }}
            /> */}
              <div>
                <Button shape="" ghost icon={<SearchOutlined />} />
                <Button shape="" ghost icon={<PlusOutlined />} />
              </div>
            </div>
         
          </div>
        </ConfigProvider>
      </Modal>
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
            Diagnosis
          </div>

          <Button
            className="semibold"
            type="primary"
            ghost
            size="small"
            onClick={() => handleOpenAdd()}
          >
            Edit
          </Button>
        </div>

        <Descriptions layout="vertical">
          {collapsedItems.map((item) => (
            <Descriptions.Item key={item.key}>
              <div
                className="semibold"
                style={{ color: "#4F566B", fontSize: "16px" }}
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
export default Diagnosis;
