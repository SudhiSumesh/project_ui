import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getClaimsData } from "../../Redux/Claim/claim.actions";
import MainHeader from "../../Components/MainHeader";
import ClaimsTable from "../../Components/ClaimsTable";
import Form from "../../Components/Form";
import PolylineIcon from "@mui/icons-material/Polyline";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import {
  providerList,
  serviceList,
  FacilityList,
  statuses,
} from "../../Helpers/enums";
import {
  Button,
  DatePicker,
  Input,
  Pagination,
  Popover,
  Select,
  Dropdown,
  Modal,
  Menu,
  Checkbox,
} from "antd";
import "./style.css";

function ClaimsList() {
  const { Search } = Input;
  const dispatch = useDispatch();

  // State to manage all filter values
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    selectedProvider: [],
    selectedServices: [],
    selectedFacility: [],
    selectedStatus: [],
    searchQuery: "",
  });
  // State to manage modal visibility
  const [openAdd, setOpenAdd] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(50);

  // State to manage popover visibility
  const [popoverOpen, setPopoverOpen] = useState(false);

  // State to sort columns
  const [selectedColumns, setSelectedColumns] = useState([
    "Patient Name",
    "MRN",
    "DOS",
    "Provider",
    "Payor",
    "Facility",
    "Service",
    "Charges",
    "Payments",
    "Ins Bal",
    "Pat Bal",
    "Claim Status",
    "Action",
  ]);
  const columns = [
    "Patient Name",
    "MRN",
    "DOS",
    "Provider",
    "Payor",
    "Facility",
    "Service",
    "Charges",
    "Payments",
    "Ins Bal",
    "Pat Bal",
    "Claim Status",
    "Action",
  ];
  // Function to handle menu click in the Dropdown
  const handleMenuClick = (e) => {
    const value = e.target.value;
    setSelectedColumns((prev) =>
      prev.includes(value)
        ? prev.filter((col) => col !== value)
        : [...prev, value]
    );
  };
  // Function to open the add modal
  const handleOpenAdd = () => setOpenAdd(true);
  // Function to close the add modal
  const closeAdd = () => setOpenAdd(false);

  // Effect to calculate pagination start and limit values
  useEffect(() => {
    setStart((currentPage - 1) * pageSize);
    setLimit(pageSize);
  }, [currentPage, pageSize]);

  // Function to handle page change
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Function to handle page size change
  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // Mapping providers, services, facilities, and statuses from enums to options for Select components
  const providers = providerList.map((provider) => ({
    value: provider.id,
    label: provider.fullName,
  }));

  const services = serviceList.map((service) => ({
    value: service.id,
    label: service.name,
  }));

  const facilities = FacilityList.map((facility) => ({
    value: facility.id,
    label: facility.locationName,
  }));

  const statusOptions = statuses.map((status) => ({
    value: status.value,
    label: status.name,
  }));

  // Function to handle date change
  const handleDateChange = (field, date) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: date,
    }));
  };

  // Function to handle select change
  const handleSelectChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  // Function to format date to YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const lastYear = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear() - 1;
    return `${year}-${month}-${day}`;
  };

  // Function to clear all filters
  const handleClear = () => {
    setFilters({
      startDate: null,
      endDate: null,
      selectedProvider: [],
      selectedServices: [],
      selectedFacility: [],
      selectedStatus: [],
    });
  };

  // Function to fetch data based on filters
  const fetchData = () => {
    dispatch(
      getClaimsData({
        clinicId: 93422,
        start: start,
        limit: limit,
        providerIds: filters.selectedProvider,
        serviceIds: filters.selectedServices,
        status: filters.selectedStatus,
        startDate: filters.startDate
          ? formatDate(filters.startDate)
          : lastYear(new Date()),
        endDate: filters.endDate
          ? formatDate(filters.endDate)
          : formatDate(new Date()),
        facilityIds: filters.selectedFacility,
        patientName: filters.searchQuery,
      })
    );
    setPopoverOpen(false); // Close the popover after fetching data
  };

  // Function to render tags in Select components
  const tagRender = (props) => {
    const { label } = props;
    const truncateText = (text, length) => {
      if (text?.length <= length) return text;
      return text?.slice(0, length) + "...";
    };
    return <div className="custom-tag">{truncateText(label, 10)}</div>;
  };
  //handle search
  const handleSearch = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: value,
    }));
  };

  // useEffect(() => {
  //   fetchData(); // Fetch data when search query changes
  // }, [filters.searchQuery]);

  // Filter popover content
  const FilterPopover = (
    <div style={{ display: "flex", gap: "16px" }}>
      <Select
        className="custom-select"
        placeholder="Provider"
        style={{ width: "160px" }}
        tagRender={tagRender}
        maxTagCount={1}
        maxTagPlaceholder={
          filters.selectedProvider.length > 1
            ? `+${filters.selectedProvider.length - 1}`
            : undefined
        }
        mode="multiple"
        allowClear
        options={providers}
        onChange={(value) => handleSelectChange("selectedProvider", value)}
        value={filters.selectedProvider}
      />
      <Select
        className="custom-select"
        placeholder="Service"
        style={{ width: "160px" }}
        tagRender={tagRender}
        maxTagCount={1}
        maxTagPlaceholder={
          filters.selectedServices.length > 1
            ? `+${filters.selectedServices.length - 1}`
            : undefined
        }
        mode="multiple"
        allowClear
        options={services}
        onChange={(value) => handleSelectChange("selectedServices", value)}
        value={filters.selectedServices}
      />
      <Select
        className="custom-select"
        placeholder="Facility"
        style={{ width: "140px" }}
        tagRender={tagRender}
        allowClear
        maxTagCount={1}
        maxTagPlaceholder={
          filters.selectedFacility.length > 1
            ? `+${filters.selectedFacility.length - 1} `
            : undefined
        }
        mode="multiple"
        options={facilities}
        onChange={(value) => handleSelectChange("selectedFacility", value)}
        value={filters.selectedFacility}
      />
      <Select
        className="custom-select"
        placeholder="Claim Status"
        style={{ width: "130px" }}
        allowClear
        tagRender={tagRender}
        maxTagCount={1}
        maxTagPlaceholder={
          filters.selectedStatus.length > 1
            ? `+${filters.selectedStatus.length - 1} `
            : undefined
        }
        mode="multiple"
        options={statusOptions}
        onChange={(value) => handleSelectChange("selectedStatus", value)}
        value={filters.selectedStatus}
      />
      <DatePicker
        className="custom-select"
        format="MM-DD-YYYY"
        onChange={(date) => handleDateChange("startDate", date)}
        value={filters.startDate}
      />
      <DatePicker
        className="custom-select"
        format="MM-DD-YYYY"
        onChange={(date) => handleDateChange("endDate", date)}
        value={filters.endDate}
      />
      <Button
        ghost
        className="rounded-md"
        type="primary"
        size="medium"
        onClick={handleClear}
      >
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

  // Dropdown menu items for sorting options
  const DropdownItems = columns.map((column) => ({
    key: column,
    label: (
      <Checkbox
        checked={selectedColumns.includes(column)}
        onChange={handleMenuClick}
        value={column}
      >
        {column}
      </Checkbox>
    ),
  }));

  return (
    <div>
      <Modal
        title=""
        open={openAdd}
        onOk={closeAdd}
        footer={null}
        closable={false}
        width={800}
      >
        <Form closeAdd={closeAdd} />
      </Modal>
      <MainHeader />
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
            total={200}
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
          <Search
            style={{ width: "320px" }}
            placeholder="Search ..."
            onSearch={handleSearch}
          />
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
          <Dropdown menu={{ items: DropdownItems }}>
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
            onClick={handleOpenAdd}
            icon={<AddIcon />}
          />
        </div>
      </div>
      <div style={{ paddingInline: "2rem", marginBlock: "1rem" }}>
        <ClaimsTable
          start={start}
          limit={limit}
          selectedServices={filters.selectedServices}
          selectedProvider={filters.selectedProvider}
          selectedFacility={filters.selectedFacility}
          selectedStatus={filters.selectedStatus}
          searchQuery={filters.searchQuery} //need to give the exact value at the time the user input in the search changes
          startDate={filters.startDate}
          endDate={filters.endDate}
          selectedColumns={selectedColumns}
        />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default ClaimsList;
