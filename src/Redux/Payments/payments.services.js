import { Apis } from "../APIs";
import httpCommon from "../http/http.common";

class PaymentService {
  paymentSummaryApi(data) {
    return httpCommon.get(`${Apis.getPaymentSummaryApi}`, data);
  }
  ledgerApi(data) {
    return httpCommon.get(`${Apis.getLedgerApi}`, data);
  }
}
export default new PaymentService()