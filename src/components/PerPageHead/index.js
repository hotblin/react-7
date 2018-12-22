import React, { Component } from "react";

export default class PerPageHead extends Component {
  render() {
    return (
      <div className="perpage-head">
        <h1 className="pull-left">
          <i className="icon-edit" />
          <span>Forms styles and features</span>
        </h1>
        <div className="pull-right">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">
                <i className="icon-bar-chart" />
              </a>
            </li>
            <li className="separator">
              <i className="icon-angle-right" />
            </li>
            <li>Forms</li>
            <li className="separator">
              <i className="icon-angle-right" />
            </li>
            <li className="active">Form styles and features</li>
          </ul>
        </div>
      </div>
    );
  }
}
