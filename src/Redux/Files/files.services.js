import { Apis } from "../APIs";
import httpCommon from "../http/http.common";

class ClaimFileService {
  getFilesApi(patientId) {
    return httpCommon.get(`${Apis.getClaimFilesApi}/?patientId=${patientId}`);
  }
  addFile(data) {
    return httpCommon.post(`${Apis.addNewFilesApi}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  deleteFile(imageId) {
    return httpCommon.delete(`${Apis.deleteFilesApi}/?imageId=${imageId}`);
  }
}
export default new ClaimFileService();
