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
        asyncGetsUserInfor: ASYNC_GET_USERINFO
      },
      dispatch
    )
)
@withRouter
class HasPermission extends Component {
  getUserInfo = token => {
    const { asyncGetsUserInfor, userInfo, history } = this.props;
    if (JSON.stringify(userInfo) === "{}" && token) asyncGetsUserInfor(history);
  };

  whichViewBeDisplay = token => {
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

  componentDidMount() {}
  componentWillReceiveProps() {}

  render() {
    const { location } = this.props;
    const token = getToken();
    const { getUserInfo, whichViewBeDisplay } = this;
    if (!!token) {
      getUserInfo(token);
      return whichViewBeDisplay(token);
    } else {
      return <Redirect to="/login" state={{ from: location }} />;
    }
  }
}

export default HasPermission;
