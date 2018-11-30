import React,{Component} from 'react';
import {connect} from 'react-redux';
@connect(
  storeState => ({userInfo:storeState.userInfo})
)
class Home2 extends Component{
  componentDidMount(){
    // console.log(this.props.userInfo.roleName);
  }
  render(){
    return(
      <h1>fdfsfsf</h1>
    )
  }
}

export default Home2