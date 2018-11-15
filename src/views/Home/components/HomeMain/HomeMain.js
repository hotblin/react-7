import React from 'react';
import {Route ,  Switch,Redirect} from 'react-router-dom';
import Page1 from '@pages/page';
import './HomeMain.scss';
export default class HomeMain extends React.Component{

  render(){
    return (
      <div className="home-main">
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path='/home' component={Page1}></Route>
        </Switch>
        <div style={{clear:"both"}}></div>
      </div>
    )
  }
}