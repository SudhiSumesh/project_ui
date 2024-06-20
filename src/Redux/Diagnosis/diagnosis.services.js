import { Apis } from "../APIs";
import httpCommon from "../http/http.common";

class DiagnosisService {
  getDiagnosisData(visitId) {
    return httpCommon.get(`${Apis.getClaimsDiagnosisDataApi}/${visitId}`);
  }
  EditDiagnosis(data) {
    return httpCommon.put(`${Apis.updateDiagnosisApi}`, data);
  }
  getIcdeCode(data) {
    return httpCommon.get(
      `${Apis.icdSearchApi}?search=${data.search}&clinicId=${data.clinicId}`
    );
  }
}
export default new DiagnosisService();
