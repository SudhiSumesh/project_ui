import { createSlice } from '@reduxjs/toolkit'
import {
  bulkUpdate,
  cptDelete,
  cptSave,
  cptSearch,
  fileDownload,
  fileUpload,
  getPriorAuth,
  icdChild,
  icdKeywordSearch,
  icdSave,
  icdSearch,
  logInfoSave,
  logList,
  loginInfo,
  mappingList,
  paHistory,
  patientSave,
  policyHolderSave,
  priorAuthList,
  priorAuthSave,
  saveMapping,
} from './prior.actions'

function addDays(date, days) {
  date.setDate(date.getDate() + days)
  return date
}
const INITIAL_STATE = {
  loginResponse: null,
  tableData: null,
  priorAuthInfo: null,
  filterForm: {
    clinic: null,
    provider: null,
    status: [],
    result: [],
    startDate: new Date().toDateString(),
    endDate: addDays(new Date(), 14).toDateString(),
    payorId: null,
    owner: [],
    dueDate: null,
    statusContainer: [],
    resultContainer: [],
    ownerContainer: [],
    patientId: null,
  },
  icdSearchResponse: null,
  cptSearchResponse: null,
  logInfoResponse: null,
  icdResponse: null,
  cptSaveResponse: null,
  priorAuthSaveResponse: null,
  cache: null,
  fileUploadResponse: null,
  downloadResponse: null,
  logList: null,
  bulkUpdateResponse: null,
  icdKeywordList: null,
  cptDeleteResponse: null,
  paHistory: null,
  payorlist: null,
  patientSaveResponse: null,
  HolderResponse: null,
  policySaveResponse: null,
  mappingListResponse: null,
  mappingSaveResponse: null,
  saveMappingResponse: null,
  icdChildResponse: null,
}
const priorSlice = createSlice({
  name: 'cache_api',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(loginInfo.fulfilled, (state, action) => {
      state.cache = action.payload
    })
    builder.addCase(getPriorAuth.fulfilled, (state, action) => {
      state.priorAuthInfo = action.payload
    })
    builder.addCase(paHistory.fulfilled, (state, action) => {
      state.paHistory = action.payload
    })
    builder.addCase(priorAuthList.fulfilled, (state, action) => {
      state.tableData = action.payload
    })
    builder.addCase(bulkUpdate.fulfilled, (state, action) => {
      state.bulkUpdateResponse = action.payload
    })
    builder.addCase(logList.fulfilled, (state, action) => {
      state.logList = action.payload
    })
    builder.addCase(fileDownload.fulfilled, (state, action) => {
      state.downloadResponse = action.payload
    })
    builder.addCase(fileUpload.fulfilled, (state, action) => {
      state.fileUploadResponse = action.payload
    })
    builder.addCase(logInfoSave.fulfilled, (state, action) => {
      state.logInfoResponse = action.payload
    })
    builder.addCase(icdChild.fulfilled, (state, action) => {
      state.icdChildResponse = action.payload
    })
    builder.addCase(icdKeywordSearch.fulfilled, (state, action) => {
      state.icdKeywordList = action.payload
    })
    builder.addCase(priorAuthSave.fulfilled, (state, action) => {
      state.priorAuthSaveResponse = action.payload
    })
    builder.addCase(patientSave.fulfilled, (state, action) => {
      state.patientSaveResponse = action.payload
    })
    builder.addCase(policyHolderSave.fulfilled, (state, action) => {
      state.HolderResponse = action.payload
    })
    builder.addCase(mappingList.fulfilled, (state, action) => {
      state.mappingListResponse = action.payload
    })
    builder.addCase(saveMapping.fulfilled, (state, action) => {
      state.saveMappingResponse = action.payload
    })
    builder.addCase(cptSave.fulfilled, (state, action) => {
      state.cptSaveResponse = action.payload
    })
    builder.addCase(cptDelete.fulfilled, (state, action) => {
      state.cptDeleteResponse= action.payload
    })
    builder.addCase(cptSearch.fulfilled, (state, action) => {
      state.cptSearchResponse= action.payload
    })
    builder.addCase(icdSearch.fulfilled, (state, action) => {
      state.icdSearchResponse = action.payload
    })
    builder.addCase(icdSave.fulfilled, (state, action) => {
      state.icdResponse= action.payload
    })
  },
  reducers: {
    setFilter(state, action) {
      state.filterForm = action.payload
    },
    fileUploadResponse(state, action) {
      state.fileUploadResponse = action.payload
    },
    fileDownloadResponse(state, action) {
      state.downloadResponse = action.payload
    },
    logInfoSaveResponse(state, action) {
      state.logInfoResponse = action.payload
    },
    saveMappingRes(state, action) {
      state.saveMappingResponse = action.payload
    },
  },
})
export const {
  setFilter,
  fileUploadResponse,
  fileDownloadResponse,
  logInfoSaveResponse,
  saveMappingRes,
} = priorSlice.actions
const { reducer } = priorSlice
export default reducer
