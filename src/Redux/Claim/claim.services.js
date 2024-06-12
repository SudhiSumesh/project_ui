import axios from "axios";
import { Apis } from "../APIs";
class ClaimServices {
  getClaimsData(data) {
  
    return axios.get(
      // `${Apis.getClaimsDataApi}?clinicId=${data.clinicId}&start=${data.start}&limit=${data.limit}&providerIds=${data.providerIds}&serviceIds=${data.serviceIds}&status=${data.status}&startDate=${data.startDate}&endDate=${data.endDate}&facilityIds=${data.facilityIds}`
      `  http://localhost:3000/api/v1/getClaimsList?start=${data.start}&limit=${data.limit}&clinicId=${data.clinicId}&providerIds=${data.providerIds ?data.providerIds:''}`
    );
  }
}

export default new ClaimServices();
