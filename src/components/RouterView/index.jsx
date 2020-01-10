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
  const [userInfo, loading] = useAuth(token);
  console.log("====================================");
  console.log(userInfo);
  console.log(loading);
  console.log("====================================");
  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          exact
          render={() => (userInfo ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/signup" exact component={Login} />
        <Route path="/datacenter" exact component={DataCenter} />
        <Route
          render={() =>
            userInfo && !loading ? (
              <MainLayout />
            ) : loading ? (
              <Loading />
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
