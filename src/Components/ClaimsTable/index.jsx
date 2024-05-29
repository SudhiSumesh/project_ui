import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./style.css";
const columns = [
  {
    title: "Last Name",
    dataIndex: "lastName",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "First Name",
    dataIndex: "FirstName",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "MRN",
    dataIndex: "MRN",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "DOS",
    dataIndex: "DOS",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Phone No",
    dataIndex: "PhoneNo",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Provider",
    dataIndex: "Provider",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Facility",
    dataIndex: "Facility",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Insurance",
    dataIndex: "Insurance",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Claim Status",
    dataIndex: "ClaimsStatus",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Ins Bal",
    dataIndex: "insBal",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Pat Bal",
    dataIndex: "PatBal",
    render: (text) => <span className="table-item">{text}</span>,
  },
  {
    title: "Action",
    render: () => (
      <span
        style={{
          color: "#A3ACB9",
        }}
      >
        <EditIcon fontSize="small" />
        <DeleteIcon fontSize="small" />
      </span>
    ),
  },
];
const data = [
  {
    key: "1",
    lastName: "Andrews",
    FirstName: "Jenny",
    MRN: 11403,
    DOS: "06/23/2024",
    PhoneNo: "(205) 789-1111",
    Provider: "Venkata Aligeti MD",
    Facility: "BSW Frisco",
    Insurance: "Medicare",
    ClaimsStatus: "Closed",
    insBal: "$2356.34",
    PatBal: "$75.45",
  },
  {
    key: "2",
    lastName: "Andrews",
    FirstName: "Jenny",
    MRN: 11403,
    DOS: "06/23/2024",
    PhoneNo: "(205) 789-1111",
    Provider: "Venkata Aligeti MD",
    Facility: "BSW Frisco",
    Insurance: "Medicare",
    ClaimsStatus: "Closed",
    insBal: "$2356.34",
    PatBal: "$75.45",
  },
  {
    key: "3",
    lastName: "Andrews",
    FirstName: "Jenny",
    MRN: 11403,
    DOS: "06/23/2024",
    PhoneNo: "(205) 789-1111",
    Provider: "Venkata Aligeti MD",
    Facility: "BSW Frisco",
    Insurance: "Medicare",
    ClaimsStatus: "Closed",
    insBal: "$2356.34",
    PatBal: "$75.45",
  },
  {
    key: "4",
    lastName: "Andrews",
    FirstName: "Jenny",
    MRN: 11403,
    DOS: "06/23/2024",
    PhoneNo: "(205) 789-1111",
    Provider: "Venkata Aligeti MD",
    Facility: "BSW Frisco",
    Insurance: "Medicare",
    ClaimsStatus: "Closed",
    insBal: "$2356.34",
    PatBal: "$75.45",
  },
  {
    key: "5",
    lastName: "Andrews",
    FirstName: "Jenny",
    MRN: 11403,
    DOS: "06/23/2024",
    PhoneNo: "(205) 789-1111",
    Provider: "Venkata Aligeti MD",
    Facility: "BSW Frisco",
    Insurance: "Medicare",
    ClaimsStatus: "Closed",
    insBal: "$2356.34",
    PatBal: "$75.45",
  },
  {
    key: "6",
    lastName: "Andrews",
    FirstName: "Jenny",
    MRN: 11403,
    DOS: "06/23/2024",
    PhoneNo: "(205) 789-1111",
    Provider: "Venkata Aligeti MD",
    Facility: "BSW Frisco",
    Insurance: "Medicare",
    ClaimsStatus: "Closed",
    insBal: "$2356.34",
    PatBal: "$75.45",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const ClaimsTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
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
          scroll={{
            y: 240,
          }}
          pagination={false} // Disable pagination
        ></Table>
      </ConfigProvider>
    </div>
  );
};
export default ClaimsTable;
