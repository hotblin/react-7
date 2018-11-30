import {
  combineReducers
} from 'redux';

import userInfo from './user';
import count from './count';
const companyInfo = {};

export default combineReducers({
  userInfo,
  count,
  companyInfo
})