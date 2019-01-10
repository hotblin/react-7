import React, { Component } from "react";

import NavbarTitle from "./NavbarTitle";
import NavMenu from "./NavMenu";
import NavRightMenu from "./NavRightMenu";

export default class NavHeader extends Component {
  render() {
    return (
      <div className="header-navbar">
        <div className="navbar-container clearfix">
          <NavbarTitle />
          <div className="navbar-menu float-left clearfix">
            <NavMenu {...this.props} style={{ border: "none", height: 64 }} />
          </div>
          <NavRightMenu />
        </div>
      </div>
    );
  }
}
