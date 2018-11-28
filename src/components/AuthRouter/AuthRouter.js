import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import {
  getToken
} from '@utils/token';
const AuthRouter = ({
 Content ,...params
}) => {
  return (
    <Route {...params} render={
      (props)=>{
        return (
          !!getToken()?
          <Content {...props}/>:
          <Redirect to={{pathname:"/login"}} state={{from:props.location}}/>
        )
      }
    }/>
  )
}

export default AuthRouter;