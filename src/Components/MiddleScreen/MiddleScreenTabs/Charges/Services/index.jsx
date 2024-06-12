import { Button,  ConfigProvider,  Modal,  Table } from "antd";
import React, { useState } from "react";

function Services() {
      const [openAdd, setOpenAdd] = useState(false);

      const handleOpenAdd = () => {
        setOpenAdd(true);
      };

      const closeAdd = () => {
        setOpenAdd(false);
      };

      const editColumns = [
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

      const editData = [
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
  const columns = [
    {
      title: "CPT",
      //   width: 100,
      dataIndex: "cpt",
      fixed: "left",
    },
    {
      title: "Fee", 
      dataIndex: "fee",
    },
    {
      title: "A",
      dataIndex: "A",
      fixed: "left",
    },
    {
      title: "POS",
      dataIndex: "pos",
    },
    {
      title: "Amt",
      dataIndex: "amt",
    },
    {
      title: "DX1",
      dataIndex: "dx1",
    },
    {
      title: "DX2",
      dataIndex: "dx2",
    },
    {
      title: "DX3",
      dataIndex:"dx3",
    },
    {
      title: "DX4",
      dataIndex: "dx4",
    },
  ];

  const data = [
    {
      key: "1",
      cpt: 95403,
      fee: "$ 32",
      A: 1,
      pos: 11,
      amt: "$ 200",
      dx1: "X",
      dx2: "X",
      dx3: "X",
      dx4: "X",
    },
    {
      key: "2",
      cpt: 95403,
      fee: "$ 32",
      A: 1,
      pos: 11,
      amt: "$ 200",
      dx1: "X",
      dx2: "X",
      dx3: "X",
      dx4: "X",
    },
    {
      key: "3",
      cpt: 95403,
      fee: "$ 32",
      A: 1,
      pos: 11,
      amt: "$ 200",
      dx1: "X",
      dx2: "X",
      dx3: "X",
      dx4: "X",
    },
  ];
  return (
    <>
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
            <div className="modal-table-container">
              <Table columns={columns} dataSource={data} pagination={false} />
            </div>
          </div>
        </ConfigProvider>
      </Modal>
      <div>
        <div
          className=""
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
              alignItems: "center",
              paddingInline: ".8rem",
              paddingBlock: ".6rem",
            }}
          >
            <div className="semibold ">Services</div>

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
          <Table
            className="custom-table"
            columns={columns}
            dataSource={data}
            pagination={false}
            // bordered
          />
        </div>
      </div>
    </>
  );
}

export default Services;
