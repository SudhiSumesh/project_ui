import axios from "axios";
import { Apis } from "../APIs";
class ClaimServices {
  getClaimsData(data) {
    return axios.get(
      `${Apis.getClaimsDataApi}?clinicId=${data.iclinicId}`
    );
  }
}

export default new ClaimServices();
