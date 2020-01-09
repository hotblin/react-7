import { combineReducers } from "redux";

import userInfo from "./user";
import count from "./count";
import tokenReducer from "./tokenReducer";
const companyInfo = {};

export default combineReducers({
  userInfo,
  count,
  companyInfo,
  token: tokenReducer
});
