import React from 'react';
import contentStyles from './content.module.css';
import MainPage from './main/MainPage';
import Dialogs from './dialogs/Dialogs';
import {Route} from 'react-router-dom';

export default function Content(props) {
	return (
		<div className = {contentStyles.content}>
			<Route path = '/main' render = {() => <MainPage></MainPage>}></Route>
			<Route path = '/messages' render = {() => <Dialogs></Dialogs>}></Route>
		</div>
	);
}