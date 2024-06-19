// import React, { useEffect, useState } from "react";
// import { Button, Descriptions, Table } from "antd";
// import "./style.css";
// import { getLedgerData } from "../../../../../Redux/Payments/payments.actions";
// import { useDispatch, useSelector } from "react-redux";

// function PatientPayments({ procedureData }) {
//   const dispatch = useDispatch();
//   const [edit, setEdit] = useState(false);
//   const [expand, setExpand] = useState(false);
//   const { paymentSummaryRes, ledgerDataRes } = useSelector(
//     (state) => state.payment
//   );
//   useEffect(() => {
//     dispatch(getLedgerData(procedureData?.procedureId));
//   }, []);
//   const columns = [
//     {
//       title: "Posted",
//       // width: 100,
//       dataIndex: "postedDate",
//       fixed: "center",
//     },
//     {
//       title: "Type",
//       // width: 300,
//       dataIndex: "type",
//     },
//     {
//       title: "Party",
//       dataIndex: "party",
//       fixed: "center",
//     },
//     {
//       title: "Amount",
//       dataIndex: "amount",
//       fixed: "center",
//     },
//     {
//       title: "Created",
//       dataIndex: "createdDate",
//       fixed: "center",
//     },
//   ];

//   return (
//     <div>
//       {/* <Descriptions> </Descriptions> */}
//       <div
//         // className="p-md"
//         style={{
//           border: "1px solid #D7E0E9",
//           borderRadius: "10px",
//           backgroundColor: "#ffff",
//           paddingTop: "1rem",
//         }}
//       >
//         <div
//           className="desc-buttons"
//           style={{
//             paddingInline: ".5rem",
//             display: "flex",
//             justifyContent: "space-between",
//             color: "#139696",
//             fontSize: "16px",
//             fontWeight: "400",
//           }}
//         >
//           <div className="semibold" style={{ paddingBottom: "24px" }}>
//             {procedureData?.cptCode}
//           </div>

//           <div
//             style={{ display: "flex", gap: "10px", marginInlineEnd: "10px" }}
//           >
//             <Button
//               type="primary"
//               ghost
//               size="small"
//               onClick={() => setExpand(!expand)}
//             >
//               {expand ? "Collapse" : "Expand"}
//             </Button>
//             <Button type="primary" ghost size="small">
//               Edit
//             </Button>
//           </div>
//         </div>
//         <Descriptions></Descriptions>
//         <div className="flex-space-between " style={{ padding: "1rem" }}>
//           <div className={"semibold"} style={{ color: "#4F566B" }}>
//             Billed: $ {procedureData?.billed}.00
//           </div>
//           <div className={"semibold"} style={{ color: "#4F566B" }}>
//             Adjusted :$ {procedureData?.adjusted}.00
//           </div>
//           <div className={"semibold"} style={{ color: "#4F566B" }}>
//             Paid :$ {procedureData?.paid}.00
//           </div>
//           <div className={"semibold"} style={{ color: "#4F566B" }}>
//             Bal :$ {procedureData?.balance}.00
//           </div>
//         </div>

//         {expand && (
//           <div>
//             <Table
//               className="custom-table-payment"
//               columns={columns}
//               dataSource={ledgerDataRes ? ledgerDataRes : []}
//               pagination={false}
//               // bordered
//               bordered={false}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default PatientPayments;

import React, { useEffect, useState } from "react";
import { Button, Descriptions, Table } from "antd";
import "./style.css";
import { getLedgerData } from "../../../../../Redux/Payments/payments.actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

function PatientPayments({ procedureData }) {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const { ledgerDataRes } = useSelector((state) => state.payment);

  useEffect(() => {
    if (procedureData?.procedureId) {
      dispatch(getLedgerData(procedureData.procedureId));
    }
  }, [dispatch, procedureData?.procedureId]);

  const columns = [
    {
      title: "Posted",
      dataIndex: "postedDate",
      key: "postedDate",
      render: (date) => moment(date).format("MM/DD/YYYY"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Party",
      dataIndex: "party",
      key: "party",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Created",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (date) => moment(date).format("MM/DD/YYYY"),
    },
  ];

  return (
    <div>
      <div
        style={{
          border: "1px solid #D7E0E9",
          borderRadius: "10px",
          backgroundColor: "#ffff",
          paddingTop: "1rem",
        }}
      >
        <div
          className="desc-buttons"
          style={{
            paddingInline: ".5rem",
            display: "flex",
            justifyContent: "space-between",
            color: "#139696",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          <div className="semibold" style={{ paddingBottom: "24px" }}>
            {procedureData?.cptCode}
          </div>

          <div
            style={{ display: "flex", gap: "10px", marginInlineEnd: "10px" }}
          >
            <Button
              type="primary"
              ghost
              size="small"
              onClick={() => setExpand(!expand)}
            >
              {expand ? "Collapse" : "Expand"}
            </Button>
            <Button type="primary" ghost size="small">
              Edit
            </Button>
          </div>
        </div>
        <Descriptions />
        <div className="flex-space-between " style={{ padding: "1rem" }}>
          <div className="semibold" style={{ color: "#4F566B" }}>
            Billed: $ {procedureData?.billed}.00
          </div>
          <div className="semibold" style={{ color: "#4F566B" }}>
            Adjusted :$ {procedureData?.adjusted}.00
          </div>
          <div className="semibold" style={{ color: "#4F566B" }}>
            Paid :$ {procedureData?.paid}.00
          </div>
          <div className="semibold" style={{ color: "#4F566B" }}>
            Bal :$ {procedureData?.balance}.00
          </div>
        </div>

        {expand && (
          <div>
            <Table
              className="custom-table-payment"
              columns={columns}
              dataSource={ledgerDataRes.data ? ledgerDataRes?.data : []}
              pagination={false}
              bordered={false}
              rowKey="id" // Ensure each row has a unique key
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientPayments;
