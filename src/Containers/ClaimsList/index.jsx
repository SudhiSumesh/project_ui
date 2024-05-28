import React from "react";
import MainHeader from "../../Components/MainHeader";
import ClaimsTable from "../../Components/ClaimsTable";
import {
  Button,
  DatePicker,
  Input,
  Pagination,
  Popover,
  Select,
  Dropdown,
} from "antd";
import PolylineIcon from "@mui/icons-material/Polyline";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";

function ClaimsList() {
  const { Search } = Input;

  const FilterPopover = (
    <div style={{ display: "flex", gap: "16px" }}>
      <Select
        className="custom-select"
        title="Current Filters"
        placeholder="Current Filters"
        style={{ width: "180px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[
          { value: "83622", label: "Demo Clinic" },
          { value: "93722", label: "Beats Cardiology" },
          { value: "93422", label: "Heart 360 Speciality" },
        ]}
      />
      <DatePicker className="custom-select" format="MM-DD-YYYY" />
      <Select
        className="custom-select"
        placeholder="Clinicians"
        style={{ width: "120px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[
          { value: "83622", label: "Vineeth Joseph" },
          { value: "93722", label: "Chelsea Ann" },
          { value: "93422", label: "Maren Stiles" },
        ]}
      />
      <Select
        className="custom-select"
        placeholder="Locations"
        style={{ width: "120px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[
          { value: "83622", label: "Location 1" },
          { value: "93722", label: "Location 2" },
          { value: "93422", label: "Location 3" },
        ]}
      />
      <Select
        className="custom-select"
        placeholder="Charges"
        style={{ width: "120px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[{ value: "83622", label: "Option 1" }]}
      />
      <Select
        className="custom-select"
        placeholder="Status"
        style={{ width: "120px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[
          { value: "83622", label: "Open" },
          { value: "93722", label: "Closed" },
          { value: "93422", label: "Rejected" },
        ]}
      />
      <Select
        size="medium"
        className="custom-select"
        placeholder="Appointment"
        style={{ width: "160px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[
          { value: "83622", label: "Open" },
          { value: "93722", label: "In progress" },
          { value: "93422", label: "Completed" },
        ]}
      />
      <Button ghost className="rounded-md" type="primary" size="medium">
        Clear
      </Button>
      <Button type="primary" size="medium" className="rounded-md">
        Search
      </Button>
    </div>
  );

  const Ditems = [
    {
      label: (
        <span>
          <input type="checkbox" className="custom-checkbox" />
          Location
        </span>
      ),
      key: "1",
    },
    {
      label: (
        <span>
          <input type="checkbox" className="custom-checkbox" /> Patient
        </span>
      ),
      key: "2",
    },
    {
      label: (
        <span>
          <input type="checkbox" className="custom-checkbox" /> Billed amount
        </span>
      ),
      key: "3",
    },
    {
      label: (
        <span>
          <input type="checkbox" className="custom-checkbox" /> Ins amount
        </span>
      ),
      key: "4",
    },
  ];

  return (
    <div>
      <MainHeader />
      {/* Claims middle section start */}
      <div
        className="flex-align-center flex-space-between"
        style={{
          paddingInline: "4rem",
          marginBlock: "1rem",
        }}
      >
        <div>
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
        <div className="flex-space-between flex">
          <div className="claim-status-open claim-status-box">
            Open
            <span>112</span>
          </div>
          <div className="claim-status-priority claim-status-box">
            Priority <span>58</span>
          </div>
          <div className="claim-status-overdue claim-status-box">
            Overdue <span>18</span>
          </div>
        </div>
        <div className="search-bar flex-space-between">
          <Search size="" style={{ width: "320px" }} placeholder="Search ..." />

          <Popover
            placement="bottomRight"
            content={FilterPopover}
            trigger="click"
          >
            <Button type="primary" ghost size="medium" className="flex-center">
              <PolylineIcon style={{ fontSize: "14px", marginRight: "2px" }} />
              <span className="bold">Filters</span>
            </Button>
          </Popover>

          <Dropdown menu={{ items: Ditems }}>
            <Button type="primary" ghost size="medium" className="flex-center">
              <FilterListIcon
                style={{ fontSize: "16px", marginRight: "2px" }}
              />
              <span className="bold">Sort</span>
            </Button>
          </Dropdown>

          <Button
            type="primary"
            shape="circle"
            size="medium"
            icon={<AddIcon />}
          />
        </div>
      </div>
      {/* Claims middle section end */}

      <div style={{ paddingInline: "2rem", marginBlock: "1rem" }}>
        <ClaimsTable />
      </div>
    </div>
  );
}

export default ClaimsList;
