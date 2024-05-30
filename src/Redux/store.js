import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Login/login.reducer'
import priorReducer from './PriorAuth/PriorAuthApis/prior.reducer'
import productionReducer from "./Production/productions.reducer";

import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  login: loginReducer,
  prior: priorReducer,
  production: productionReducer,
});
const store = configureStore({
  reducer: rootReducer,
})

export default store
