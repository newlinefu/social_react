import React from 'react';
import styles from './header.module.css';
import SmallPreloader from './smallPreloader/SmallPreloader';

export default function Header(props) {
	return (
		<header className = {styles.header}>
			<img src={props.headerLogo} alt="" className = {styles.logo_image}/>
			<h1 className = {styles.logo_text}>{props.logoText[0]}<span>{props.logoText[1]}</span></h1>
			{
				props.isLoading 
				? <SmallPreloader></SmallPreloader> 
				: props.isAuthorized 
					?   (
						<div className = {styles.authorized}>
							<p className = {styles.nickname}>{props.login}</p>
							<p className = {styles.id}>{props.id}</p>
						</div>
					)
					: <p className = {styles.login}><span className = {styles.red}>LOG</span>IN</p>
			}
		</header>
	);
}