import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import PerPage from "@/components/PerPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import FormCustom from "@/pages/FormCustom/FormCustom";
import TableList from "@/pages/TableList/TableList";
import WorkPlace from "@/pages/WorkPlace";
import BasestationTable from "@/pages/BasestationTable";


const renderPerPage = (props, Component) => (
  <PerPage>
    <Component {...props} />
  </PerPage>
);


const NotFound = () => {
  return <h2>404</h2>;
};

const setTitle = key => {
  return key;
};

@withRouter
class UserViews extends Component {
  render() {
    const {pathname} = this.props.location;
    document.title = setTitle(pathname);
    return (
      <Switch>
        <Redirect from="/" to="/dashboard" exact />
        <Route
          path="/dashboard"
          exact
          render={props => renderPerPage(props, Dashboard)}
        />

        <Route
          path="/dashboard/workplace"
          exact
          render={props => renderPerPage(props, TableList)}
        />

        <Route
          path="/form/base"
          exact
          render={props => renderPerPage(props, FormCustom)}
        />

        <Route
          path="/table/query"
          exact
          render={props => renderPerPage(props, BasestationTable)}
        />

        <Route path="/report/workplace" exact component={WorkPlace} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default UserViews;
