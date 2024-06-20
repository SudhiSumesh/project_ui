export const Apis = {
  //login Api
  claimsLoginApi: "http://localhost:3006/api/v1/auth/login",

  //claims-management api
  getClaimsDataApi: "http://localhost:3000/api/v1/getClaimsList",
  claimDeleteApi: "http://localhost:3000/api/v1/deleteClaim",
  createClaimApi: "http://localhost:3000/api/v1/addClaim",
  updateClaimApi: "http://localhost:3000/api/v1/updateClaim",
  searchPatientApi: "http://localhost:3000/api/v1/searchPatient",
  
  //claim-diagnosis-Api
  getClaimsDiagnosisDataApi: "http://localhost:3002/api/v1/getDiagnosis",
  updateDiagnosisApi: "http://localhost:3002/api/v1/editDiagnosis",
  icdSearchApi: "http://localhost:3002/api/v1/icd-search",

  //claim-charges-api
  getChargesApi: "http://localhost:3001/api/v1/getCharges",
  addNewChargesApi: "http://localhost:3001/api/v1/addNewCharges",
  editChargesApi: "http://localhost:3001/api/v1/editCharges",
  deleteChargesApi: "http://localhost:3001/api/v1/deleteCharges",
  searchCptCodeApi: "http://localhost:3001/api/v1/searchCptCode",

  //claim-notes-api
  getAllNotesApi: "http://localhost:3003/api/v1/getAllNotes",
  addNewNotesApi: "http://localhost:3003/api/v1/addNote",
  deleteNotesApi: "http://localhost:3003/api/v1/deleteNote",

  // claim-files-api
  getClaimFilesApi: "http://localhost:3004/api/v1/getFiles",
  addNewFilesApi: "http://localhost:3004/api/v1/addFile",
  deleteFilesApi: "http://localhost:3004/api/v1/deleteFile",

  //Payment Api
  getPaymentSummaryApi: "http://localhost:3005/api/v1/payment-summary",
  getLedgerApi: "http://localhost:3005/api/v1/get-ledger",
};
