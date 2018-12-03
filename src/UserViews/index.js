import React, {
  Component
} from 'react';

import {
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';
import './index.scss';

import WorkPlace from '@pages/WorkPlace';
import PerPage from '@components/PerPage';
import Dashboard from '@pages/Dashboard/Dashboard';
import TableList from '@pages/TableList/TableList';
import FormCustom from '@pages/FormCustom/FormCustom';

const renderPerPage = (props,Component) => {
  return(
    <PerPage>
      <Component {...props}/>
    </PerPage>  
  )
}

const NotFound = ()=>{
  return (
    <h2>404</h2>
  )
}

@withRouter
class UserViews extends Component{
  render(){
    return(
      <Switch>
        <Redirect from="/" to="/dashboard" exact/>
        <Route path="/dashboard" exact render={
          props => renderPerPage(props,Dashboard)}/>

        <Route path="/dashboard/workplace" exact render={
          props => renderPerPage(props,TableList)}/>
        
        <Route path="/form/base" exact render={
          props => renderPerPage(props,FormCustom)
        }/>

        <Route path='/report/workplace' exact component={WorkPlace}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    )
  }
}

export default UserViews;