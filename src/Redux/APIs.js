export const Apis = {
  Accounts_getAddressFromZipCode:
    "trillium-clinic-service/v1/patient/searchCityByZipCode",
  Accounts_getPatientByIdForTab: "trillium-clinic-service/v1/patient",
  Accounts_editAndSavePatient: "trillium-clinic-service/v1/patient/",
  Accounts_searchPayer: "trillium-clinic-service/v1/payer/search/name",
  Accounts_searchPayerAddress: "trillium-clinic-service/v1/payerAddress/list",
  Accounts_getPolicyByPatientId:
    "trillium-clinic-service/v1/account/policy/list",
  Accounts_getPolicyHolderInsurnaceTab:
    "trillium-clinic-service/v1/policyHolder/patient",
  Accounts_editAndSavePatientInsurnace: "trillium-clinic-service/v1/policy",
  Accounts_getAccountsData: "trillium-clinic-service/v1/account/service/list",
  Accounts_getClaimlistApi: "trillium-clinic-service/v1/payment/eob/list",
  Accounts_claimDownloadApi:
    "trillium-internal-service/v1/coderPortal/download",
  Accounts_writeOffApi:
    "trillium-clinic-service/v1/account/payment/writeOffBalance",
  Accounts_getPaymentListApi: "trillium-clinic-service/v1/account/payment/list",
  Accounts_savePaymentApi: "trillium-clinic-service/v1/account/payment/",
  Accounts_balanceListApi: "trillium-clinic-service/v1/payment/balance/list",
  Accounts_authorizationApi: "trillium-clinic-service/v1/common/priorauth/list",
  Accounts_statementListApi:
    "trillium-clinic-service/v1/account/statement/list",
  Accounts_getStatementsDetailsApi:
    "trillium-clinic-service/v1/account/statement/details",
  Accounts_paymentDeleteApi: "trillium-clinic-service/v1/payment",
  Accounts_changeStatusOfInsurnace: "trillium-clinic-service/v1/policy/status",
  Accounts_getPatientNotesAccounts:
    "trillium-clinic-service/v1/note/list/patient",
  Accounts_savePatientNotesAccounts: "trillium-clinic-service/v1/note/patient",
  Accounts_getNotesAppointment:
    "trillium-clinic-service/v1/note/list/appointment",
  Accounts_saveNotesAppointment:
    "trillium-clinic-service/v1/patientNote/patient",
  Accounts_getAppoinmentList: "trillium-clinic-service/v1/appointment/patient",
  Accounts_cancelAppoinmentList:
    "trillium-clinic-service/v1/appointment/status",
  Accounts_stripePaymentApi:
    "trillium-clinic-service/v1/payment/patient/stripe/",
  Accounts_getPatientPinApi: "trillium-clinic-service/v1/patient/pinNo",
  AccountsTable_getPatienTablelist:
    "trillium-clinic-service/v1/account/list/range",
  AccountsTable_changestatus: "trillium-clinic-service/v1/patient/status",
  AccountsTable_getNotesApi: "trillium-clinic-service/v1/note/list/patient",
  Calendar_createAppointment: "trillium-clinic-service/v1/appointment/",
  Calendar_getCalenderList:
    "trillium-clinic-service/v1/appointment/search/list",
  Calendar_searchPatient: "trillium-clinic-service/v1/patient/search",
  Calendar_getPatientUsingId: "trillium-clinic-service/v1/patient",
  Calendar_getPatientUsingIdDialog: "trillium-clinic-service/v1/patient",
  Calendar_getPatientUsingAptId: "trillium-clinic-service/v1/appointment",
  Calendar_getApointmentinfoInsurance: "trillium-clinic-service/v1/appointment",
  Calendar_updateAptDetails: "trillium-clinic-service/v1/appointment/",
  Calendar_getAddressFromZipCode:
    "trillium-clinic-service/v1/patient/searchCityByZipCode",
  Calendar_getAddressFromPayerAddZipCode:
    "trillium-clinic-service/v1/patient/searchCityByZipCode",
  Calendar_getAddressFromAccordianAddZipCode:
    "trillium-clinic-service/v1/patient/searchCityByZipCode",
  Calendar_savePolicyHolderZipCode:
    "trillium-clinic-service/v1/patient/searchCityByZipCode",
  Calendar_dragAppointmentData:
    "trillium-clinic-service/v1/appointment/patient",
  Calendar_deleteAppointment: "trillium-clinic-service/v1/appointment",
  Calendar_cancelAppoinmentApi: "trillium-clinic-service/v1/appointment/status",
  Calendar_triggerApptReminderReview:
    "trillium-clinic-service/v1/sms/appointment/config/type",
  Chat_fetchInboxHistoryApi: "trillium-clinic-service/v1/chat/clinic/inbox",
  Chat_fetchMessagesApi: "trillium-clinic-service/v1/chat/clinic/messages/list",
  Chat_sendFileInchat: "trillium-clinic-service/v1/chat/clinic",
  Chat_downloadFileInchat: "trillium-clinic-service/v1/chat/download",
  Checkout_createIcd: "trillium-clinic-service/v1/icd/",
  Checkout_searchIcdbyCode: "trillium-clinic-service/v1/icd/icdcode",
  Checkout_searchCptCode: "trillium-clinic-service/v1/cliniccpt/cptcode",
  Checkout_searchIcdbyCodePopup: "trillium-clinic-service/v1/icd/icdcode",
  Checkout_searchCptCodePopup: "trillium-clinic-service/v1/cliniccpt/cptcode",
  Checkout_saveCptCode: "trillium-clinic-service/v1/cliniccpt/",
  Checkout_checkoutApi: "trillium-clinic-service/v1/visit/checkOut",
  Checkout_getCptDetails: "trillium-clinic-service/v1/cliniccpt",
  Checkout_getCptDetailsPopup: "trillium-clinic-service/v1/cliniccpt",
  Checkout_searchIcdByKeywordApi: "trillium-clinic-service/v1/icd/search",
  Checkout_getCheckoutApi: "trillium-clinic-service/v1/visit/servicedetails",
  Insurance_savePayerPolicy: "trillium-clinic-service/v1/policy/",
  Insurance_createInsuranceAddress: "trillium-clinic-service/v1/payerAddress/",
  Insurance_editPatient: "trillium-clinic-service/v1/patient",
  Insurance_savePayerDetails: "trillium-clinic-service/v1/payer/",
  Insurance_savePolicyHolderDetails: "trillium-clinic-service/v1/policyHolder/",
  Insurance_getPolicyHolderDetails: "trillium-clinic-service/v1/policyHolder",
  Insurance_searchPayer: "trillium-clinic-service/v1/payer/search/name",
  Insurance_searchPayerAddress: "trillium-clinic-service/v1/payerAddress/list",
  Insurance_checkinapi: "trillium-clinic-service/v1/visit/checkIn",
  Insurance_getInsuranceByVisitType:
    "trillium-clinic-service/v1/policy/patient",
  Insurance_getInsuranceActive: "trillium-clinic-service/v1/policy/status",
  Insurance_getAppoinmentList: "trillium-clinic-service/v1/appointment/patient",
  Insurance_cancelAppoinmentList:
    "trillium-clinic-service/v1/appointment/status",
  Login_login: "trillium-clinic-service/v1/authentication/clinic/user/login",
  Login_userData: "trillium-clinic-service/v1/user/logged-in/info",
  Login_logoutApi:
    "trillium-clinic-service/v1/authentication/clinic/user/logout",
  Payment_savePaymentApi: "trillium-clinic-service/v1/payment",
  Payment_editPaymentApi: "trillium-clinic-service/v1/payment",
  Payment_getPaymentByApptIdApi:
    "trillium-clinic-service/v1/payment/appointment",
  Payment_getPaymentByIdApi: "trillium-clinic-service/v1/payment",
  Payment_deletePaymentApi: "trillium-clinic-service/v1/payment",
  Reports_getEndOfDayReport: "trillium-clinic-service/v1/report/eod",
  Reports_getAppointmentListReport:
    "trillium-clinic-service/v1/report/appointment/list",
  Reports_getCollectionReport: "trillium-clinic-service/v1/report/collection",
  Reports_getAllUsers: "trillium-clinic-service/v1/user/all/users",
  Reports_priorReport: "trillium-clinic-service/v1/report/prior",
  Settings_getSettingsApi: "trillium-clinic-service/v1/settings/userfavourite",
  Settings_saveSettingsApi: "trillium-clinic-service/v1/settings/userfavourite",
  Video_patientlistApi:
    "trillium-clinic-service/v1/patientQueue/login/patient/info",
  Video_patientTileApi:
    "trillium-clinic-service/v1/patientQueue/getLoginPatientByVideoSessionId",
  Video_getClinicVideoTokenApi: "trillium-clinic-service/v1/video/clinic/token",
  Video_deletePatientQueue:
    "trillium-clinic-service/v1/patientQueue/deleteLoginPatient",
  Video_videoMailApi: "trillium-clinic-service/v1/patient/sendMail",

  // Appointments
  Appointments_getAppointments: "trillium-clinic-service/v1/reminder/list/all",
  Appointments_updateAppointment: "trillium-clinic-service/v1/reminder/",
  Appointments_uploadAppointment:
    "trillium-clinic-service/v1/reminder/upload/appointment",
  Appointments_getStatus: "trillium-clinic-service/v1/reminder/status",
  Appointments_export: "trillium-clinic-service/v1/reminder/export",

  // Reviews
  Reviews_getAllReviews: "trillium-clinic-service/v1/review/list/all",
  Reviews_getReviewById: "trillium-clinic-service/v1/review",

  // Admin
  Admin_clinicInfoApi: "trillium-clinic-service/v1/clinic/info",
  Admin_saveClinicApi: "trillium-clinic-service/v1/clinic",
  Admin_saveAdminApi: "trillium-clinic-service/user/updateUser",
  Admin_getAllUsersApi: "trillium-clinic-service/v1/user/list/range",
  Admin_userStatusUpdateApi: "trillium-clinic-service/v1/user",
  Admin_zipCodeApi: "trillium-clinic-service/v1/zip/city/zipcode",
  Admin_saveUserApi: "trillium-clinic-service/v1/user/",
  Admin_updateUserStausApi: "trillium-clinic-service/v1/user",
  Admin_userNameValidateApi:
    "trillium-clinic-service/v1/user/userNameAvailability",
  Admin_providerListApi: "trillium-clinic-service/v1/provider/list/all",
  Admin_providerByIdApi: "trillium-clinic-service/v1/provider",
  Admin_providerStatusUpdateApi: "trillium-clinic-service/v1/provider/",
  Admin_saveProviderApi: "trillium-clinic-service/v1/provider/",
  Admin_locationListApi: "trillium-clinic-service/v1/location/list/all",
  Admin_saveLocationApi: "trillium-clinic-service/v1/location/",
  Admin_updateLocationStatusApi: "trillium-clinic-service/v1/location",
  Admin_saveAppointmenttypeApi: "trillium-clinic-service/v1/appointmentType/",
  Admin_AppointmenttypeListApi:
    "trillium-clinic-service/v1/appointmentType/list/all",
  Admin_updateAppointmenttypeStausApi:
    "trillium-clinic-service/v1/appointmentType",

  // Admin - Messaging
  Admin_getSpecialityApi: "trillium-clinic-service/v1/speacility/search",
  Admin_getMessageConfigsByClinicId:
    "trillium-clinic-service/v1/messageconfig/list",
  Admin_getMessageConfigById: "trillium-clinic-service/v1/messageconfig",
  Admin_getMessageConfigDefaultsByType:
    "trillium-clinic-service/v1/messageconfigdefaults/detail",
  Admin_saveMessageConfig: "trillium-clinic-service/v1/messageconfig/",
  Admin_updateMessageConfig: "trillium-clinic-service/v1/messageconfig/",
  Admin_getMessageResponse:
    "trillium-clinic-service/v1/messageresponseconfig/list",
  Admin_getMessageResponseById:
    "trillium-clinic-service/v1/messageresponseconfig",
  Admin_getMessageResponseDefaults:
    "trillium-clinic-service/v1/messageresponseconfigdefaults/detail",
  Admin_saveMessageResponse:
    "trillium-clinic-service/v1/messageresponseconfig/",
  Admin_updateMessageResponse:
    "trillium-clinic-service/v1/messageresponseconfig/",
  Admin_getMessageSchedule: "trillium-clinic-service/v1/messageschedule/detail",
  Admin_getMessageScheduleDefaults:
    "trillium-clinic-service/v1/messagescheduledefaults/detail",
  Admin_saveMessageSchedule: "trillium-clinic-service/v1/messageschedule/",
  Admin_updateMessageSchedule: "trillium-clinic-service/v1/messageschedule/",
  Admin_getMessageScheduleByClinicId:
    "trillium-clinic-service/v1/messageschedule/list",
  Admin_updateMessageConfigStatus:
    "trillium-clinic-service/v1/messageconfig/status",
  Admin_updateMessageConfigChannelEnabled:
    "trillium-clinic-service/v1/messageconfig/enables/",
  Admin_getMessageTypes: "trillium-clinic-service/v1/messageconfigtype/list",
  Admin_getRescheduleSettings:
    "trillium-clinic-service/v1/messageclinicsetting/",
  Admin_saveRescheduleSettings:
    "trillium-clinic-service/v1/messageclinicsetting/",

  // Admin - Provider Location
  Admin_getProviderLocation:
    "trillium-clinic-service/v1/providerlocation/list/all",
  Admin_saveProviderLocation: "trillium-clinic-service/v1/providerlocation/",
  Admin_getProviderLocationById:
    "trillium-clinic-service/v1/providerlocation/list/all",

  // Claims - Dashboard
  Dashboard_getClinicDetails: "trillium-clinic-service/v1/clinic",
  Dashboard_getProvidersList: "trillium-clinic-service/v1/provider/lists/all",
  Dashboard_getFacilitiesList: "trillium-clinic-service/v1/location/lists/all",
  Dashboard_getProductionTrend:
    "trillium-clinic-service/v1/dashboard/getTrendLineBilled",
  Dashboard_getCollectionTrend:
    "trillium-clinic-service/v1/dashboard/getTrendLineCollection",
  Dashboard_getForecast:
    "trillium-clinic-service/v1/dashboard/getTrendLineCollectionForeCast",
  Dashboard_getNotFiledClaims:
    "trillium-clinic-service/v1/dashboard/getNotFieldClaims",
  Dashboard_getReceivableNet: "trillium-clinic-service/v1/dashboard/getARNet",
  Dashboard_getReceivableGross:
    "trillium-clinic-service/v1/dashboard/getARGross",
  // Dashboard_getPayorsList:"trillium-internal-service/v1/common/priorAuth/cache?applicationId=4",
  Dashboard_getPayorsList: "trillium-clinic-service/v1/EftTab/payors",

  // Claims - Production
  Production_getProductionDetailed:
    "trillium-clinic-service/v1/details/getNewProviderProductivityReport",
  Production_getClaimLevel: "trillium-clinic-service/v1/details/cptreport",
  Production_getNotes: "trillium-clinic-service/v1/details/notes",
  Production_exportDetails: "trillium-clinic-service/v1/details/export",
  Production_downloadDetails: "trillium-clinic-service/v1/dashboard/download",
  Production_getExportStatus: "trillium-clinic-service/v1/dashboard/status",
  Production_updateApmtType: "trillium-clinic-service/v1/details/claim",
  Production_getProdEob: "trillium-clinic-service/v1/payment/eob/list",
  Production_prodClaimDownloadApi:
    "trillium-internal-service/v1/coderPortal/download",

  // Claims - Collection

  Collection_getCollectionSummaryCustom:
    "trillium-clinic-service/v1/dashboard/getProviderProductivityReportNew",
  Collection_getCollectionSummary:
    "trillium-clinic-service/v1/dashboard/getProviderProductivity",
  Collection_getCollectionDetailed:
    "trillium-clinic-service/v1/details/getNewProviderProductivityReport",

  // PriorAuth - Appointments
  Priorauth_searchPatientApi: "trillium-clinic-service/v1/patient/search",
  Priorauth_AppointmentSaveApi: "trillium-clinic-service/v1/appointment/",
  Priorauth_payerSaveApi: "trillium-clinic-service/v1/payer/",
  Priorauth_providerSaveApi: "trillium-clinic-service/v1/appointment/provider",
  Priorauth_providerListApi: "trillium-clinic-service/v1/provider/list/all",
  Priorauth_exportDownloadApi: "trillium-internal-service/v1/priorAuth/export",

  //PriorAuth
  Priorauth_priorAuthListApi:
    "trillium-internal-service/v1/priorAuth/list/range",
  Priorauth_getPriorAuthApi: "trillium-internal-service/v1/priorAuth",
  priorauth_icdSearchApi: "trillium-clinic-service/v1/icd/icdcode",
  Priorauth_icdSaveApi: "trillium-clinic-service/v1/icd/",
  Priorauth_cptSearchApi: "trillium-clinic-service/v1/cliniccpt/cptcode",
  Priorauth_logInfoSaveApi: "trillium-internal-service/v1/log/",
  Priorauth_cptSaveApi: "trillium-clinic-service/v1/cliniccpt/",
  Priorauth_priorAuthSaveApi:
    "trillium-internal-service/v1/priorAuth/addTestProcedureDetails",
  Priorauth_loginInfoApi:
    "trillium-internal-service/v1/common/priorAuth/cache?applicationId=4",
  Priorauth_fileUploadApi: "trillium-internal-service/v1/priorAuth/upload",
  Priorauth_downloadFileApi: "trillium-internal-service/v1/priorAuth/download",
  Priorauth_logListApi: "trillium-internal-service/v1/log/list",
  Priorauth_bulkUpdateApi: "trillium-internal-service/v1/priorAuth/list",
  Priorauth_icdKeywordSearchApi: "trillium-clinic-service/v1/icd/search",
  Priorauth_cptDeleteApi: "trillium-internal-service/v1/priorAuth/cpt",
  Priorauth_icdChildApi: "trillium-clinic-service/v1/icd/tree/search",
  Priorauth_paHistoryApi: "trillium-internal-service/v1/priorAuth/list",
  Priorauth_searchPayorApi: "trillium-clinic-service/v1/payer/search/name",
  Priorauth_patientSaveApi: "trillium-clinic-service/v1/patient/",
  Priorauth_policyHolderSaveApi: "trillium-clinic-service/v1/policyHolder/",
  Priorauth_policySaveApi: "trillium-clinic-service/v1/policy/",
  Priorauth_mappingListApi:
    "trillium-internal-service/v1/common/external/mapping/list",
  Priorauth_saveMappingApi:
    "trillium-internal-service/v1/common/external/mapping/",

  //CLAIMS NEW====

  //claims-management api
  getClaimsDataApi: "http://localhost:3000/api/v1//getClaimsList/",
};
