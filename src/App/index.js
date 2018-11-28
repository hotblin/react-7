import React, { Component } from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {Route ,  Switch , Redirect} from 'react-router-dom';
// import PrivateRoute from '@components/PrivateRoute/PrivateRoute';
import AuthRouter from '@components/AuthRouter/AuthRouter';
import  Login from '@views/Login/Login';
import history from '@utils/history';
import Home from '@views/Home/Home';
// import Home2 from '@views/Home2/Home2';

import store from '../store';

export default class App extends Component{
  render(){
    // const pathTo = 
    return (
      <div className="app-view">
        <Provider store={store}>
          <Router history={history}>
              <Switch>
                <Route path='/login' exact component={Login} />
                <AuthRouter path="/" Content={Home} />
              </Switch>
            </Router> 
          </Provider>
      </div>
    )
  }
}