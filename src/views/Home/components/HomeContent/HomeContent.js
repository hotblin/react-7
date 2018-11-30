import React,{Component} from 'react';
// import {withRouter} from 'react-router-dom'
import {Route , withRouter,Switch,Redirect} from 'react-router-dom';

// import HomeNav from './components/HomeNav/HomeNav';
import Header from '../Header/Header';
// import HomeMain from '../HomeMain/HomeMain';
import Dashboard from '@pages/Dashboard/Dashboard';
import TableList from '@pages/TableList/TableList';

const four = _ => {
  return (
    <h1>404</h1>
  )
}


@withRouter
class HomeContnt extends Component{
  render(){
   return(
    <div className="home-module">
      {/* <HomeNav/> */}
      <Header/>
      {/* <HomeMain/> */}
       {/* <div className="home-main"> */}
        <Switch>
          <Redirect from="/" to="/dashboard" exact />
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/dashboard/monitor' exact component={TableList}/>
          <Route path='*' component={four} exact/>
        </Switch>
      {/* </div> */}
    </div>
   )
  }
}

export default HomeContnt;