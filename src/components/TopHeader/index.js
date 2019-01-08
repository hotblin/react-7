import React, { Component } from "react";
import NavHeader from "./NavHeader";
import { Layout } from "antd";
import  "@/style/navbar.scss";
const { Header } = Layout;
export default class HeaderBar extends Component {
  state = {
    topBarIsHide: true
  };

  componentDidMount() {
    window.addEventListener("onload", this.handelSroll());
  }

  handelSroll = _ => {
    let lastScrollTop = 0;
    return window.addEventListener("scroll", () => {
      let st;
      st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        this.setState({
          topBarIsHide: false
        });
      } else {
        this.setState({
          topBarIsHide: true
        });
      }
      return (lastScrollTop = st);
    });
  };

  componentWillUnmount() {
    window.addEventListener("scroll", null);

    // 清空setState
    // 如果有未完成的setState异步任务
     this.setState = (state,callback)=>{
      return;
    };
  }

  getHeadWidth = () => {
    return "100%";
  };
  render() {
    const width = this.getHeadWidth();
    const { topBarIsHide } = this.state;
    return (
      <Header
        style={{ padding: 0, width }}
        className={`fixed-header scroll-hide ${topBarIsHide ? "" : "closed"}`}>
        <NavHeader {...this.props} />
      </Header>
    );
  }
}
