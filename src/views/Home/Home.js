import React,{Component} from 'react';
import './Home.scss';
import HomeContnt from './components/HomeContent/HomeContent';

import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import WorkPlace from '@pages/WorkPlace'

const four = _ => {
  return (
    <h1>404</h1>
  )
}

class Home extends Component {
  render(){
    return(
      <Switch>
        <Route path="/" exact component={HomeContnt}/>
        <Route path='/dashboard/workplace' exact component={WorkPlace}/>
        <Route path='*' component={four} exact/>
      </Switch>
    )
  }
}
export default withRouter(Home);