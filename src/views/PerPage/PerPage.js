import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../Home/components/Header/Header';
// import HomeMain from '../HomeMain/HomeMain';



@withRouter
class PerPage extends Component{
  render(){
    const {children} = this.props;
     return(
    <div className="home-module">
      {/* <HomeNav/> */}
      <Header/>
      {/* <HomeMain/> */}
       <div className="home-main">
        {/* <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path={path + '/monitor'} exact component={TableList}/>
          <Route path="/form/base" exact component={FormCustom}/>
          <Route path='*' component={four} exact/>
        </Switch> */}
        {children}
      </div>
    </div>
     )
  }
}

export default PerPage;