import React from 'react';
import './Home.scss';
// import HomeNav from './components/HomeNav/HomeNav';
import Header from './components/Header/Header';
import HomeMain from './components/HomeMain/HomeMain';

const Home = () => (
  <div className="home-module">
    {/* <HomeNav/> */}
    <Header/>
    <HomeMain/>
  </div>
)
export default Home;