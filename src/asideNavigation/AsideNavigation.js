import React from 'react';
import asideStyles from './asideNavigation.module.css';
import {NavLink} from 'react-router-dom';

export default function AsideNavigation(props) {
	return (
		<nav className = {asideStyles.navigation}>
			{props.asideData.map(item => {
				return <NavLink to = {item.link} className = {asideStyles.nav_item} key = {item.signature}>{item.signature}</NavLink>
			})}
		</nav>
	);
}