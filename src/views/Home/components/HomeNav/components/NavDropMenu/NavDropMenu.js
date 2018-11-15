import React  from 'react';
import { Menu, Dropdown, Icon,Avatar } from 'antd';
import avatar_url from '@static/image/avatar-male.jpg';
export default class NavDropMenu extends React.Component {

  menuChange = (visible) => {
    this.props.isActive(visible);
  }

  render(){
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} trigger={['click']} onVisibleChange={this.menuChange}>
        <a className="ant-dropdown-link" href="javacript:void(0)">
          <Avatar src={avatar_url}/>James Kobe<Icon type="down" />
        </a>
      </Dropdown>
    )


  }
}