import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { withRouter, Redirect } from "react-router-dom";
import { Icon } from "antd";
import { connect } from "react-redux";
import AuthRouter from "@components/AuthRouter/AuthRouter";
import PageLoading from "@components/PageLoading";
import UserViews from "@/userViews";
import AdminViews from "@/adminViews";
import { getToken } from "@utils/token";
import { ASYNC_GET_USERINFO } from "@store/actions/user";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

@connect(
  storeState => {
    return {
      userInfo: storeState.userInfo
    };
  },
  dispatch =>
    bindActionCreators(
      {
        __async_get_userinfo: ASYNC_GET_USERINFO
      },
      dispatch
    )
)
@withRouter
class HasPermission extends Component {
  getUserInfo = (token) => {
    console.log(1111);
    const { __async_get_userinfo, userInfo, history } = this.props;
    if (JSON.stringify(userInfo) === "{}" && token) __async_get_userinfo(history);
  };

  whichViewBeDisplay = token => {
    console.log(222);
    const { userInfo } = this.props;
    const { roleName } = userInfo;
    if (roleName === "ROLE_USER")
      return <AuthRouter path="/" Content={UserViews} token={token} />;
    else if (roleName === "ROLE_OPERATION") {
      return <AuthRouter path="/" Content={AdminViews} token={token} />;
    } else {
      return <PageLoading fullpage indicator={antIcon} />;
    }
  };
  componentWillReceiveProps(){

  }

  render() {
    const {location} = this.props;
    const token = getToken();
    const { getUserInfo, whichViewBeDisplay } = this;
    console.log(token);
    if (!!token) {
      console.log(!!token);
      getUserInfo(token);
      return whichViewBeDisplay(token);
    } else {
      return <Redirect to="/login" state={{ from: location }} />;
    }
  }
}

export default HasPermission;
