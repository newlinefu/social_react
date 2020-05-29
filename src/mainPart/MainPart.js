import React from 'react';
import contentStyles from './mainPart.module.css';
import ProfileContainer from './profile/ProfileContainer';
import Dialogs from './dialogs/Dialogs';
import {Route} from 'react-router-dom';
import UsersContainer from './users/UsersContainer';
import LoginPage from './login/LoginPage';
 
export default function Content(props) {
	return (
		<div className = {contentStyles.content}>
			<Route path = '/profile/:userId?' render = {() => <ProfileContainer></ProfileContainer>}></Route>
			<Route path = '/dialogs' render = {() => <Dialogs></Dialogs>}></Route>
			<Route path = '/users' render = {() => <UsersContainer></UsersContainer>}></Route>
			<Route path = '/login' render = {() => <LoginPage></LoginPage>}></Route>
		</div>
	);
}