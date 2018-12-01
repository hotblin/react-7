import React,{PureComponent} from 'react';
import NavHeader from '@components/NavHeader';
import { Layout, message } from 'antd';
import style from './Header.scss';
const { Header } = Layout;

export default class HeaderBar extends PureComponent{
  getHeadWidth = () => {
    return "100%";
  }
  render(){
    const width = this.getHeadWidth();
    console.log(1000000);
    return(
      <Header style={{padding:0,width}} className="fixedHeader">
        <NavHeader {...this.props}/>
      </Header>
    )
  }
}