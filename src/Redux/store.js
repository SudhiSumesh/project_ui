import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tokenExpirationMiddleware from "./middleware/tokenExpirationMiddleware";
import loginReducer from "./Login/login.reducer";

import claimsReducer from "./Claim/claim.reducer";
import diagnosisReducer from "./Diagnosis/diagnosis.reducer";
import chargesReducer from "./Charges/charges.reducer";
import notesReducer from "./Notes/notes.reducer";
import filesReducer from "./Files/files.reducer";
import paymentReducer from "./Payments/payment.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
  claim: claimsReducer,
  diagnosis: diagnosisReducer,
  charges: chargesReducer,
  notes: notesReducer,
  files: filesReducer,
  payment: paymentReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenExpirationMiddleware),
});

export default store;
