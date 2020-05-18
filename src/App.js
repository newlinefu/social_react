import React from 'react';
import appStyles from './App.module.css';
import Header from './header/Header';
import AsideNavigation from './asideNavig/AsideNavig';
import Content from './content/Content';
import {BrowserRouter} from 'react-router-dom';


function App(props) {
  return (
    <div className={appStyles.container}>
        <Header image = 'https://img2.freepng.ru/20180525/ffb/kisspng-computer-icons-website-icon-5b084bbe94f726.6702114215272703346102.jpg'></Header>
        <div className={appStyles.wrapper}>
        	<BrowserRouter>
	        	<AsideNavigation aside = {props.state.aside} dispatch = {props.dispatch}></AsideNavigation>
	       		<Content state = {props.state} dispatch = {props.dispatch}></Content>
       		</BrowserRouter>
        </div>
    </div>
  );
}

export default App;
