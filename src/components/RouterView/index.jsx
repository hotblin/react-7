import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import Login from "@/views/Login/Login";
import useAuth from "@/hooks/useAuth";

const DataCenter = () => <div>dataCenter</div>;

function RouterView() {
  const auth = useAuth();
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
          render={() => (auth ? <div>auth</div> : <Redirect to="/login" />)}
        />
      </Switch>
    </Router>
  );
}

export default RouterView;
