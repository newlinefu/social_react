import React from 'react';
import './header.css';

export default function Header(props) {
	return (
		<header>
			<img src={props.image} alt="" className = 'logo_header'/>
			<h1 className = "logo_text">My<span>Social</span></h1>
		</header>
	);
}