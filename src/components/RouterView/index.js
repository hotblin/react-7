import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HasPermission from "@components/HasPermission/HasPermission";
import Login2 from "@/views/Login/Login2";
import Login from "@/views/Login/Login";
import { getToken } from "@utils/token";

class RouterView extends Component {
  render() {
    const token = getToken();
    return (
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <HasPermission token={token} />
        </Switch>
      </Router>
    );
  }
}

export default RouterView;
