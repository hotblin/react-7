import React,{PureComponent} from 'react';
import {Layout} from 'antd';

const { Header } = Layout;
export default class MainNav extends React.Component{

  getHeadWidth = () => {
    return '100%';
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  
  render(){
    const width = this.getHeadWidth();
   
    return (
      <Header style={{ padding: 0, width }}>
        424234
      </Header>
    )
  }
}