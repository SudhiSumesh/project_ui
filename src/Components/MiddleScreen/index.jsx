import React, { useState } from "react";
import { Button, Layout, Modal, Table } from "antd";
import MiddleScreenTabs from "./MiddleScreenTabs";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";
const { Header, Sider, Content } = Layout;
const MiddleScreen = () => {
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
            <Table></Table>
          </div>
          <div></div>
        </div>
      </Modal>
      <Content style={{ padding: "0px  0px 0px 47px " }}>
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
