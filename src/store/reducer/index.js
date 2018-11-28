import {
  combineReducers
} from 'redux';

import userInfo from './userInfo';
import count from './count';
const companyInfo = {};

export default combineReducers({
  userInfo,
  count,
  companyInfo
})