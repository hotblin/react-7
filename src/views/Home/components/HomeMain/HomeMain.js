import React from 'react';
import {Route ,  Switch,Redirect} from 'react-router-dom';
import Dashboard from '@pages/Dashboard/Dashboard';
import './HomeMain.scss';
export default class HomeMain extends React.Component{

  render(){
    return (
      <div className="home-main">
        <Switch>
          {/* <Redirect from="/" to="/dashboard" exact></Redirect> */}
          <Route path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </div>
    )
  }
}