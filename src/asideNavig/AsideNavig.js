import React from 'react';
import './asideNavig.css';

export default function AsideNavigation(props) {
	return (
		<nav className = 'navigation'>
			{props.items.map(item => {
				return <a href='' className = 'nav_item' key = {item}>{item}</a>
			})}
		</nav>
	);
}