import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MainNav extends React.Component{
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return (
      <div className="container-fluid main-nav clearfix">
        <div className="nav-collapse">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            defaultOpenKeys={['one']}
            forceSubMenuRender={true}
            mode="horizontal">
            <Menu.Item key="mail">
              <Icon type="mail" />中文文档
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />导航2
            </Menu.Item>
            <SubMenu className="main-nav-menu" key="one" title={<span className="submenu-title-wrapper"><Icon type="setting" />导航3</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">导航4</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}