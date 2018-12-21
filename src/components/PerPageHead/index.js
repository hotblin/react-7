import React, { Component } from "react";

export default class PerPageHead extends Component {
  render() {
    return (
      <div class="perpage-head">
        <h1 class="pull-left">
          <i class="icon-edit" />
          <span>Forms styles and features</span>
        </h1>
        <div class="pull-right">
          <ul class="breadcrumb">
            <li>
              <a href="index.html">
                <i class="icon-bar-chart" />
              </a>
            </li>
            <li class="separator">
              <i class="icon-angle-right" />
            </li>
            <li>Forms</li>
            <li class="separator">
              <i class="icon-angle-right" />
            </li>
            <li class="active">Form styles and features</li>
          </ul>
        </div>
      </div>
    );
  }
}
