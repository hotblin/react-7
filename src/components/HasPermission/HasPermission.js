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
import Home from '@views/Home/Home';
import {
  ASYNC_GETTING_USER_INFORMATION
} from '@actions/user';

import {
  getToken
} from '@utils/token';
import Home2 from '@views/Home2/Home2';

@connect(
  storeState => {
    return ({
      userInfo: storeState.userInfo
    })
  },
  dispatch => bindActionCreators({
    dispatchAsync_gettingUserInformation: ASYNC_GETTING_USER_INFORMATION
  }, dispatch)
)

@withRouter
class HasPermission extends Component {

  getUserInfo = () => {
    const {
      dispatchAsync_gettingUserInformation,
      userInfo
    } = this.props;
    if (JSON.stringify(userInfo) == "{}") {
      dispatchAsync_gettingUserInformation();
    }
  }

  showWhat = (token) => {
    const {
      userInfo
    } = this.props;
    const {
      roleName
    } = userInfo;
    if (roleName == "ROLE_USER")
      return ( <AuthRouter path = "/"
        Content = {
          Home
        }
        token = {
          token
        }
        />
      )

    else if (roleName == "ROLE_OPERATION") {
      return ( <AuthRouter path = "/"
        Content = {
          Home2
        }
        token = {
          token
        }
        />
      )
    } else {
      return null
    }
  }
  historyBackLogin = () => {
    const {
      history
    } = this.props;
    history.replace('/login')
  }
  render() {
    const token = getToken();
    const {props} = this;
    const {
      getUserInfo,
      historyBackLogin,
      showWhat
    } = this;
    if (!!token) {
      getUserInfo();
      return (
        <Switch>
          {showWhat(token)}
        </Switch>
      )
    } else {
      // historyBackLogin();
       
      return <Redirect to="/login" state={{from:props.location}}/>;
    }

  }
}

export default HasPermission;