// import React, { useEffect, useState } from "react";
// import { ConfigProvider, Table } from "antd";
// import EditIcon from "@mui/icons-material/Edit";
// import { useDispatch, useSelector } from "react-redux";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./style.css";
// import { getProductionDetailed } from "../../Redux/Production/production.actions";
// import { useActionData } from "react-router-dom";

// const columns = [
//   {
//     title: "Last Name",
//     dataIndex: "lastName",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "First Name",
//     dataIndex: "FirstName",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "MRN",
//     dataIndex: "MRN",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "DOS",
//     dataIndex: "DOS",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Phone No",
//     dataIndex: "PhoneNo",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Provider",
//     dataIndex: "Provider",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Facility",
//     dataIndex: "Facility",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Insurance",
//     dataIndex: "Insurance",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Claim Status",
//     dataIndex: "ClaimsStatus",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Ins Bal",
//     dataIndex: "insBal",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Pat Bal",
//     dataIndex: "PatBal",
//     render: (text) => <span className="table-item">{text}</span>,
//   },
//   {
//     title: "Action",
//     render: () => (
//       <span
//         style={{
//           color: "#A3ACB9",
//           cursor: "pointer",
//         }}
//       >
//         <EditIcon fontSize="small" />
//         <DeleteIcon fontSize="small" />
//       </span>
//     ),
//   },
// ];

// // rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
// };
// const ClaimsTable = () => {
//   const [selectionType, setSelectionType] = useState("checkbox");
//   const [data, setData] = useState([]);
//   const dispatch = useDispatch();
//   const clinic_id = localStorage.getItem("clinic_id");
//   const { prodDetailed } = useSelector((state) => state.production);

//   // format date ///
//   const formatDate = (date) => {
//     if (date === null) {
//       return null;
//     } else if (date === "") {
//       return "";
//     }
//     const d = new Date(date);
//     let month = "" + (d.getMonth() + 1);
//     let day = "" + d.getDate();
//     const year = d.getFullYear();
//     if (month.length < 2) {
//       month = "0" + month;
//     }
//     if (day.length < 2) {
//       day = "0" + day;
//     }
//     if (isNaN(year)) {
//       return "";
//     } else {
//       return [year, month, day].join("-");
//     }
//   };
//   ////// last year function //////
//   const lastYear = (date) => {
//     if (date === null) {
//       return null;
//     } else if (date === "") {
//       return "";
//     }
//     const d = new Date(date);
//     let month = "" + (d.getMonth() + 1);
//     let day = "" + d.getDate();
//     const year = d.getFullYear() - 1;
//     if (month.length < 2) {
//       month = "0" + month;
//     }
//     if (day.length < 2) {
//       day = "0" + day;
//     }
//     if (isNaN(year)) {
//       return "";
//     } else {
//       return [year, month, day].join("-");
//     }
//   };
//   useEffect(() => {
//     /// getprodctiondetaild ///
//     dispatch(
//       getProductionDetailed({
//         iclinicId: 93422,
//         btReportType: 1,
//         sstartDate: lastYear(new Date()),
//         sendDate: formatDate(new Date()),
//         iproviderId: 0,
//         payorId: 0,
//         blLedgerDos: true,
//         btexportType: 1,
//         btrptType: 1,
//         // sproviderIds: '',
//         // serviceId: service === -1 ? 0 : service,
//         status: "0",
//         facilityId: "0",
//         serviceId: "0",
//         sproviderIds: "0",
//         // status: 0,
//         offset: 0,
//       })
//     );
//   }, []);
//   const Tabledata = [
//     {
//       key: "1",
//       lastName: "Andrews",
//       FirstName: "Jenny",
//       MRN: 11403,
//       DOS: "06/23/2024",
//       PhoneNo: "(205) 789-1111",
//       Provider: "Venkata Aligeti MD",
//       Facility: "BSW Frisco",
//       Insurance: "Medicare",
//       ClaimsStatus: "Closed",
//       insBal: "$2356.34",
//       PatBal: "$75.45",
//     },
//   ];
//   useEffect(() => {
//     if (prodDetailed && prodDetailed?.data) {
//       setData(prodDetailed?.data?.result.providerSummary);
//     }
//   }, [prodDetailed]);

//   //set table data
//  const columData= Tabledata.map((tabdata, index) => {
//     const newdata = [
//       {
//         key: index + 1,
//         lastName: tabdata.spatientName,
//         FirstName: "Jenny",
//         MRN: tabdata.smrn,
//         DOS: tabdata.sdos,
//         PhoneNo: "(205) 789-1111",
//         Provider: tabdata.sproviderName,
//         Facility: tabdata.facilityName,
//         Insurance: "Medicare",
//         ClaimsStatus: "Closed",
//         insBal: tabdata.insuranceBalance,
//         PatBal: tabdata.patientBalance,
//       },
//     ];
//     return newdata
//   });
//   console.log(columData);
//   return (
//     <div>
//       <ConfigProvider
//         theme={{
//           token: {
//             colorPrimary: "#139696",
//             colorText: "black",
//           },
//           components: {
//             Table: {
//               headerBg: "#E0F0F2",
//             },
//           },
//         }}
//       >
//         <Table
//           className="custom-scrollbar"
//           rowSelection={{
//             type: selectionType,
//             ...rowSelection,
//           }}
//           columns={columns}
//           dataSource={columData}
//           size="small"
//           scroll={{
//             y: 240,
//           }}
//           pagination={false} // Disable pagination
//         ></Table>
//       </ConfigProvider>
//     </div>
//   );
// };
// export default ClaimsTable;


import React, { useEffect, useState } from "react";
import { ConfigProvider, Table, Tooltip } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./style.css";
import { getProductionDetailed } from "../../Redux/Production/production.actions";

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};
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
    render: (text) => (
      <Tooltip title={text}>
        <span className="table-item">{truncateText(text, 18)}</span>
      </Tooltip>
    ),
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
      <span style={{ color: "#A3ACB9", cursor: "pointer" }}>
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

const ClaimsTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { prodDetailed } = useSelector((state) => state.production);

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

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        getProductionDetailed({
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
  }, [dispatch]);

  useEffect(() => {
    if (prodDetailed?.data?.result?.providerSummary) {
      setData(
        prodDetailed.data.result.providerSummary.map((item, index) => ({
          key: index + 1,
          lastName: item.spatientName,
          FirstName: "Jenny",
          MRN: item.smrn,
          DOS: item.sdos,
          PhoneNo: "(205) 789-1111",
          Provider: item.sproviderName,
          Facility: item.facilityName,
          Insurance: "Medicare",
          ClaimsStatus: "Closed",
          insBal:` $ ${item.insuranceBalance}.00`,
          PatBal: `$ ${item.patientBalance}.00`,
        }))
      );
    }
  }, [prodDetailed]);

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
