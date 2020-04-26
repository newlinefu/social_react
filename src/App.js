import React from 'react';
import './App.css';
import Header from './header/Header';
import AsideNavigation from './asideNavig/AsideNavig';
import Content from './Content/Content';

function App() {
  return (
    <div className="container">
      <Header image = 'https://img2.freepng.ru/20180525/ffb/kisspng-computer-icons-website-icon-5b084bbe94f726.6702114215272703346102.jpg'></Header>
      <div className="wrapper">
        <AsideNavigation items = { ['Main', 'Messages', 'Options'] }></AsideNavigation>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
