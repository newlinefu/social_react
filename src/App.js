import React from 'react';
import appStyles from './app.module.css';
import HeaderContainer from './header/HeaderContainer';
import AsideNavigationContainer from './asideNavigation/AsideNavigationContainer';
import MainPart from './mainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <div className={appStyles.container}>
        <BrowserRouter>
            <HeaderContainer></HeaderContainer>
            <div className={appStyles.wrapper}>
                    <AsideNavigationContainer></AsideNavigationContainer>
                    <MainPart></MainPart>
            </div>
         </BrowserRouter>
        </div>
    );
}

export default App;
