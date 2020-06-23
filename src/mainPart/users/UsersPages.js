import React from 'react';
import styles from './users.module.css';

export default function UsersPages(props) {
	return (
		<div className = {styles.pages_wrapper}>
			{props.activePage >= 5 && (
			<span>
				<span 
					className = {props.activePage === 1 ? styles.active : ''}
					onClick = {() => props.onActiveChanged(1)}>
					{'1'}
				</span>
				<span>
					{' ...'}
				</span>
			</span>
			)
			}
			{
				props.pages
				.filter(page => page <= props.activePage + 3 && page >= props.activePage - 3)
				.map((pageNum, key) => (
					<span 
						className = {props.activePage === pageNum ? styles.active : ''}
						onClick = {() => props.onActiveChanged(pageNum)}
						key = {key}>
						{pageNum}
					</span>))			
			}
			{props.activePage + 4 <= props.pages[props.pages.length - 1] && (
			<span>
				<span>
					{'... '}
				</span>
				<span 
					className = {props.activePage ===  props.pages[props.pages.length - 1]? styles.active : ''}
					onClick = {() => props.onActiveChanged(props.pages[props.pages.length - 1])}>
					{props.pages[props.pages.length - 1]}
				</span>
			</span>
			)
			}
		</div>
	
	)
}