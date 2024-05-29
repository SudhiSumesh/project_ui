import { createAsyncThunk } from '@reduxjs/toolkit'
import aptServices from './apt.services'

export const AppointmentSave = createAsyncThunk(
  'apt/AppointmentSave',
  async (data) => {
    try {
      const res = await aptServices.AppointmentSaveApi(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const priorAuthSearchPatient = createAsyncThunk(
  'apt/priorAuthSearchPatient',
  async (data) => {
    try {
      const res = await aptServices.priorAuthSearchPatientApi(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const exportData = createAsyncThunk('apt/exportData', async (data) => {
  try {
    const res = await aptServices.exportDownloadApi(data)
    return res.data
  } catch (error) {
    console.log(error)
  }
})
export const providerList = createAsyncThunk('apt/providerList', async (data) => {
  try {
    const res = await aptServices.providerListApi(data)
    return res.data
  } catch (error) {
    console.log(error)
  }
})
export const providerSave = createAsyncThunk('apt/providerSave', async (data) => {
  try {
    const res = await aptServices.providerSaveApi(data)
    return res.data
  } catch (error) {
    console.log(error)
  }
})

// exportData,
// exportDataResponse,
  // providerList,
  // providerSave,
  // providerSaveResponse,