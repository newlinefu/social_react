import React from 'react';
import appStyles from './App.module.css';
import Header from './header/Header';
import AsideNavigation from './asideNavig/AsideNavig';
import Content from './content/Content';
import {BrowserRouter} from 'react-router-dom';


const asideData = [
	{signature: 'Main', link: '/main'}, 
	{signature: 'Messages', link: '/messages'}, 
	{signature: 'News', link: '/news'}
]

function App() {
  return (
    <div className={appStyles.container}>
        <Header image = 'https://img2.freepng.ru/20180525/ffb/kisspng-computer-icons-website-icon-5b084bbe94f726.6702114215272703346102.jpg'></Header>
        <div className={appStyles.wrapper}>
        	<BrowserRouter>
	        	<AsideNavigation items = {asideData}></AsideNavigation>
	       		<Content></Content>
       		</BrowserRouter>
        </div>
    </div>
  );
}

export default App;
