import React from 'react';
import contentStyles from './content.module.css';
import MainPage from './main/MainPage';
import Dialogs from './dialogs/Dialogs';
import {Route} from 'react-router-dom';

export default function Content() {
	return (
		<div className = {contentStyles.content}>
			<Route path = '/main' component = {MainPage}></Route>
			<Route path = '/messages' component = {Dialogs}></Route>
		</div>
	);
}