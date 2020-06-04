import React from 'react';
import styles from './logInOut.module.css';

export default function LogInOut(props) {
	return (
		<p
			to = '/login'
			className = {styles.login}
			onClick = {props.isAuthorized ? props.logout : null}>
				<span className = {styles.red}>LOG
				</span>{props.isAuthorized? 'OUT' : 'IN'}
		</p>

	)
}