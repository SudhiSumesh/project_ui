import { createAsyncThunk } from "@reduxjs/toolkit";
import priorServices from "./prior.services";
export const loginInfo = createAsyncThunk("prior/login_info", async (data) => {
  try {
    const res = await priorServices.loginInfoApi(data);
    console.log(res, "prior actions");
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong please try again");
  }
});
export const getPriorAuth = createAsyncThunk(
  "prior/getPriorAuth",
  async (data) => {
    try {
      const res = await priorServices.getPriorAuthApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const paHistory = createAsyncThunk("prior/paHistory", async (data) => {
  try {
    const res = await priorServices.paHistoryApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const priorAuthList = createAsyncThunk(
  "prior/priorAuthList",
  async (data) => {
    try {
      const res = await priorServices.priorAuthListApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const logList = createAsyncThunk("prior/logList", async (data) => {
  try {
    const res = await priorServices.logListApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const bulkUpdate = createAsyncThunk("prior/bulkUpdate", async (data) => {
  try {
    const res = await priorServices.bulkUpdateApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const fileUpload = createAsyncThunk("prior/fileUpload", async (data) => {
  try {
    const res = await priorServices.fileUploadApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const fileDownload = createAsyncThunk(
  "prior/fileDownload",
  async (data) => {
    try {
      const res = await priorServices.downloadFileApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const logInfoSave = createAsyncThunk(
  "prior/logInfoSave",
  async (data) => {
    try {
      const res = await priorServices.logInfoSaveApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const icdKeywordSearch = createAsyncThunk(
  "prior/icdKeywordSearch",
  async (data) => {
    try {
      const res = await priorServices.icdKeywordSearchApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const icdChild = createAsyncThunk("prior/icdChild", async (data) => {
  try {
    const res = await priorServices.icdChildApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const priorAuthSave = createAsyncThunk(
  "prior/priorAuthSave",
  async (data) => {
    try {
      const res = await priorServices.priorAuthSaveApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const patientSave = createAsyncThunk(
  "prior/patientSave",
  async (data) => {
    try {
      const res = await priorServices.patientSaveApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const policyHolderSave = createAsyncThunk(
  "prior/policyHolderSave",
  async (data) => {
    try {
      const res = await priorServices.policyHolderSaveApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const saveMapping = createAsyncThunk(
  "prior/saveMapping",
  async (data) => {
    try {
      const res = await priorServices.saveMappingApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const cptSave = createAsyncThunk("prior/cptSave", async (data) => {
  try {
    const res = await priorServices.cptSaveApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const cptSearch = createAsyncThunk("prior/cptSearch", async (data) => {
  try {
    const res = await priorServices.cptSearchApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const cptDelete = createAsyncThunk("prior/cptDelete", async (data) => {
  try {
    const res = await priorServices.cptDeleteApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const icdSearch = createAsyncThunk("prior/icdSearch", async (data) => {
  try {
    const res = await priorServices.icdSearchApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const icdSave = createAsyncThunk("prior/icdSave", async (data) => {
  try {
    const res = await priorServices.icdSaveApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const mappingList = createAsyncThunk(
  "prior/mappingList",
  async (data) => {
    try {
      const res = await priorServices.mappingListApi(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// *getPriorAuth,
// getPriorAuthResponse,
// *paHistory,
// *priorAuthList,
//* logList,
// bulkUpdate,
// setFilter,
//  fileUpload,
// fileDownload,
// fileUploadResponse,
// icdkeywordSearch, icdChild
