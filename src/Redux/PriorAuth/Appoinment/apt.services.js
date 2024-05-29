import { Apis } from '../../APIs'
import httpCommon from "../http/http.common";

import { objectToUrl } from 'Utils/ajax-utils'

//   priorAuthSearchPatient,
class AptService {
  AppointmentSaveApi(data) {
    return httpCommon.post(Apis.Priorauth_AppointmentSaveApi, data)
  }
  priorAuthSearchPatientApi(data) {
    const url = objectToUrl(`trillium-clinic-service/v1/patient/search`, data)
    return httpCommon.get(url, { data: {} })
  }

  exportDownloadApi(data) {
    const url = objectToUrl(`${Apis.Priorauth_exportDownloadApi}`, data)
    return httpCommon.get(
      url,
      { data: {} },
      {
        responseType: 'blob',
      },
    )
  }
  providerListApi(data) {
    const url = objectToUrl(`${Apis.Priorauth_providerListApi}`, data)
    return httpCommon.get(url, { data: {} })
  }

  providerSaveApi(data) {
    return httpCommon.put(
      `${Apis.Priorauth_providerSaveApi}/${data.appointmentId}`,
      data,
    )
  }
}

export default new AptService()

// exportData,
// exportDataResponse,
// *providerList,
// providerSave,
// providerSaveResponse,
