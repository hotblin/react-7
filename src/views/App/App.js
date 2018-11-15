import React, { Component } from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {Route ,  Switch , Redirect} from 'react-router-dom';
// import  Login from '@views/Login/Login';
import history from '@utils/history';
import Home from '@views/Home/Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-view">
       <Router history={history}>
          <Switch>
            <Redirect from='/' exact to='/home' />
            <Route path='/home' component={Home} />
            {/* <Route path='/login' exact component={Login} /> */}
          </Switch>                    
        </Router> 
      </div>
    );
  }
}

export default App;
