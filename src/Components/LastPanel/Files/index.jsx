import React, { useEffect, useState } from "react";
import "./style.css";
import { Button, Descriptions, Upload, message } from "antd";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  addClaimFile,
  getClaimFiles,
  deleteClaimFile,
} from "../../../Redux/Files/files.actions";

function Files() {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const { filesDataRes } = useSelector((state) => state.files);
  // Fetch files when the selected claim changes
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("selectedClaimRecord"))?.patientId) {
      dispatch(
        getClaimFiles(
          JSON.parse(localStorage.getItem("selectedClaimRecord"))?.patientId
        )
      );
    }
  }, [dispatch]);

  // Update files when filesDataRes changes
  useEffect(() => {
    if (filesDataRes?.responseCode === 0 && filesDataRes.data) {
      setFiles(
        filesDataRes.data.map((file, index) => ({
          uid: file.fileId,
          name: file.fileName,
          status: "done",
          url: file.filePath,
          thumbUrl: file.filePath,
        }))
      );
    }
  }, [filesDataRes]);

  // Handle file upload
  const handleUpload = ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "patientId",
      JSON.parse(localStorage.getItem("selectedClaimRecord")).patientId
    );
    formData.append("clinicId", localStorage.getItem("clinic_id"));
    formData.append("fileType", file.type);
    formData.append("imageTitle", file.name);
    formData.append("imageNotes", file.name);

    dispatch(addClaimFile(formData))
      .then((response) => {
        console.log(response, "file");
        if (response.payload.responseCode === 0) {
          message.success(`${file.name} file uploaded successfully.`);
          onSuccess(response.data);
          dispatch(
            getClaimFiles(
              JSON.parse(localStorage.getItem("selectedClaimRecord"))?.patientId
            )
          );
        } else {
          message.error(`${file.name} file upload failed.`);
          onError(new Error("Upload failed"));
        }
      })
      .catch((error) => {
        message.error(`${file.name} file upload failed.`);
        onError(error);
      });
  };

  // Handle file removal
  const handleRemove = (file) => {
    const fileId = file.uid;
    dispatch(deleteClaimFile(fileId))
      .then((response) => {
        if (response.payload.responseCode === 0) {
          message.success(`${file.name} file deleted successfully.`);
          setFiles((prevFiles) =>
            prevFiles.filter((item) => item.uid !== fileId)
          );
          dispatch(
            getClaimFiles(
              JSON.parse(localStorage.getItem("selectedClaimRecord"))?.patientId
            )
          );
        } else {
          message.error(`${file.name} file deletion failed.`);
        }
      })
      .catch((error) => {
        // console.log(error);
        message.error(`${file.name} file deletion failed.`);
      });
  };
  return (
    <div className="files-container">
      <Descriptions></Descriptions>
      <div className="files-heading">Files</div>
      <div className="file-display">
        <Upload
          customRequest={handleUpload}
          onRemove={handleRemove}
          listType="picture"
          fileList={[...files]}
          className="upload-list-inline"
        >
          <Button className="upload-btn" icon={<CloudUploadRoundedIcon />}>
            Upload
          </Button>
        </Upload>
      </div>
    </div>
  );
}

export default Files;
