import React, {
  Component
} from 'react';
import {
  bindActionCreators
} from 'redux';
import {
  Switch,
  withRouter
} from 'react-router-dom';
import AuthRouter from '@components/AuthRouter/AuthRouter';
import {
  connect
} from 'react-redux';
import Home from '@views/Home/Home';
import {
  ASYNC_GETTING_USER_INFORMATION
} from '@actions/user';

import {
  getToken
} from '@utils/token';
import Home2 from '@views/Home2/Home2';

// @connect(
//   storeState => {
//     return ({userInfo:storeState.userInfo})
//   },
//   dispatch => bindActionCreators({dispatchAsync_gettingUserInformation:ASYNC_GETTING_USER_INFORMATION},dispatch)
// )
const HasPermission = (props) => {
  console.log(this.props);
  return (
    <h1>3123123</h1>
  )
}
const mapStateToProps = storeState => {
  return ({
    userInfo: storeState.userInfo
  })
};


export default connect(mapStateToProps)(HasPermission);