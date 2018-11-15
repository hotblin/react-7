import React from 'react';
import './Home.scss';
import HomeNav from './components/HomeNav/HomeNav';
import HomeMain from './components/HomeMain/HomeMain';
class Home extends React.Component{
  render(){
    return (
      <div className="home-module">
        <HomeNav/>
        <HomeMain/>
      </div>
    )
  }
}
export default Home;