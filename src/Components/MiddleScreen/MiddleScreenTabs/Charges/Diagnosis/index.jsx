import React, { useEffect, useState, useCallback } from "react";
import {
  AutoComplete,
  Button,
  ConfigProvider,
  Descriptions,
  Modal,
} from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getClaimsDiagnosis,
  editClaimsDiagnosis,
  icdSearch,
} from "../../../../../Redux/Diagnosis/diagnosis.actions";
import toast from "react-hot-toast";
import debounce from "lodash.debounce";
import "./style.css";

const Diagnosis = () => {
  const clinicId = localStorage.getItem("clinic_id");
  const dispatch = useDispatch();
  const { diagnosisData, editDiagnosisRes, icdSearchData } = useSelector(
    (state) => state.diagnosis
  );

  // State to manage input values
  const [inputValues, setInputValues] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [searchInputs, setSearchInputs] = useState({});

  // Effect to fetch diagnosis data
  useEffect(() => {
    const selectedClaimRecord = JSON.parse(
      localStorage.getItem("selectedClaimRecord")
    );
    dispatch(getClaimsDiagnosis(selectedClaimRecord?.visitId || null));
  }, [dispatch]);

  // Initialize input values when diagnosisData changes
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

  // Effect to handle editDiagnosisRes changes
  useEffect(() => {
    if (editDiagnosisRes && editDiagnosisRes.responseCode === 0) {
      const selectedClaimRecord = JSON.parse(
        localStorage.getItem("selectedClaimRecord")
      );
      dispatch(getClaimsDiagnosis(selectedClaimRecord?.visitId || null));
    }
  }, [editDiagnosisRes, dispatch]);

  const handleOpenAdd = () => setOpenAdd(true);
  const closeAdd = () => setOpenAdd(false);

  const handleInputChange = (index, field, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index][field] = value;
    setInputValues(updatedValues);
  };

  const handleSearchInputChange = (index, field, value) => {
    const updatedSearchInputs = {
      ...searchInputs,
      [index]: { ...searchInputs[index], [field]: value },
    };
    setSearchInputs(updatedSearchInputs);
  };

  // Debounce the ICD search function to improve performance
  const debounceSearch = useCallback(
    debounce((searchTerm) => {
      dispatch(icdSearch({ clinicId, search: searchTerm }));
    }, 300),
    [dispatch, clinicId]
  );

  const handleSearch = (index, field, value) => {
    handleSearchInputChange(index, field, value);
    if (value.length >= 3) {
      debounceSearch(value);
    }
  };

  const handleSelect = (index, field, value) => {
    handleInputChange(index, field, value);
    handleSearchInputChange(index, field, value);
  };

  const handleSave = () => {
    inputValues.forEach((item) => {
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
      ).then(() => {
        closeAdd()
        toast.success("Updated successfully");
      });
    });
  };

  return (
    <div>
      <Modal
        open={openAdd}
        onOk={closeAdd}
        onCancel={closeAdd}
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
                <Button ghost onClick={closeAdd}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
            </div>
            <div className="diagnosis-modal-controls">
              {inputValues.map((item, index) => (
                <div className="d-modal-controll" key={index}>
                  {["dx1", "dx2", "dx3", "dx4"].map((dx) => (
                    <div
                      className="diagnosis-edit-container"
                      key={`${dx}-${index}`}
                    >
                      <AutoComplete
                        options={icdSearchData?.data?.map((icd) => ({
                          key: icd.icdCode, // Ensure unique keys for AutoComplete options
                          value: icd.icdCode,
                          label: icd.icdCode,
                        }))}
                        onSelect={(value) => handleSelect(index, dx, value)}
                        onSearch={(value) => handleSearch(index, dx, value)}
                        value={searchInputs[index]?.[dx] || item[dx]}
                        notFoundContent={
                          searchInputs[index]?.[dx] &&
                          !icdSearchData?.data?.length
                            ? "No results found"
                            : null
                        }
                      >
                        <input
                          className="diagnosis-edit-input"
                          placeholder={dx.toUpperCase()}
                          value={searchInputs[index]?.[dx] || item[dx]}
                          onChange={(e) =>
                            handleSearch(index, dx, e.target.value)
                          }
                        />
                      </AutoComplete>
                      <PlusOutlined style={{ color: "#139696" }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="container-btn">
              <Button ghost icon={<SearchOutlined />} />
              <Button ghost icon={<PlusOutlined />} />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Diagnosis;
