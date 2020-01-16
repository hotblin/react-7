import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "@/views/Login/Login";
import useAuth from "@/hooks/useAuth";
import MainLayout from "@/components/MainLayout";
import { getToken } from "@/utils/token";

const DataCenter = () => <div>dataCenter</div>;
const Loading = () => <div>loading...</div>;

function RouterView({ token }) {
  const [auth, loading, userInfo] = useAuth(token);
  if (userInfo) {
    // 判断userInfo和获取的userInfo是否不一样，不一样就提交
  }
  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          exact
          render={() => (auth ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/signup" exact component={Login} />
        <Route path="/datacenter" exact component={DataCenter} />
        <Route
          render={() =>
            loading ? (
              <Loading />
            ) : auth ? (
              <MainLayout />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default connect(state => ({ token: state.token }), null)(RouterView);
