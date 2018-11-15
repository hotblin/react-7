import React,{PureComponent} from 'react';
import './HomeNav.scss';

import NavDropMenu from './components/NavDropMenu/NavDropMenu';
import NavDropSetting from './components/NavDropSetting/NavDropSetting';
import NavDropMessage from './components/NavDropMessage/NavDropMessage';
import NavModuleItem from './components/NavModuleItem';


import headeLogoUrl from '@static/image/header-logo.png'
import MainNav from './components/MainNav/MainNav';

export default class NavModule extends PureComponent {
  state = {
    active: false,
    topBarIsHide:true
  }

  // 子组件传值更改
  changeIsActive = (bool)=>{
    this.setState({
      active:bool
    })
  }
  componentDidMount(){
    const scroll_hide_dom = document.querySelector('div.scroll-hide');
    scroll_hide_dom.addEventListener('mouseover',() => {
      this.setState({
        topBarIsHide:true
      })
      return setTimeout(_ => {
        return scroll_hide_dom.style.overflow = "visible";
      },150);
    });
    window.addEventListener('onload',this.handelSroll()); 
  }
  componentWillUnmount(){
    const scroll_hide_dom = document.querySelector('div.scroll-hide');
    scroll_hide_dom.addEventListener('mouseover',null);
    window.addEventListener('scroll',null);
  }
  
  handelSroll= (e) => {
    let lastScrollTop = 0;
    return window.addEventListener('scroll',()=>{
      let st;
      st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        this.setState({
          topBarIsHide:false
        })
      } else {
        this.setState({
          topBarIsHide:true
        })
      }
      return lastScrollTop = st;
    })
  }


  
  render() {
    const {active,topBarIsHide} = this.state;
    return (
     <div className={`navbar navbar-fixed-top scroll-hide ${topBarIsHide ? null : 'closed'}`}>
        <div className="container-fluid top-bar">
          <div className="float-right">
            <ul className="ul-nav no-style">
              {/* <li className="message no-style has-font">
                <NavDropMessage/>
              </li> */}
              <NavModuleItem NavDrop={false}>
                <NavDropMessage/>
              </NavModuleItem>
              <li className="settings no-style has-font">
                <NavDropSetting/>
              </li>

              <li className={`user no-style ${active ? 'open' : null}`}>
                <NavDropMenu isActive={this.changeIsActive}/>
              </li>
            </ul>
          </div>

          <div className="float-left">
            <a href="" className="logo" style={{backgroundImage: 'url('+headeLogoUrl+')'}}></a>
          </div>
        </div>
        <MainNav/>
     </div>
    )
  }
}