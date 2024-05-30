import { createAsyncThunk } from '@reduxjs/toolkit'
import ProductionServices from './production.services'

export const getProductionDetailed = createAsyncThunk(
  'productions/getProductionDetailed ',
  async (data) => {
    try {
      const res = await ProductionServices.getProductionDetailed(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getClaimLevel = createAsyncThunk(
  'productions/getClaimLevel',
  async (data) => {
    try {
      const res = await ProductionServices.getClaimLevel(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getProdNotes = createAsyncThunk(
  'productions/getProdNotes ',
  async (data) => {
    try {
      const res = await ProductionServices.getProdNotes(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const exportDetails = createAsyncThunk(
  'productions/exportDetails ',
  async (data) => {
    try {
      const res = await ProductionServices.exportDetails(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const downloadDetails = createAsyncThunk(
  'productions/downloadDetails',
  async (data) => {
    try {
      const res = await ProductionServices.downloadDetails(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getExportStatus = createAsyncThunk(
  'productions/getExportStatus',
  async (data) => {
    try {
      const res = await ProductionServices.getExportStatus(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const updateApmtType = createAsyncThunk(
  'productions/updateApmtType',
  async (data) => {
    try {
      const res = await ProductionServices.updateApmtType(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getProdEob = createAsyncThunk(
  'productions/ getProdEob',
  async (data) => {
    try {
      const res = await ProductionServices.getProdEob(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const prodClaimDownloadApi = createAsyncThunk(
  'productions/prodClaimDownloadApi',
  async (data) => {
    try {
      const res = await ProductionServices.prodClaimDownloadApi(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getProdGroupByProvider = createAsyncThunk(
  'productions/getProdGroupByProvider ',
  async (data) => {
    try {
      const res = await ProductionServices.getProdGroupByProvider(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getProdGroupByService = createAsyncThunk(
  'productions/getProdGroupByService',
  async (data) => {
    try {
      const res = await ProductionServices.getProdGroupByService(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getProdGroupByFacility = createAsyncThunk(
  'productions/getProdGroupByFacility',
  async (data) => {
    try {
      const res = await ProductionServices.getProdGroupByFacility(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const payorsList = createAsyncThunk(
  'productions/payorsList',
  async (data) => {
    try {
      const res = await ProductionServices.payorsList(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const getDenialDetailed = createAsyncThunk(
  'productions/getDenialDetailed',
  async (data) => {
    try {
      const res = await ProductionServices.getDenialDetailed(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
export const searchIcd = createAsyncThunk(
  'productions/searchIcd',
  async (data) => {
    try {
      const res = await ProductionServices.searchIcd(data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
)
