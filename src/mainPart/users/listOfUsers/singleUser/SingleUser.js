import React from 'react';
import styles from './singleUser.module.css';
import avatar from '../../../../resourses/avatar.png';
import {NavLink} from 'react-router-dom';
import {requests} from '../../../../API/api';

export default function SingleUser(props) {
	return (
		<div className = {styles.wrapper}>
			<div className={styles.follow_ava}>
				<NavLink to = {`profile/${props.userData.id}`}>
					<img src={props.userData.photos.small || avatar} alt="avatar" className={styles.avatar}/>
				</NavLink>
				<button 
					disabled = {props.isFollowing.some(id => id === props.userData.id)}
					className = {styles.follow} 
					onClick = {!props.userData.followed 
								? () => props.follow(props.userData.id)
								: () => props.unfollow(props.userData.id)}>
					{props.userData.followed ? 'unfollow' : 'follow'}
				</button>
			</div>
			<div className={styles.info}>
				<p className={styles.full_name}>
					{props.userData.name}
				</p>
				<p className={styles.status}>{props.userData.status || ''}</p>
			</div>
		</div>
	)
}