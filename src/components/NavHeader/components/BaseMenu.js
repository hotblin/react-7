import React, {
  PureComponent
} from 'react';
import {
  Menu,
  Icon
} from 'antd';

import {
  Link
} from "react-router-dom";

const { SubMenu } = Menu;

export default class BaseMenu extends PureComponent{
  state ={
    mode:"horizontal"
  }
  render(){
    const {style} = this.props;
    const {mode} = this.state;
    return(
       <Menu
          style={{style}}
          mode={mode}
          theme="dark"
          className="top-nav-menu"
        >
          <SubMenu key="1" title={<span className="isblock">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </span>}>
            <Menu.Item key="/dashboard/analyise">分析页</Menu.Item>
            <Menu.Item key="/dashboard/monitor">监控页</Menu.Item>
            <Menu.Item key="/dashboard/workplace">工作台</Menu.Item>
          </SubMenu>
          <SubMenu key="2" title={
            <span className="isblock">
              <Icon type="profile" />
              <span>表单页</span>
            </span>}>
            <Menu.Item key="/dashboard/analyise">基础表单</Menu.Item>
            <Menu.Item key="/dashboard/monitor">分布表单</Menu.Item>
            <Menu.Item key="/dashboard/workplace">高级表单</Menu.Item>
          </SubMenu>

          <SubMenu key="3" title={<span className="isblock">
            <Icon type="table" />
            <span>列表页</span>
          </span>}>
            <Menu.Item key="/dashboard/analyise">查询表格</Menu.Item>
            <Menu.Item key="/dashboard/monitor">标准列表</Menu.Item>
            <Menu.Item key="/dashboard/workplace">卡片列表</Menu.Item>
            <Menu.Item key="/dashboard/workplace">搜索列表</Menu.Item>
          </SubMenu>
        
          <SubMenu key="4" title={<span className="isblock">
             <Icon type="home" />
            <span>详情页</span>
          </span>}>
            <Menu.Item key="/dashboard/analyise">基础详情页</Menu.Item>
            <Menu.Item key="/dashboard/monitor">高级详情页</Menu.Item>
          </SubMenu>

          <SubMenu key="5" title={<span className="isblock">
            <Icon type="schedule" />
            <span>结果页</span>
          </span>}>
            <Menu.Item key="9">成功页</Menu.Item>
            <Menu.Item key="10">失败页</Menu.Item>
            {/* <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu> */}
          </SubMenu>

          <SubMenu key="6" title={<span className="isblock">
            <Icon type="alert" />
            <span>异常页</span>
          </span>}>
            <Menu.Item key="/dashboard/analyise">403</Menu.Item>
            <Menu.Item key="/dashboard/monitor">404</Menu.Item>
            <Menu.Item key="/dashboard/monitor">500</Menu.Item>
          </SubMenu>

          <SubMenu key="7" title={<span className="isblock">
            <Icon type="user" />
            <span>个人页</span>
          </span>}>
            <Menu.Item key="/dashboard/analyise">个人中心</Menu.Item>
            <Menu.Item key="/dashboard/monitor">个人设置</Menu.Item>
          </SubMenu>

         
        </Menu>
    )
  }
}