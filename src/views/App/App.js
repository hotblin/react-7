import React, { Component } from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {Route ,  Switch , Redirect} from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute/PrivateRoute';
import  Login from '@views/Login/Login';
import history from '@utils/history';
import Home from '@views/Home/Home';
import Home2 from '@views/Home2/Home2';

import store from '../../store';
import './App.scss';


class App extends Component {
  state = {
    isLogin:sessionStorage.getItem('token')?sessionStorage.getItem('token'):false,
    isAdmin:false
  }
  componentDidMount(){
    this.setState({
      isLogin:sessionStorage.getItem('token')
    })
    this.asyncGetUserInfo(sessionStorage.getItem('token'));
  }

  asyncGetUserInfo = (token) =>{
    let round = (Math.random() * 100).toFixed(0) % 2;
    setTimeout(_=>{
      const ispinehetang = round == 1;
      this.setUserRole(ispinehetang);
    },1000)
  }
  setUserRole = (bool)=>{
    this.setState({
      isAdmin:bool
    })
  }
  render() {
    const {isLogin,isAdmin} = this.state;
    const adminUi = (
      <Switch>
        <PrivateRoute path='' Element={Home} token={isLogin}/>
        <Redirect from='/' exact to="/dashboard" />
      </Switch>
    );

    const userUi = (
       <Switch>
          <PrivateRoute path='/da' Element={Home2} token={isLogin}/>
          <Redirect from='/' exact to="/da" />
       </Switch>
       
    );

    const pathTo = ()=>{
    function myComponent (path,com){
      <PrivateRoute path = {path} component = {com}/>
    }
    switch (isAdmin){
        case true:
            return myComponent ('/dashborad',Home);
        case false:
            return myComponent ('/da',Home2);
    }
}

    return (
      <div className="app-view">
        <Provider store={store}>
          <Router history={history}>
              <Switch>
                <Route path='/login' exact component={Login} />
                {/* <PrivateRoute path='/da' Element={Home2} token={isLogin}/> */}
                {/* <Redirect from='/' exact to="/da" /> */}
                {pathTo()}
              </Switch>
            </Router> 
          </Provider>
      </div>
    )
  }
}

export default App;
