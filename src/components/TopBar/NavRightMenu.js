import React, { PureComponent } from "react";

import { Menu, Icon, Dropdown, Avatar, Tooltip } from "antd";

import Notice from "./Notice";

export default class NavRightMenu extends PureComponent {
  render() {
    const menu = (
      <Menu className="menu" selectedKeys={[]}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          <span>account cente</span>
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <span>account settings</span>
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />
          <span>Trigger Error</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span>logout</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="nav-right-menu float-right">
        <Tooltip title="使用文档">
          <a
            target="_blank"
            href="https://pro.ant.design/docs/getting-started"
            rel="noopener noreferrer"
            className="action">
            <Icon type="question-circle-o" />
          </a>
        </Tooltip>

        <Notice className="action" />

        <Dropdown overlay={menu}>
          <span className="action account">
            <Avatar
              size="small"
              className="avatar"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
              alt="avatar"
            />
            <span className="name">Serati Ma</span>
          </span>
        </Dropdown>
      </div>
    );
  }
}
