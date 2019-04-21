import React, { PureComponent } from "react";
import { Menu, Icon } from "antd";

import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;
@withRouter
class NavMenu extends PureComponent {
  state = {
    mode: "horizontal"
  };
  menuBeClick = ({ ...rest }) => {
    const { key } = rest;
    const { history } = this.props;
    history.push(key);
  };
  selectedKeys = () =>{
    return [this.props.location.pathname]
  }
  render() {
    const { style } = this.props;
    const { mode } = this.state;
    const menuBeClick = this.menuBeClick;
    return (
      <Menu
        style={{ style }}
        mode={mode}
        onClick={menuBeClick}
        selectedKeys={this.selectedKeys()}
        className="nav-menu-custom float-left">
        <Menu.Item key="/email">
          <span className="isblock">
            <Icon type="mail" />
            Email
          </span>
        </Menu.Item>
        <SubMenu
          key="1"
          className="memememe"
          title={
            <span className="isblock">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </span>
          }>
          <Menu.Item className="fdfdsfsdfsd" key="/dashboard">
            分析页
          </Menu.Item>
          <Menu.Item key="/report/workplace">fullpage页面</Menu.Item>
          <Menu.Item key="/dashboard/workplace">工作台</Menu.Item>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <span className="isblock">
              <Icon type="profile" />
              <span>表单页</span>
            </span>
          }>
          <Menu.Item key="/form/base">基础表单</Menu.Item>
          <Menu.Item key="/form/fenbu">分布表单</Menu.Item>
          <Menu.Item key="/form/workplace">高级表单</Menu.Item>
        </SubMenu>

        <SubMenu
          key="3"
          title={
            <span className="isblock">
              <Icon type="table" />
              <span>列表页</span>
            </span>
          }>
          <Menu.Item key="/table/query">查询表格</Menu.Item>
          <Menu.Item key="/table/biaozhun">标准列表</Menu.Item>
          <Menu.Item key="/table/card">卡片列表</Menu.Item>
          <Menu.Item key="/table/search">搜索列表</Menu.Item>
        </SubMenu>

        <SubMenu
          key="4"
          title={
            <span className="isblock">
              <Icon type="home" />
              <span>详情页</span>
            </span>
          }>
          <Menu.Item key="/detail/base">基础详情页</Menu.Item>
          <Menu.Item key="/detail/高级">高级详情页</Menu.Item>
        </SubMenu>

        <SubMenu
          key="5"
          title={
            <span className="isblock">
              <Icon type="schedule" />
              <span>结果页</span>
            </span>
          }>
          <Menu.Item key="9">成功页</Menu.Item>
          <Menu.Item key="10">失败页</Menu.Item>
        </SubMenu>

        <SubMenu
          key="6"
          title={
            <span className="isblock">
              <Icon type="alert" />
              <span>异常页</span>
            </span>
          }>
          <Menu.Item key="/page403">403</Menu.Item>
          <Menu.Item key="/page404">404</Menu.Item>
          <Menu.Item key="/page500">500</Menu.Item>
        </SubMenu>

        <SubMenu
          key="7"
          title={
            <span className="isblock">
              <Icon type="user" />
              <span>个人页</span>
            </span>
          }>
          <Menu.Item key="/user">个人中心</Menu.Item>
          <Menu.Item key="/user/setting">个人设置</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default NavMenu;
