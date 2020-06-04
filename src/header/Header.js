import React from 'react';
import styles from './header.module.css';
import SmallPreloader from './smallPreloader/SmallPreloader';
import LogInOut from './logInOut/LogInOut';

export default function Header(props) {
	return (
		<header className = {styles.header}>
			<img src={props.headerLogo} alt="" className = {styles.logo_image}/>
			<h1 className = {styles.logo_text}>{props.logoText[0]}<span>{props.logoText[1]}</span></h1>
			{
				props.isLoading 
				? <SmallPreloader></SmallPreloader> 
				: <LogInOut isAuthorized = {props.isAuthorized} logout = {props.logout}></LogInOut>
			}
		</header>
	);
}