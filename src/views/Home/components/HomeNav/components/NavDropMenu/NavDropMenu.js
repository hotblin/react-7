import React  from 'react';
import { Menu, Dropdown, Icon,Avatar } from 'antd';
import {withRouter} from 'react-router-dom' ;
import avatar_url from '@static/image/avatar-male.jpg';

class NavDropMenuWrapper extends React.Component {

  menuChange = (visible) => {
    this.props.isActive(visible);
  }
  loginOut = () => {
    const {history}  = this.props;
    history.push('/login');
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
        <Menu.Item key="3" onClick={this.loginOut}>退出登录</Menu.Item>
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

const NavDropMenu = withRouter(NavDropMenuWrapper);
export default NavDropMenu;