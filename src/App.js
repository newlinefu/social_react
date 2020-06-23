import React from 'react';
import {useEffect} from 'react';
import appStyles from './app.module.css';
import HeaderContainer from './header/HeaderContainer';
import AsideNavigationContainer from './asideNavigation/AsideNavigationContainer';
import MainPart from './mainPart/MainPart';
import {BrowserRouter} from 'react-router-dom';
import {setInitialize} from './redux/reducers/initializeReducer';
import {connect} from 'react-redux';
import Preloader from './mainPart/preloader/Preloader';


function App(props) {

    useEffect(() => {
        props.setInitialize();
    }, [])

    if(!props.initialize)
        return <Preloader></Preloader>
    else
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

function mapStateToProps(state) {
    return {
        initialize: state.initialize.initialize
    };
}

export default connect(mapStateToProps, {setInitialize: setInitialize})(App);
