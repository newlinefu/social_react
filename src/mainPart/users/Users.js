import React from 'react';
import ListOfUsers from './listOfUsers/ListOfUsers';
import styles from './users.module.css';
import Preloader from '../preloader/Preloader';
import UsersPages from './UsersPages.js';

export default function Users(props){
	return (		
		<div className={styles.wrapper}>
			<UsersPages 
				pages = {props.pages}
				activePage = {props.activePage}
				onActiveChanged = {props.onActiveChanged}>
			</UsersPages>
			{props.isLoading ? <Preloader></Preloader> : null}
			<ListOfUsers 
				follow = {props.follow} 
				unfollow = {props.unfollow}
				listOfUsers = {props.listOfUsers}
				isFollowing = {props.isFollowing}
				toggleFollowing = {props.toggleFollowing}>
			</ListOfUsers>
		</div>);	
}