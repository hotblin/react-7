import React from 'react';
import {Route , withRouter,Switch} from 'react-router-dom';
// import AuthRouter from '@components/AuthRouter/AuthRouter'

import './HomeMain.scss';

const four = _ => {
  return (
    <h1>404</h1>
  )
}

@withRouter
class HomeMain extends React.Component{
  render(){
    // console.log("home main")
    return (
      <div className="home-main">
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/dashboard/monitor' exact component={TableList}/>
          <Route path='*' component={four} exact/>
        </Switch>
      </div>
    )
  }
}

export default HomeMain;