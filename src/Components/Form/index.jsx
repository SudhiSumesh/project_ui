import React from 'react'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import './style.css'
import { Button, DatePicker, Input } from 'antd';
function Form({closeAdd}) {
  return (
    <>
      <form action="">
        <div
          style={{
            display: "flex",
            gap: "18px",
            paddingTop: "16px",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: "1rem",
          }}
          // className="add-claim-form"
        >
          <span className="model-header-title">Add New Claim</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button size={"medium"} onClick={() => closeAdd()}>
              Cancel
            </Button>
            <Button size={"medium"} type="primary">
              Save
            </Button>
          </div>
        </div>
        <div className="modal-grid">
          <Input
            placeholder="Patient Name"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="MRN"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Provider Name"
            size="large"
            className="modal-grid-buttons"
          />
          <DatePicker
            // onChange={onChange}
            placeholder="DOS"
            size="large"
            className="custom-datepicker"
            // suffixIcon={<CalendarMonthIcon />}
          />
          <Input
            placeholder="Payor Name"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Facility Name"
            size="large"
            // suffix={<KeyboardArrowDownIcon />}
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Service"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Charges"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Ins Bal"
            // suffix={<KeyboardArrowDownIcon />}
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Pat Bal "
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Claim Status"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Service Id"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Visit Id"
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Patient Id"
            // suffix={<KeyboardArrowDownIcon />}
            size="large"
            className="modal-grid-buttons"
          />
          <Input
            placeholder="Provider Id"
            // suffix={<KeyboardArrowDownIcon />}
            size="large"
            className="modal-grid-buttons"
          />
        </div>
      </form>
    </>
  );
}

export default Form