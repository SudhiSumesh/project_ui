import { Apis } from "../APIs";
import httpCommon from "../http/http.common";

class NotesService {
  getClaimNotes(claimId) {
    return httpCommon.get(`${Apis.getAllNotesApi}/?claimId=${claimId}`);
  }
  AddClaimNotesApi(data) {
    return httpCommon.post(`${Apis.addNewNotesApi}`, data);
  }
  DeleteClaimNotes(noteId) {
    return httpCommon.delete(`${Apis.deleteNotesApi}/${noteId}`);
  }
}

export default new NotesService();
