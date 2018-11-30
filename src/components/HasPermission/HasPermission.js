import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {Switch,withRouter} from 'react-router-dom';
import AuthRouter from '@components/AuthRouter/AuthRouter';
import {connect} from 'react-redux';
import Home from '@views/Home/Home';
import {ASYNC_GETTING_USER_INFORMATION} from '@actions/user';

import {
  getToken
} from '@utils/token';
import Home2 from '@views/Home2/Home2';
@connect(
  storeState => {
    return ({userInfo:storeState.userInfo})
  },
  dispatch => bindActionCreators({dispatchAsync_gettingUserInformation:ASYNC_GETTING_USER_INFORMATION},dispatch)
)

@withRouter
class HasPermission extends Component{
  getUserInfo = () => {
    const {dispatchAsync_gettingUserInformation} = this.props;
    dispatchAsync_gettingUserInformation();
  }

  showWhat = (token) => {
    const {userInfo} = this.props;
    const {roleName} = userInfo;
    if(roleName == "ROLE_USER")
    
    return (
      <AuthRouter path="/" Content={Home} token={token}/>
    )

    else if(roleName == "ROLE_OPERATION"){
      return (
        <AuthRouter path="/" Content={Home2} token={token}/>
      )
    }else {
      return false
    }
  }

  render(){
    const token = getToken();
    const {userInfo} = this.props;
    const showWhat = this.showWhat;
    const {history} = this.props;
    if(!!token){
      if(JSON.stringify(userInfo) == "{}") this.getUserInfo();
       return(
         <Switch>
            {showWhat(token)}
          </Switch>
        )
    }else{
      history.replace('/login')
      return false
    }
   
  }
}

export default HasPermission;