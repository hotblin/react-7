import React,{Component} from 'react';
import {Route ,  Switch , BrowserRouter as Router} from 'react-router-dom';
import HasPermission from '@components/HasPermission/HasPermission';
import Login from '@/views/Login/Login';

class RouterView extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <HasPermission />
        </Switch>
      </Router>
    )
  }
}

export default RouterView;