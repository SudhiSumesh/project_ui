import React, { useEffect, useState } from "react";
import MainHeader from "../../Components/MainHeader";
import ClaimsTable from "../../Components/ClaimsTable";
import Form from "../../Components/Form";
import { providerList } from "../../Helpers/enums";
import {
  Button,
  DatePicker,
  Input,
  Pagination,
  Popover,
  Select,
  Dropdown,
  Modal,
} from "antd";
import PolylineIcon from "@mui/icons-material/Polyline";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";
import { useDispatch } from "react-redux";
import { getClaimsData } from "../../Redux/Claim/claim.actions";

function ClaimsList() {
  const { Search } = Input;
  const dispatch = useDispatch();
  //modal state
  const [openAdd, setOpenAdd] = useState(false);
  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(50);
  //filter states
  const [selectedProvider, setSelectedProvider] = useState(null);

  //popover visibility state
  const [popoverOpen, setPopoverOpen] = useState(false);
  //Modal functions
  const handleOpenAdd = () => {
    // setFields(defaultFields);
    // setEdit(false);
    setOpenAdd(true);
  };
  const closeAdd = () => {
    setOpenAdd(false);
  };
  //pagination
  useEffect(() => {
    // Calculate start and limit based on current page and page size
    setStart((currentPage - 1) * pageSize);
    setLimit(pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page
  };
  //provaiders from enum
  const providers = providerList.map((provider) => {
    return {
      value: provider.id,
      label: provider.fullName,
    };
  });
  const handleProviderInputChange = (value) => {
    console.log("Selected provider:", value);
    setSelectedProvider(value);
  };

  //fetch table data with filters
  const fetchData = () => {
    dispatch(
      getClaimsData({
        clinicId: 93422,
        start: start,
        limit: limit,
        providerIds: selectedProvider,
        // serviceIds: "0",
        // status: "0",
        // startDate: lastYear(new Date()),
        // endDate: formatDate(new Date()),
        // facilityIds: "0",
        // patientName :"",
      })
    );
    setPopoverOpen(false); // Close the popover
  };

  //filter popover
  const FilterPopover = (
    <div style={{ display: "flex", gap: "16px" }}>
      <Select
        className="custom-select"
        title="Current Filters"
        placeholder="Provider"
        style={{ width: "180px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={providers}
        onChange={handleProviderInputChange}
      />
      <Select
        className="custom-select"
        placeholder="Service"
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
        placeholder="Facility"
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
        placeholder="Claim Status"
        style={{ width: "120px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[{ value: "83622", label: "Option 1" }]}
      />
      <Select
        className="custom-select"
        placeholder="Period"
        style={{ width: "120px" }}
        allowClear
        popupMatchSelectWidth={false}
        options={[
          { value: "83622", label: "Open" },
          { value: "93722", label: "Closed" },
          { value: "93422", label: "Rejected" },
        ]}
      />
      <DatePicker className="custom-select" format="MM-DD-YYYY" />
      <Button ghost className="rounded-md" type="primary" size="medium">
        Clear
      </Button>
      <Button
        type="primary"
        size="medium"
        className="rounded-md"
        onClick={fetchData}
      >
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
      <Modal
        title={""}
        open={openAdd}
        onOk={() => closeAdd()}
        // onCancel={() => closeAdd()}
        footer={null}
        closable={false}
        width={800}
      >
        <Form closeAdd={closeAdd} /> {/* add claim form */}
      </Modal>
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
          <Pagination
            size="small"
            total={200} // Total number of items
            current={currentPage}
            pageSize={pageSize}
            pageSizeOptions={[50, 100, 150, 200]}
            showSizeChanger
            showQuickJumper
            onChange={handlePageChange}
            onShowSizeChange={handlePageSizeChange}
          />
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
            open={popoverOpen}
            onOpenChange={setPopoverOpen}
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
            onClick={() => handleOpenAdd()}
            icon={<AddIcon />}
          />
        </div>
      </div>
      {/* Claims middle section end */}

      <div style={{ paddingInline: "2rem", marginBlock: "1rem" }}>
        <ClaimsTable
          start={start}
          limit={limit}
     
        />
      </div>
    </div>
  );
}

export default ClaimsList;
