import React from 'react';
import appStyles from './app.module.css';
import HeaderContainer from './header/HeaderContainer';
import AsideNavigationContainer from './asideNavigation/AsideNavigationContainer';
import MainPart from './mainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <div className={appStyles.container}>
            <HeaderContainer></HeaderContainer>
            <div className={appStyles.wrapper}>
                <BrowserRouter>
                    <AsideNavigationContainer></AsideNavigationContainer>
                    <MainPart></MainPart>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
