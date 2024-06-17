import { Apis } from "../APIs";
import httpCommon from "../http/http.common";

class ChargesService {
  getClaimChargesApi(claimId) {
    return httpCommon.get(`${Apis.getChargesApi}/${claimId}`);
  }
  addChargesApi(data) {
    return httpCommon.post(`${Apis.addNewChargesApi}`, data);
  }
  updateChargesApi(data) {
    return httpCommon.put(`${Apis.editChargesApi}`, data);
  }
  deleteChargesApi(procedureId) {
    return httpCommon.delete(`${Apis.deleteChargesApi}/${procedureId}`);
  }
  searchCptCodeApi(data) {
    return httpCommon.get(`${Apis.searchCptCodeApi}`, data);
  }
}
export default new ChargesService();
