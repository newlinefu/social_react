import React from 'react';
import styles from './singleUser.module.css';
import avatar from '../../../../resourses/avatar.png';
import {NavLink} from 'react-router-dom';

export default function SingleUser(props) {

	function follow() {
		props.follow();
	}

	function unfollow() {
		props.unfollow();
	}

	return (
		<div className = {styles.wrapper}>
			<div className={styles.follow_ava}>
				<NavLink to = {`profile/${props.userData.id}`}>
					<img src={props.userData.photos.small || avatar} alt="avatar" className={styles.avatar}/>
				</NavLink>
				<button 
					className = {styles.follow} 
					onClick = {props.userData.followed ? () => unfollow() : () => follow()}>
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