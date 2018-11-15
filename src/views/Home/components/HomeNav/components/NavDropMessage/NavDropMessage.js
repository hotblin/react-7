import React from 'react';
import { Menu, Dropdown, Icon,Badge } from 'antd';

export default function NavDropMessage (props){
  const menuChange = (visible) => {
    props.isActive(visible);
  }
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
    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={menuChange}>
      <a className="ant-dropdown-link" href="javacript:void(0)">
        <Badge count={5}>
          <Icon type="mail" />
        </Badge>
      </a>
    </Dropdown>
  )
}
// export default class NavDropMessage extends React.Component{
//   render(){
//     const menu = (
//       <Menu>
//         <Menu.Item key="0">
//           <a href="http://www.alipay.com/">1st menu item</a>
//         </Menu.Item>
//         <Menu.Divider />
//         <Menu.Item key="1">
//           <a href="http://www.taobao.com/">2nd menu item</a>
//         </Menu.Item>
//         <Menu.Divider />
//         <Menu.Item key="3">3rd menu item</Menu.Item>
//       </Menu>
//     )
//     return (
//       <Dropdown overlay={menu} trigger={['click']} onVisibleChange={this.menuChange}>
//         <a className="ant-dropdown-link" href="javacript:void(0)">
//           <Badge count={5}>
//             <Icon type="mail" />
//           </Badge>
//         </a>
//       </Dropdown>
//     )
//   }
// }