import React, { useState } from "react";
import { Button, Descriptions, Dropdown, Input, Modal, Table, Tabs } from "antd";
import "./style.css";
import PatientClaims from "../PatientClaims";
import AddIcon from "@mui/icons-material/Add";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    title: "Charges",
  },
  {
    key: "2",
    title: "Payments",
  },
  {
    key: "3",
    title: "Charts",
  },
  {
    key: "4",
    title: "Files",
  },
  {
    key: "5",
    title: "Messages",
  },
];

const MiddlePanel = () => {
  const [openAdd, setOpenAdd] = useState(false);


  

  const handleOpenAdd = () => {
    // setFields(defaultFields);
    // setEdit(false);
    setOpenAdd(true);
  };
  const closeAdd = () => {
    setOpenAdd(false);
  };
  return (
    <div>
      {" "}
      <Modal
        // title={"Add "}
        open={openAdd}
        onOk={() => closeAdd()}
        onCancel={() => closeAdd()}
        width={800}
      >
        <div style={{ display: "flex", gap: "18px", paddingTop: "16px" }}>
   <div className="modal-header">
    <div>Charges</div>
    <Button ghost>Cancel</Button>
    <Button>Save</Button>
   </div>
   <div>middle</div>
   <div className="modal-table-container">
    <Table>

    </Table>
   </div>
   <div>

   </div>
        </div>
      </Modal>
      <Tabs
        size="small"
        onChange={onChange}
        type="card"
        items={items.map((elem) => {
          return {
            label: (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "20px",
                }}
              >
                {elem.title}
              </div>
            ),
            key: elem.key,
            children: (
              <div className="tab-content scrollbarY--custom">
                <PatientClaims />
                <PatientClaims />
                <PatientClaims />
                <Button
                  className="add-btn"
                  type="primary"
                  shape="circle"
                  size="medium"
                  onClick={() => handleOpenAdd()}
                  icon={<AddIcon />}
                />
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default MiddlePanel;
