//  * getProductionDetailed,
//   *getClaimLevel,
//  * getProdNotes,
//  * exportDetails,
// *  downloadDetails,
//   getExportStatus,
//   updateApmtType,
//   getProdEob,

import { Apis } from '../APIs'
import httpCommon from '../http/http.common'
// import { baseUrl2 } from '../../environments/environment'

class ProductionService {
  getProductionDetailed(data) {
    return httpCommon.post(
      `${Apis.Production_getProductionDetailed}/${data.iclinicId}?offset=${data.offset}`,
      data,
    )
  }
  getClaimLevel(data) {
    return httpCommon.get(
      `${Apis.Production_getClaimLevel}/${data.clinicId}?claimId=${data.claimId}`,
      {
        data: {},
      },
    )
  }
  getProdNotes(data) {
    return httpCommon.get(
      `${Apis.Production_getNotes}/${data.clinicId}?claimId=${data.claimId}&providerId=${data.providerId}`,
      {
        data: {},
      },
    )
  }
  exportDetails(data) {
    return httpCommon.post(
      `${Apis.Production_exportDetails}/${data.exportLevel}`,
      data,
    )
  }
  downloadDetails(data) {
    return httpCommon.get(
      `${Apis.Production_downloadDetails}?filePath=${data}`,
      {
        responseType: 'blob',
      },
    )
  }

  getExportStatus(data) {
    return httpCommon.get(`${Apis.Production_getExportStatus}/${data}`, {
      data: {},
    })
  }

  updateApmtType(data) {
    return httpCommon.put(
      `${Apis.Production_updateApmtType}/${data.clinicId}?apptTypeId=${data.apptTypeId}&claimId=${data.claimId}`,
    )
  }

  getProdEob(data) {
    return httpCommon.get(
      `${Apis.Production_getProdEob}/${data.claimId}?patientId=${data.patientId}`,
      {
        data: {},
      },
    )
  }

  // prodClaimDownloadApi(data) {
  //   return httpCommon.get(
  //     `${baseUrl2}/${Apis.Production_prodClaimDownloadApi}?claimId=${data.claimId}&clinicId=${data.clinicId}&fileId=${data.fileId}&fileName=${data.fileName}`,
  //     { responseType: 'blob' },
  //   )
  // }

  getProdGroupByFacility(data) {
    return httpCommon.get(
      `/trillium-clinic-service/v1/production/summery/providerProductivity/${data.clinicId}?groupBy=${data.group}&filter=${data.filter}&filterValue=${data.filterValue}`,
      {
        data: {},
      },
    )
  }

  getProdGroupByProvider(data) {
    return httpCommon.get(
      `/trillium-clinic-service/v1/production/summery/providerProductivity/${data.clinicId}?groupBy=${data.group}&filter=${data.filter}&filterValue=${data.filterValue}`,
      {
        data: {},
      },
    )
  }

  getProdGroupByService(data) {
    return httpCommon.get(
      `/trillium-clinic-service/v1/production/summery/providerProductivity/${data.clinicId}?groupBy=${data.group}&filter=${data.filter}&filterValue=${data.filterValue}`,
      {
        data: {},
      },
    )
  }

  payorsList(data) {
    return httpCommon.get(
      `${Apis.Dashboard_getPayorsList}?clinicId=${data.clinicId}`,
      {
        data: {},
      },
    )
  }

  getDenialCategory(data) {
    return httpCommon.post(
      `${Apis.Production_getProductionDetailed}/${data.iclinicId}?offset=${data.offset}`,
      data,
    )
  }

  searchIcd(data) {
    return httpCommon.get(
      `/trillium-clinic-service/v1/details/list/icdcpt/${data.clinicId}/?icdCode=${data.icdCode}&cptCode=${data.cptCode}`,
      {
        data: {},
      },
    )
  }
}
export default new ProductionService()
