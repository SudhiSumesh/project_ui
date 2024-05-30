import { Apis } from '../../APIs'
import httpCommon from "../../http/http.common";
import { objectToUrl } from '../../Utils/ajax-utils'

class PriorService {
  loginInfoApi() {
    return httpCommon.get(`${Apis.Priorauth_loginInfoApi}`)
  }
  getPriorAuthApi(data) {
    return httpCommon.get(
      `${Apis.Priorauth_getPriorAuthApi}/${data.apptId}?priorAuthId=${data.priorAuthId}`,
      {
        data: {},
      },
    )
  }
  paHistoryApi(data) {
    return httpCommon.get(`${Apis.Priorauth_paHistoryApi}/${data}`, {
      data: {},
    })
  }
  priorAuthListApi(data) {
    const url = objectToUrl(`${Apis.Priorauth_priorAuthListApi}`, data)
    return httpCommon.get(url, {
      data: {},
    })
  }
  icdSearchApi(data) {
    return httpCommon.get(
      `${Apis.priorauth_icdSearchApi}/${data.s}?clinicId=${data.cid}`,
      {
        data: {},
      },
    )
  }
  icdSaveApi(data) {
    return httpCommon.get(`${Apis.Priorauth_icdSaveApi}`, data)
  }
  cptSearchApi(data) {
    return httpCommon.get(
      `${Apis.Priorauth_cptSearchApi}/${data.s}?clinicId=${data.cid}`,
      { data: {} },
    )
  }
  logListApi(data) {
    return httpCommon.get(
      `${Apis.Priorauth_logListApi}/${data.appointmentId}`,
      { data: {} },
    )
  }
  bulkUpdateApi(data) {
    return httpCommon.put(`${Apis.Priorauth_bulkUpdateApi}`, data)
  }
  fileUploadApi(data) {
    return httpCommon.post(
      `${Apis.Priorauth_fileUploadApi}/${data.priorAuthId}`,
      data,
    )
  }
  downloadFileApi(data) {
    return httpCommon.get(
      `${Apis.Priorauth_downloadFileApi}/${data.priorAuthId}`,
      { data: {} },
      { responseType: 'blob' },
    )
  }
  logInfoSaveApi(data) {
    return httpCommon.post(`${Apis.Priorauth_logInfoSaveApi}`, data)
  }
  icdKeywordSearchApi(data) {
    return httpCommon.get(
      `${Apis.Priorauth_icdKeywordSearchApi}?searchField=%20&searchParam=${data}`,
      { data: {} },
    )
  }
  icdChildApi(data) {
    return httpCommon.get(`${Apis.Priorauth_icdChildApi}?parentId=${data}`, {
      data: {},
    })
  }
  priorAuthSaveApi(data) {
    return httpCommon.post(`${Apis.Priorauth_priorAuthSaveApi}`, data)
  }
  patientSaveApi(data) {
    return httpCommon.post(`${Apis.Priorauth_patientSaveApi}`, data)
  }
  policyHolderSaveApi(data) {
    return httpCommon.post(`${Apis.Priorauth_policyHolderSaveApi}`, data)
  }
  mappingListApi(data) {
    return httpCommon.get(`${Apis.Priorauth_mappingListApi}/${data}`, {
      data: {},
    })
  }
  saveMappingApi(data) {
    return httpCommon.post(`${Apis.Priorauth_saveMappingApi}`, data)
  }
  cptSaveApi(data) {
    return httpCommon.post(`${Apis.Priorauth_cptSaveApi}`, data)
  }
  cptDeleteApi(data) {
    return httpCommon.delete(
      `${Apis.Priorauth_cptDeleteApi}/${data}`,
      data,
    )
  }
}
export default new PriorService()

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

// logInfoSave,
// logInfoSaveResponse,
// icdkeywordSearch, icdChild
