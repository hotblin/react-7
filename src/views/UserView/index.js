import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import RenderPageWithTopBar from "@/components/RenderPageWithTopBar";
import Dashboard from "@/pages/Dashboard/Dashboard";
import FormCustom from "@/pages/FormCustom/FormCustom";
import TableList from "@/pages/TableList/TableList";
import WorkPlace from "@/pages/WorkPlace";
import BasestationTable from "@/pages/BasestationTable";
import Email from "./Email/Email";
import QueryList from "./QueryList/QueryList";

const NotFound = () => {
  return <h2>404</h2>;
};

const setTitle = key => {
  return key;
};

@withRouter
class UserViews extends Component {
  render() {
    const { pathname } = this.props.location;
    document.title = setTitle(pathname);
    return (
      <Switch>
        <Redirect from="/" to="/dashboard" exact />
        <Route path="/email" exact render={() => RenderPageWithTopBar(Email)} />
        <Route
          path="/dashboard"
          exact
          render={() => RenderPageWithTopBar(Dashboard)}
        />

        <Route
          path="/dashboard/workplace"
          exact
          render={() => RenderPageWithTopBar(TableList)}
        />

        <Route
          path="/form/base"
          exact
          render={() => RenderPageWithTopBar(FormCustom)}
        />

        <Route
          path="/table/query"
          exact
          render={() => RenderPageWithTopBar(BasestationTable)}
        />

        <Route
          path="/table/biaozhun"
          exact
          render={() => RenderPageWithTopBar(QueryList)}
        />

        <Route path="/report/workplace" exact component={WorkPlace} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default UserViews;
