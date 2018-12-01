import React from 'react';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

const AuthRouter = ({
 Content,token ,...params
}) => {
  // console.log(token);
  return (
    <Route {...params} render={
      props => {
        return (
          !!token?
          <Content {...props}/>:
          <Redirect to="/login" state={{from:props.location}}/>
        )
      }
    }/>
  )
}

export default withRouter(AuthRouter);