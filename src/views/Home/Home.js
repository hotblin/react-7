import React,{Component} from 'react';
import './Home.scss';
import HomeContnt from './components/HomeContent/HomeContent';
import PerPage from '../PerPage/PerPage';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import WorkPlace from '@pages/WorkPlace'
import Dashboard from '@pages/Dashboard/Dashboard';
import TableList from '@pages/TableList/TableList';
import FormCustom from '@pages/FormCustom/FormCustom';


const four = _ => {
  return (
    <h1>404home组件</h1>
  )
}

class Home extends Component {
  render(){
    return(
      <Switch>
        <Redirect from="/" to="/dashboard" exact/>
        {/* 如果该路由视图下面是多层嵌套路由,就不要使用 exact*/}
        <Route path="/dashboard" exact render={
          props => (
            <PerPage {...props}>
              <Dashboard {...props}/>
            </PerPage>  
          )
        }/>
        <Route path="/dashboard/workplace" exact render={
          props => (
            <PerPage {...props}>
              <TableList {...props}/>
            </PerPage>  
          )
        }/>
        <Route path="/form/base" exact render={
          props => (
            <PerPage {...props}>
              <FormCustom {...props}/>
            </PerPage>  
          )
        }/>
        <Route path='/report/workplace' exact component={WorkPlace}/>
        <Route component={four} exact/>
      </Switch>
    )
  }
}
export default withRouter(Home);