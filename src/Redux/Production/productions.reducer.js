import { createSlice } from '@reduxjs/toolkit'
import {
  downloadDetails,
  exportDetails,
  getClaimLevel,
  getExportStatus,
  getProdEob,
  getProdGroupByFacility,
  getDenialDetailed,
  getProdGroupByProvider,
  getProdGroupByService,
  getProdNotes,
  getProductionDetailed,
  payorsList,
  prodClaimDownloadApi,
  searchIcd,
  updateApmtType,
} from './production.actions'

const INITIAL_STATE = {
  prodDetailed: {},
  claimLevel: {},
  prod_notes: {},
  exportResponse: {},
  downloadResponse: {},
  exportStatus: {},
  updateApmtResponse: {},
  prodClaimFile: null,
  prod_eob: {},
  ProdGroupByProvider: [],
  ProdGroupByService: [],
  ProdGroupByFacility: [],
  payorsList: [],
  denialCategory: {},
  searchIcd: {},
}
const ProductionSlice = createSlice({
  name: 'production',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getProductionDetailed.fulfilled, (state, action) => {
      state.prodDetailed = action.payload
    })
    builder.addCase(getClaimLevel.fulfilled, (state, action) => {
      state.claimLevel = action.payload
    })
    builder.addCase(getProdNotes.fulfilled, (state, action) => {
      state.prod_notes = action.payload
    })
    builder.addCase(exportDetails.fulfilled, (state, action) => {
      state.exportResponse = action.payload
    })
    builder.addCase(downloadDetails.fulfilled, (state, action) => {
      state.downloadResponse = action.payload
    })
    builder.addCase(getExportStatus.fulfilled, (state, action) => {
      state.exportStatus = action.payload
    })
    builder.addCase(updateApmtType.fulfilled, (state, action) => {
      state.updateApmtResponse = action.payload
    })
    builder.addCase(getProdEob.fulfilled, (state, action) => {
      state.prod_eob = action.payload
    })
    builder.addCase(prodClaimDownloadApi.fulfilled, (state, action) => {
      state.prodClaimFile = action.payload
    })
    builder.addCase(getProdGroupByProvider.fulfilled, (state, action) => {
      state.ProdGroupByProvider = action.payload
    })
    builder.addCase(getProdGroupByService.fulfilled, (state, action) => {
      state.ProdGroupByService = action.payload
    })
    builder.addCase(getProdGroupByFacility.fulfilled, (state, action) => {
      state.ProdGroupByFacility = action.payload
    })
    builder.addCase(payorsList.fulfilled, (state, action) => {
      state.payorsList = action.payload
    })
    builder.addCase(getDenialDetailed.fulfilled, (state, action) => {
      state.denialCategory = action.payload
    })
    builder.addCase(searchIcd.fulfilled, (state, action) => {
      state.searchIcd = action.payload
    })
  },
  reducers: {
    prodClaimDownloadRes(state, action) {
      state.prodClaimFile = action.payload
    },
    updateApmtResponseRes(state, action) {
      state.updateApmtResponse = action.payload
    },
  },
})
export const { prodClaimDownloadRes ,updateApmtResponseRes} = ProductionSlice.actions
const { reducer } = ProductionSlice
export default reducer
