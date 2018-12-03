import React, {
  Component
} from 'react';
import {
  bindActionCreators
} from 'redux';
import {
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import AuthRouter from '@components/AuthRouter/AuthRouter';
import {
  connect
} from 'react-redux';
import {
  ASYNC_GET_USERINFO
} from '@actions/user';

import {
  getToken
} from '@utils/token';


import UserViews from '@/userViews';
import AdminViews from '@/adminViews';

@connect(
  storeState => {
    return ({
      userInfo: storeState.userInfo
    })
  },
  dispatch => bindActionCreators({
    dispatchAsync_get_userinfo: ASYNC_GET_USERINFO
  }, dispatch)
)
@withRouter
class HasPermission extends Component {

  getUserInfo = () => {
    const {
      dispatchAsync_get_userinfo,
      userInfo,
      history
    } = this.props;
    if (JSON.stringify(userInfo) == "{}") {
      dispatchAsync_get_userinfo(history);
    }
  }

  displayWhichView = (token) => {
    const {
      userInfo
    } = this.props;
    const {
      roleName
    } = userInfo;
    if (roleName == "ROLE_USER")
      return(<AuthRouter path = "/" Content={UserViews} token={token} />);
    else if (roleName == "ROLE_OPERATION") {
      return (<AuthRouter path = "/" Content={AdminViews} token={token}/>);
    } else {
      return null
    }
  }

  render() {
    const token = getToken();
    const {
      getUserInfo,
      displayWhichView,
      props
    } = this;
    if (!!token) {
      getUserInfo();
      return (
        <Switch>
          {displayWhichView(token)}
        </Switch>
      )
    } else {
      return <Redirect  to="/login" state={{from:props.location}}/>;
    }
  }
}

export default HasPermission;