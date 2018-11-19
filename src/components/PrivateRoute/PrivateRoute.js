import React,{Component} from 'react';
import { Route, Redirect, } from 'react-router-dom';


class PrivateRoute extends Component{
  state = {
    res:false
  }
  componentDidMount(){
    setTimeout(_=>{
      this.setState({
        res:true
      },15000);
    })
  }
  render(){
    const {res} = this.state;
    const {component} = this.props;

    return (
      <Route {...this.props} render={(props) => (
        !!res
          ? <component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
          }}/>
      )}/>
    )
  }
}