import React,{Component} from 'react';
// import {withRouter} from 'react-router-dom'
import {Route , withRouter,Switch,Redirect} from 'react-router-dom';

// import HomeNav from './components/HomeNav/HomeNav';
import Header from '../Header/Header';
// import HomeMain from '../HomeMain/HomeMain';
import Dashboard from '@pages/Dashboard/Dashboard';
import TableList from '@pages/TableList/TableList';
import FormCustom from '@pages/FormCustom/FormCustom';
const four = _ => {
  return (
    <h1>404内层</h1>
  )
}


@withRouter
class HomeContnt extends Component{
  render(){
  const {path} = this.props.match;
   return(
    <div className="home-module">
      {/* <HomeNav/> */}
      <Header/>
      {/* <HomeMain/> */}
       <div className="home-main">
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path={path + '/monitor'} exact component={TableList}/>
          <Route path="/form/base" exact component={FormCustom}/>
          <Route path='*' component={four} exact/>
        </Switch>
      </div>
    </div>
   )
  }
}

export default HomeContnt;