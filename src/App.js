import React from 'react';
import appStyles from './App.module.css';
import Header from './header/Header';
import AsideNavContainer from './asideNavig/AsideNavContainer';
import Content from './content/Content';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className={appStyles.container}>
        <Header image = 'https://img2.freepng.ru/20180525/ffb/kisspng-computer-icons-website-icon-5b084bbe94f726.6702114215272703346102.jpg'></Header>
        <div className={appStyles.wrapper}>
          <BrowserRouter>
            <AsideNavContainer></AsideNavContainer>
            <Content></Content>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
