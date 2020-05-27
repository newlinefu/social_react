import React from 'react';
import ListOfUsers from './listOfUsers/ListOfUsers';
import styles from './users.module.css';
import Preloader from '../preloader/Preloader';

export default function Users(props){
	return (		
		<div className={styles.wrapper}>
			<div className = {styles.pages_wrapper}>
				{
					props.pages.map((pageNum, key) => (
						<span 
							className = {props.activePage === pageNum ? styles.active : ''}
							onClick = {() => props.onActiveChanged(pageNum)}
							key = {key}>
							{pageNum}
						</span>))			
				}
			</div>
			{props.isLoading ? <Preloader></Preloader> : null}
			<ListOfUsers 
				follow = {props.follow} 
				unfollow = {props.unfollow}
				setUsers = {props.setUsers}
				listOfUsers = {props.listOfUsers}
				isFollowing = {props.isFollowing}
				toggleFollowing = {props.toggleFollowing}>
			</ListOfUsers>
		</div>);	
}