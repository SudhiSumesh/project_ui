import { Apis } from "../APIs";
import httpCommon from "../http/http.common";

class PaymentService {
  paymentSummaryApi(data) {
    return httpCommon.get(`${Apis.getPaymentSummaryApi}/?visitId=${data}`);
  }
  ledgerApi(data) {
    return httpCommon.get(`${Apis.getLedgerApi}/?procedureId=${data}`);
  }
}
export default new PaymentService();
