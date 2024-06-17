import React, { useEffect, useState } from "react";
import {
  Button,
  ConfigProvider,
  Descriptions,
  Input,
  Modal,
  Table,
} from "antd";
import "./style.css";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getClaimsDiagnosis,
  editClaimsDiagnosis,
} from "../../../../../Redux/Diagnosis/diagnosis.actions";
import toast, { Toaster } from "react-hot-toast";
function Diagnosis() {
  const dispatch = useDispatch();
  const { selectedClaimRecord } = useSelector((state) => state.claim);
  const { diagnosisData, editDiagnosisRes } = useSelector(
    (state) => state.diagnosis
  );
  // State to manage input values
  const [inputValues, setInputValues] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  //Effect for fetch diagnosis
  useEffect(() => {
    dispatch(getClaimsDiagnosis(selectedClaimRecord?.visitId || null));
  }, []);
  //Initialize input values when diagnosisData changes
  useEffect(() => {
    if (diagnosisData?.visitDiagnosisDtoList) {
      setInputValues(
        diagnosisData.visitDiagnosisDtoList.map((item) => ({
          dx1: item.dx1.icdCode,
          dx2: item.dx2.icdCode,
          dx3: item.dx3.icdCode,
          dx4: item.dx4.icdCode,
          dx5: item.dx5.icdCode,
          dx6: item.dx6.icdCode,
          dx7: item.dx7.icdCode,
          dx8: item.dx8.icdCode,
          diagnosisId: item.visitDiagnosisId,
        }))
      );
    }
  }, [diagnosisData]);
  useEffect(() => {
    if (editDiagnosisRes && editDiagnosisRes.responseCode === 0) {
      toast.success("Updated successfully");
    }
  }, [editDiagnosisRes]);
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const closeAdd = () => {
    setOpenAdd(false);
  };

  const handleInputChange = (index, field, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index][field] = value;
    setInputValues(updatedValues);
  };

  const handleSave = () => {
    // Add your save logic here
    inputValues.map((item) =>
      dispatch(
        editClaimsDiagnosis({
          icdCodeOne: item.dx1,
          icdCodeTwo: item.dx2,
          icdCodeThree: item.dx3,
          icdCodeFour: item.dx4,
          icdCodeFive: item.dx5,
          icdCodeSix: item.dx6,
          icdCodeSeven: item.dx7,
          icdCodeEight: item.dx8,
          diagnosisId: item.diagnosisId,
        })
      )
    );
  };

  return (
    <div>
      <Modal
        open={openAdd}
        onOk={() => closeAdd()}
        onCancel={() => closeAdd()}
        closable={false}
        width={700}
        footer={null}
        className="diagnosis-modal"
      >
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultColor: "white",
                defaultBg: "#109590",
                defaultGhostColor: "#109590",
                defaultGhostBorderColor: "",
              },
              Table: {
                headerBg: "#E0F0F2",
              },
            },
          }}
        >
          <div className="diagnosis-modal-container">
            <div className="diagnosis-modal-header">
              <div className="heading-text">Diagnosis</div>
              <div className="modal-btns">
                <Button size="" ghost onClick={() => closeAdd()}>
                  Cancel
                </Button>
                <Button size="" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </div>
            <div className="diagnosis-modal-controls">
              {inputValues?.map((item, index) => (
                <div className="d-modal-controll" key={index}>
                  <div className="diagnosis-edit-container">
                    <input
                      className="diagnosis-edit-input"
                      placeholder="DX1"
                      value={item.dx1}
                      onChange={(e) =>
                        handleInputChange(index, "dx1", e.target.value)
                      }
                    />
                    {<PlusOutlined style={{ color: "#139696" }} />}
                  </div>

                  <div className="diagnosis-edit-container">
                    <input
                      className="diagnosis-edit-input"
                      placeholder="DX2"
                      value={item.dx2}
                      onChange={(e) =>
                        handleInputChange(index, "dx2", e.target.value)
                      }
                    />
                    {<PlusOutlined style={{ color: "#139696" }} />}
                  </div>
                  <div className="diagnosis-edit-container">
                    <input
                      className="diagnosis-edit-input"
                      placeholder="DX3"
                      value={item.dx3}
                      onChange={(e) =>
                        handleInputChange(index, "dx3", e.target.value)
                      }
                    />
                    {<PlusOutlined style={{ color: "#139696" }} />}
                  </div>
                  <div className="diagnosis-edit-container">
                    <input
                      className="diagnosis-edit-input"
                      placeholder="DX4"
                      value={item.dx4}
                      onChange={(e) =>
                        handleInputChange(index, "dx4", e.target.value)
                      }
                    />
                    {<PlusOutlined style={{ color: "#139696" }} />}
                  </div>
                </div>
              ))}
            </div>
            <div className="container-btn">
              <Button shape="" ghost icon={<SearchOutlined />} />
              <Button shape="" ghost icon={<PlusOutlined />} />
            </div>
          </div>
        </ConfigProvider>
      </Modal>
      <div
        className="p-md"
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
          }}
        >
          <div className="semibold" style={{ paddingBottom: "24px" }}>
            Diagnosis
          </div>

          <Button
            className="semibold"
            type="primary"
            ghost
            size="small"
            onClick={() => handleOpenAdd()}
          >
            Edit
          </Button>
        </div>
        <div layout="vertical">
          <Descriptions></Descriptions>
          {diagnosisData?.visitDiagnosisDtoList?.map((item, index) => (
            <div key={index}>
              <div
                className="semibold"
                style={{
                  color: "#4F566B",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBlock: ".5rem",
                }}
              >
                <div>{` DX1 :  ${item.dx1.icdCode}`}</div>
                <div>{`DX2 : ${item.dx2.icdCode}`}</div>
                <div>{`DX3 : ${item.dx3.icdCode}`}</div>
                {/* {`DX1: ${item.dx1.icdCode}, DX2: ${item.dx2.icdCode}, DX3: ${item.dx3.icdCode}`} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Toaster/> */}
    </div>
  );
}
export default Diagnosis;
