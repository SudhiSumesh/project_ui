import React, { useEffect, useState } from "react";
import { ConfigProvider, Table, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ViewListIcon from "@mui/icons-material/ViewList";
import "./style.css";
import { getClaimsData } from "../../Redux/Claim/claim.actions";
import { useNavigate } from "react-router-dom";

const ClaimsTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { claimData } = useSelector((state) => state.claim);
//status
  const statuses = [
    // { name: "All Statuses", value: 0 },
    { name: "Visit Completed", value: 1 },
    { name: "Created", value: 2 },
    { name: "Filed", value: 3 },
    { name: "Rejected", value: 4 },
    { name: "Denied", value: 5 },
    { name: "Sec Ready", value: 6 },
    { name: "Sec Pending", value: 7 },
    { name: "Ter Ready", value: 8 },
    { name: "Ter Pending", value: 9 },
    { name: "Pat Balance", value: 10 },
    { name: "Closed", value: 11 },
    { name: "Clar Opened", value: 12 },
    { name: "Clar Closed", value: 13 },
    { name: "On Hold", value: 14 },
  ];
//trim text
  const truncateText = (text, length) => {
    if (text?.length <= length) return text;
    return text?.slice(0, length) + "...";
  };
  //table columns
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      render: (text) => (
        <span className="table-item">{truncateText(text, 14)}</span>
      ),
    },

    {
      title: "MRN",
      dataIndex: "mrn",
      render: (text) => (
        <span className="table-item">{truncateText(text, 14)}</span>
      ),
    },
    {
      title: "DOS",
      dataIndex: "dos",
      render: (text) => (
        <span className="table-item">{truncateText(text, 14)}</span>
      ),
    },
    {
      title: "Provider",
      dataIndex: "provider",
      render: (text) => (
        <Tooltip title={text}>
          <span className="table-item">{truncateText(text, 14)}</span>
        </Tooltip>
      ),
    },
    {
      title: "Payor",
      dataIndex: "payor",
      render: (text) => (
        <Tooltip title={text}>
          <span className="table-item">{truncateText(text, 10)}</span>
        </Tooltip>
      ),
    },

    {
      title: "Facility",
      dataIndex: "facility",
      render: (text) => (
        <Tooltip title={text}>
          <span className="table-item">{truncateText(text, 12)}</span>
        </Tooltip>
      ),
    },
    {
      title: "Service",
      dataIndex: "service",
      render: (text) => (
        <Tooltip title={text}>
          <span className="table-item">{truncateText(text, 14)}</span>
        </Tooltip>
      ),
    },
    {
      title: "Charges",
      dataIndex: "charges",
      render: (text) => <span className="table-item">{text}</span>,
    },
    {
      title: "Payments",
      dataIndex: "payments",
      render: (text) => <span className="table-item">{text}</span>,
    },
    {
      title: "Ins Bal",
      dataIndex: "insBal",
      render: (text) => <span className="table-item">{text}</span>,
    },
    {
      title: "Pat Bal",
      dataIndex: "patBal",
      render: (text) => <span className="table-item">{text}</span>,
    },
    {
      title: "Claim Status",
      dataIndex: "claimStatus",
      render: (text) => (
        <Tooltip title={text}>
          <span className="table-item">{truncateText(text, 10)}</span>
        </Tooltip>
      ),
    },
    {
      title: "Action",
      render: () => (
        <span
          style={{
            color: "#A3ACB9",
            cursor: "pointer",
            display: "flex",
            gap: "5px",
          }}
        >
          <ViewListIcon
            fontSize="small"
            onClick={() => navigate("/claimslist/claims-details")}
          ></ViewListIcon>
          <EditIcon fontSize="small" />
          <DeleteIcon fontSize="small" />
        </span>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}/${month}/${day}`;
  };

  const lastYear = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear() - 1;
    return `${year}/${month}/${day}`;
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(
        getClaimsData({
          iclinicId: 93422,
          btReportType: 1,
          sstartDate: lastYear(new Date()),
          sendDate: formatDate(new Date()),
          iproviderId: 0,
          payorId: 0,
          blLedgerDos: true,
          btexportType: 1,
          btrptType: 1,
          status: "0",
          facilityId: "0",
          serviceId: "0",
          sproviderIds: "0",
          offset: 0,
        })
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (claimData?.result?.providerSummary) {
      setData(
        claimData.result.providerSummary.map((item, index) => ({
          key: index + 1,
          patientName: item.spatientName,
          // FirstName: "Jenny",
          mrn: item.smrn,
          dos: formatDate(item.sdos),
          provider: item.sproviderName,
          payor: item.payorName,
          facility: item.facilityName,
          service: item.serviceName ?? "",
          charges: `$${item.dcharges}`,
          payments: `$${item.dpayments}`,
          insBal: ` $${item.insuranceBalance}.00`,
          patBal: `$${item.patientBalance}.00`,
          claimStatus: item.claimStatus?statuses[item.claimStatus - 1].name:'',
        }))
      );
    }
  }, [claimData]);

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#139696",
            colorText: "black",
          },
          components: {
            Table: {
              headerBg: "#E0F0F2",
            },
          },
        }}
      >
        <Table
          className="custom-scrollbar"
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          size="small"
          scroll={{ y: "calc(100vh - 200px)" }}
          pagination={false}
        />
      </ConfigProvider>
    </div>
  );
};

export default ClaimsTable;
