import { Button, ConfigProvider, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCharges,
  deleteCharges,
  getClaimsCharges,
  updateCharges,
} from "../../../../../Redux/Charges/charges.actions";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./style.css";
import toast, { Toaster } from "react-hot-toast";

function Services() {
  const [openAdd, setOpenAdd] = useState(false);
  const [visitServiceData, setVisitServiceData] = useState([]);
  const [editTableData, setEditTableData] = useState([]);

  const dispatch = useDispatch();
  const { selectedClaimRecord } = useSelector((state) => state.claim);
  const { ChargesDataRes, updateChargeRes, deleteChargeRes, addChargesRes } =
    useSelector((state) => state.charges);
  //modal functions
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const closeAdd = () => {
    setOpenAdd(false);
  };
  // handle add new row to table
  const handleAddRow = () => {
    const newRow = {
      key: editTableData.length,
      id: null,
      cpt: { cptCode: "", description: "" },
      fee: "",
      No: "",
      pos: "",
      amt: "",
      dx1: "",
      dx2: "",
      dx3: "",
      dx4: "",
      m1: "",
      m2: "",
      description: "",
      isNew: true, // Flag to identify newly added row
    };
    setEditTableData([...editTableData, newRow]);
  };
  // handle input change
  const handleInputChange = (index, key, value) => {
    setEditTableData((prevData) => {
      const newData = [...prevData];
      newData[index][key] = value;
      return newData;
    });
  };
  // handle save
  const handleSave = () => {
    // console.log("Saved Data: ", editTableData);
    editTableData.map((item) =>
      dispatch(
        updateCharges({
          procedureId: item.id,
          cptCode: item.cpt.cptCode, //procedureCode
          unit: item.No,
          fee: item.fee,
          amount: item.amt,
          pos: item.pos,
          diagnosisPointer1: item.dx1 ? 1 : 0,
          diagnosisPointer2: item.dx2 ? 1 : 0,
          diagnosisPointer3: item.dx3 ? 1 : 0,
          diagnosisPointer4: item.dx4 ? 1 : 0,
          modifier1: item.m1,
          modifier2: item.m2,
        })
      )
    );
    setOpenAdd(false);
    dispatch(getClaimsCharges(selectedClaimRecord.claimId));
  };
  // handle Add New Charges
  const handleAddNewCharges = (record) => {
    console.log(record, "record");
    console.log(selectedClaimRecord, "selected record");
    dispatch(
      addNewCharges({
        clinicId: localStorage.getItem("clinic_id") ?? null,
        claimId: selectedClaimRecord?.claimId,
        visitId: selectedClaimRecord?.visitId,
        patientId: selectedClaimRecord?.patientId,
        // procedureCodeId,
        procedureCode: record?.cpt?.cptCode,
        unit: record?.No,
        fee: record?.fee,
        amount: record?.fee * record?.No || record?.amt,
        pos: record.pos,
        tos: "",
        ndcNumber: "",
        ndcUnits: "",
        ndcMeasure: "",
        comments: "",
        sequenceNum: "",
        descript: record?.description,
        diagnosisPointer1: record.dx1 ?1:0,
        diagnosisPointer2: record.dx2?1:0,
        diagnosisPointer3: record.dx3?1:0,
        diagnosisPointer4: record.dx4?1:0,
        modifier1: record.m1,
        modifier2: record.m2,
      })
    );
  };
  // handle delete
  const handleDelete = (procedureId, index) => {
    const newData = [...editTableData];
    newData.splice(index, 1);
    setEditTableData(newData);
    if (procedureId) {
      dispatch(deleteCharges(procedureId));
      dispatch(getClaimsCharges(selectedClaimRecord.claimId));
    } else {
      console.log("procedureId required");
    }
  };
  //effect for show toast res to user
  useEffect(() => {
    if (updateChargeRes && updateChargeRes.responseCode === 0) {
    }
    toast.success("Updated successfully");
  }, [updateChargeRes]);
  //effect for fetch charges data
  useEffect(() => {
    if (selectedClaimRecord?.claimId) {
      dispatch(getClaimsCharges(selectedClaimRecord.claimId));
    }
  }, [selectedClaimRecord?.claimId, dispatch]);
  //effect for set data to state
  useEffect(() => {
    if (
      ChargesDataRes &&
      ChargesDataRes.responseCode === 0 &&
      ChargesDataRes.visitServiceDtoList.length !== 0
    ) {
      const serviceData = ChargesDataRes.visitServiceDtoList.map(
        (item, index) => ({
          key: index,
          id: item.procedureId,
          cpt: item.cptCode,
          fee: item.fee,
          No: item.unit,
          pos: item.pos,
          amt: item.amount,
          dx1: item.icdPointer1,
          dx2: item.icdPointer2,
          dx3: item.icdPointer3,
          dx4: item.icdPointer4,
        })
      );
      const serviceEditData = ChargesDataRes.visitServiceDtoList.map(
        (item, index) => ({
          key: index,
          id: item.procedureId,
          cpt: { cptCode: item.cptCode, description: item.description },
          fee: item.fee,
          No: item.unit,
          pos: item.pos,
          amt: item.amount,
          dx1: item.icdPointer1,
          dx2: item.icdPointer2,
          dx3: item.icdPointer3,
          dx4: item.icdPointer4,
          m1: item.modifier1,
          m2: item.modifier2,
          description: item.description,
        })
      );
      setEditTableData(serviceEditData);
      setVisitServiceData(serviceData);
    }
  }, [ChargesDataRes]);

  //add charge res
  useEffect(() => {
    if (addChargesRes && addChargesRes.responseCode === 0) {
      toast.success("service Added successfully");
       dispatch(getClaimsCharges(selectedClaimRecord.claimId));
    }
  }, [addChargesRes]);
  //delete res effect
  useEffect(() => {
    if (deleteChargeRes && deleteChargeRes.responseCode === 0) {
      toast.success("service deleted successfully");
    }
  }, [deleteChargeRes]);
  //table columns
  const columns = [
    {
      title: "CPT",
      dataIndex: "cpt",
      fixed: "left",
    },
    {
      title: "Fee",
      dataIndex: "fee",
    },
    {
      title: "No",
      dataIndex: "No",
      fixed: "left",
    },
    {
      title: "POS",
      dataIndex: "pos",
    },
    {
      title: "Amt",
      dataIndex: "amt",
    },
    {
      title: "DX1",
      dataIndex: "dx1",
      render: (text) => <span>{text ? "X" : ""}</span>,
    },
    {
      title: "DX2",
      dataIndex: "dx2",
      render: (text) => <span>{text ? "X" : ""}</span>,
    },
    {
      title: "DX3",
      dataIndex: "dx3",
      render: (text) => <span>{text ? "X" : ""}</span>,
    },
    {
      title: "DX4",
      dataIndex: "dx4",
      render: (text) => <span>{text ? "X" : ""}</span>,
    },
  ];

  const editTableColumns = [
    {
      title: "CPT",
      dataIndex: "cpt",
      fixed: "left",
      render: ({ cptCode, description }, _, index) => (
        <div className="cpt-edt">
          <div className="cpt-edit-container">
            <input
              // type="number"
              className="cpt-input"
              placeholder="cpt"
              value={cptCode}
              onChange={(e) =>
                handleInputChange(index, "cpt", {
                  cptCode: e.target.value,
                  description,
                })
              }
            />
            <EditIcon fontSize=""></EditIcon>
          </div>
          <div className="description">{description}</div>
        </div>
      ),
    },
    {
      title: "Fee",
      dataIndex: "fee",
      render: (text, _, index) => (
        <div className="cpt-edit-container">
          <input
            className="cpt-input"
            placeholder="fee"
            value={text}
            onChange={(e) => handleInputChange(index, "fee", e.target.value)}
          />
        </div>
      ),
    },
    {
      title: "No",
      dataIndex: "No",
      fixed: "left",
      render: (text, _, index) => (
        <div className="cpt-edit-container">
          <input
            className="cpt-input"
            placeholder="No"
            value={text}
            onChange={(e) => handleInputChange(index, "No", e.target.value)}
          />
        </div>
      ),
    },
    {
      title: "POS",
      dataIndex: "pos",
      render: (text, _, index) => (
        <div className="cpt-edit-container">
          <input
            className="cpt-input"
            placeholder="pos"
            value={text}
            onChange={(e) => handleInputChange(index, "pos", e.target.value)}
          />
        </div>
      ),
    },
    {
      title: "Amt",
      dataIndex: "amt",
      render: (text, _, index) => (
        <div className="cpt-edit-container">
          <input
            className="cpt-input"
            placeholder="amt"
            value={text}
            onChange={(e) => handleInputChange(index, "amt", e.target.value)}
          />
        </div>
      ),
    },
    {
      title: "DX1",
      dataIndex: "dx1",
      render: (text, _, index) => (
        <input
          type="checkbox"
          checked={text ? true : false}
          onChange={(e) =>
            handleInputChange(index, "dx1", e.target.checked ? "X" : "")
          }
        />
      ),
    },
    {
      title: "DX2",
      dataIndex: "dx2",
      render: (text, _, index) => (
        <input
          type="checkbox"
          checked={text ? true : false}
          onChange={(e) =>
            handleInputChange(index, "dx2", e.target.checked ? "X" : "")
          }
        />
      ),
    },
    {
      title: "DX3",
      dataIndex: "dx3",
      render: (text, _, index) => (
        <input
          type="checkbox"
          checked={text ? true : false}
          onChange={(e) =>
            handleInputChange(index, "dx3", e.target.checked ? "X" : "")
          }
        />
      ),
    },
    {
      title: "DX4",
      dataIndex: "dx4",
      render: (text, _, index) => (
        <input
          type="checkbox"
          checked={text ? true : false}
          onChange={(e) =>
            handleInputChange(index, "dx4", e.target.checked ? "X" : "")
          }
        />
      ),
    },
    {
      title: "",
      dataIndex: "id",
      render: (_, record, index) => (
        <>
          <CancelIcon
            fontSize="small"
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(record.id, index)}
          />
          {index === editTableData.length - 1 && (
            <span>
              <AddCircleOutlineIcon
                fontSize="small"
                style={{ cursor: "pointer" }}
                onClick={handleAddRow}
              />
              {record.isNew && (
                <Button
                  size="small"
                  style={{ marginInlineStart: "-.3rem" }}
                  onClick={() => handleAddNewCharges(record)}
                >
                  Save
                </Button>
              )}
            </span>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <Modal
        open={openAdd}
        onOk={handleSave}
        onCancel={closeAdd}
        closable={false}
        width={800}
        footer={null}
        className="custom-modal"
      >
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultColor: "white",
                defaultBg: "#109590",
                defaultGhostColor: "#109590",
              },
              Table: {
                headerBg: "#E0F0F2",
              },
            },
          }}
        >
          <div className="add-charges-modal">
            <div className="modal-header">
              <div className="heading-text">Charges</div>
              <div className="modal-btns">
                <Button size="" ghost onClick={closeAdd}>
                  Cancel
                </Button>
                <Button size="" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </div>
            <div className="modal-table-container">
              <Table
                columns={editTableColumns}
                dataSource={editTableData}
                pagination={false}
              />
            </div>
          </div>
        </ConfigProvider>
      </Modal>
      <div
        className=""
        style={{
          border: "1px solid #D7E0E9",
          borderRadius: "10px",
          backgroundColor: "#ffff",
        }}
      >
        <div
          className="desc-buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#139696",
            fontSize: "16px",
            fontWeight: "400",
            alignItems: "center",
            paddingInline: ".8rem",
            paddingBlock: ".6rem",
          }}
        >
          <div className="semibold ">Services</div>
          <Button
            className="semibold"
            type="primary"
            ghost
            size="small"
            onClick={handleOpenAdd}
          >
            Edit
          </Button>
        </div>
        <Table
          className="custom-table"
          columns={columns}
          dataSource={visitServiceData}
          pagination={false}
        />
      </div>
      {/* <Toaster /> */}
    </>
  );
}

export default Services;
