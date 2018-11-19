import React from 'react';
import { Menu, Dropdown,Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MainNav extends React.Component{
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  
  render(){
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div className="container-fluid main-nav clearfix">
        <div className="nav-collapse">
        <ul className="nav">
          <li>
            <button className="link-button current">
              <span aria-hidden="true">
                <i className="anticon anticon-home"><svg viewBox="64 64 896 896" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></i>
              </span>
              Dashboard
            </button>
          </li>
          <li>
           <Dropdown overlay={menu}>
            <button className="link-button">
                <span aria-hidden="true">
                <i className="anticon anticon-bars"><svg viewBox="0 0 1024 1024" data-icon="bars" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg></i>
                </span>
                Dashboard<b className="caret"></b>
              </button>
            </Dropdown>
          </li>
        </ul>
          {/* <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            // defaultOpenKeys={['one']}
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
          </Menu> */}
        </div>
      </div>
    )
  }
}