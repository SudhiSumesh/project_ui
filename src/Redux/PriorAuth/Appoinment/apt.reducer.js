import { createSlice } from '@reduxjs/toolkit'
import {
  AppointmentSave,
  exportData,
  priorAuthSearchPatient,
  providerList,
  providerSave,
} from './apt.actions'
const INITIAL_STATE = {
  priorAuthSearchPatients: null,
  cache: null,
  appointmentResponse: null,
  payerSaveResponse: null,
  providerSaveResponse: null,
  providerListResponse: null,
  exportFile: null,
}
const aptSlice = createSlice({
  name: 'apt',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(AppointmentSave.fulfilled, (state, action) => {
      state.appointmentResponse = action.payload
    })
    builder.addCase(priorAuthSearchPatient.fulfilled, (state, action) => {
      state.priorAuthSearchPatients = action.payload
    })
    builder.addCase(exportData.fulfilled, (state, action) => {
      state.exportFile = action.payload
    })
    builder.addCase(providerList.fulfilled, (state, action) => {
      state.providerListResponse = action.payload
    })
    builder.addCase(providerSave.fulfilled, (state, action) => {
      state.providerSaveResponse= action.payload
    })
  },
  reducers: {
    clearAppointmentResponse(state, action) {
      state.appointmentResponse = action.payload
    },
    exportDataResponse(state, action) {
      state.exportFile = action.payload
    },
    providerSaveResponse(state, action) {
      state.providerSaveResponse = action.payload
    },
  },
})
export const { clearAppointmentResponse, exportDataResponse ,providerSaveResponse} = aptSlice.actions
const { reducer } = aptSlice
export default reducer
