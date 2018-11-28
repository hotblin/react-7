import React, {
  PureComponent
} from 'react';
import logo from '../../static/logo.svg';
import style from './index.scss';
import BaseMenu from './components/BaseMenu';
import BaseRight from './components/BaseRight';

export default class NavHeader extends PureComponent {
  state = {
    maxWidth: 1200,
  };
  render(){
  const { maxWidth } = this.state;

   return(
    <div className="head">
      <div className="main wide">
        <div className="left">
          {/* 左部分logo */}
          <div className="logo" key="logo" id="logo">
              <img src={logo} alt="logo"/>
              <h1>Ant Design Pro</h1>
          </div>
          {/* 左部分导航菜单 */}
          <div style={{maxWidth}}>
            <BaseMenu {...this.props} style={{ border: 'none', height: 64 }}/>
          </div>
        </div>

        <BaseRight/>
      </div>
    </div>
   )
  }

}