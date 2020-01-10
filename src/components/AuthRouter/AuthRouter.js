import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const AuthRouter = ({ Component, token, ...params }) => {
  return (
    <Route
      {...params}
      render={props => {
        return !!token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" state={{ from: props.location }} />
        );
      }}
    />
  );
};

export default withRouter(AuthRouter);
