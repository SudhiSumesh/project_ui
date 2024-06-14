import React, { useState } from "react";
import { Button, ConfigProvider, Layout, Modal, Table, Input } from "antd";
import MiddleScreenTabs from "./MiddleScreenTabs";
import AddIcon from "@mui/icons-material/Add";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import Edit from "@mui/icons-material/Edit";
import "./style.css";
const { Content } = Layout;

const MiddleScreen = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const closeAdd = () => {
    setOpenAdd(false);
  };

  const columns = [
    {
      title: "CPT *",
      dataIndex: "cpt",
      key: "cpt",
      render: (text) => (
        <div>
          <div style={{ borderBottom: "1px solid #8792A2 " }}>
            {text} <Edit fontSize="inherit"></Edit> X
          </div>
          {/* <div className="small-font"> Laproscopic cholecystectomy</div> */}
        </div>
      ),
    },
    {
      title: "No *",
      dataIndex: "no",
      key: "no",
      render: (text) => (
        <div style={{ borderBottom: "1px solid #8792A2 " }}>{text}</div>
      ),
    },
    {
      title: "Fee *",
      dataIndex: "fee",
      key: "fee",
      render: (text) => (
        <div style={{ borderBottom: "1px solid #8792A2 " }}>{text}</div>
      ),
    },
    {
      title: "POS",
      dataIndex: "pos",
      key: "pos",
      render: (text) => (
        <div style={{ borderBottom: "1px solid #8792A2 " }}>{text}</div>
      ),
    },
    {
      title: "M1",
      dataIndex: "m1",
      key: "m1",
      render: (text) => (
        <div style={{ borderBottom: "1px solid #8792A2 " }}>{text}</div>
      ),
    },
    {
      title: "M2",
      dataIndex: "m2",
      key: "m2",
      render: (text) => (
        <div style={{ borderBottom: "1px solid #8792A2 " }}>{text}</div>
      ),
    },
    {
      title: "1",
      dataIndex: "one",
      key: "one",
    },
    {
      title: "2",
      dataIndex: "two",
      key: "two",
    },
    {
      title: "3",
      dataIndex: "three",
      key: "three",
    },
    {
      title: "4",
      dataIndex: "four",
      key: "four",
    },
  ];

  const data = [
    {
      key: "1",
      cpt: "93421",
      no: "1",
      fee: "$762",
      pos: "22",
      m1: "10",
      m2: "X",
      one: <input type="checkbox"></input>,
      two: <input type="checkbox"></input>,
      three: <input type="checkbox"></input>,
      four: <input type="checkbox"></input>,
    },
    {
      key: "2",
      cpt: "99385",
      no: "1",
      fee: "$762",
      pos: "22",
      m1: "10",
      m2: "X",
      one: <input type="checkbox"></input>,
      two: <input type="checkbox"></input>,
      three: <input type="checkbox"></input>,
      four: <input type="checkbox"></input>,
    },
    {
      key: "3",
      cpt: "99215",
      no: "1",
      fee: "$200",
      pos: "22",
      m1: "X",
      m2: "",
      one: <input type="checkbox"></input>,
      two: <input type="checkbox"></input>,
      three: <input type="checkbox"></input>,
      four: <input type="checkbox"></input>,
    },
  ];

  return (
    <div >
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
              <div className="heading-text">Charges</div>
              <div className="modal-btns">
                <Button size="" ghost onClick={() => closeAdd()}>
                  Cancel
                </Button>
                <Button size="">Save</Button>
              </div>
            </div>
            <div className="modal-controls">
              <div className="modal-controll-btns-left">
                <Button
                  icon={
                    <>
                      <PlusOutlined />
                    </>
                  }
                  ghost
                 
                >
                  E11.51
                </Button>
                <Button
                 
                  icon={<PlusOutlined />}
                  ghost
                >
                  DX2
                </Button>
                <Button
                 
                  icon={<PlusOutlined />}
                  ghost
                >
                  DX3
                </Button>
                <Button
                 
                  icon={<PlusOutlined />}
                  ghost
                >
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
            <div className="modal-table-container">
              <Table columns={columns} dataSource={data} pagination={false} />
            </div>
          </div>
        </ConfigProvider>
      </Modal>
      <Content style={{ padding: "0px 0px 0px 47px " }}>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          <MiddleScreenTabs />
          <Button
            className="add-btn"
            type="primary"
            shape="circle"
            size="medium"
            onClick={() => handleOpenAdd()}
            icon={<AddIcon />}
          />
        </div>
      </Content>
    </div>
  );
};

export default MiddleScreen;
