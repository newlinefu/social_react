import React from 'react';
import SingleUser from './singleUser/SingleUser';
import * as axios from 'axios';

export default function ListOfUsers(props) {
	return (
		<div className="list_of_users_wrapper">
			{
				props.listOfUsers.map(user => (
					<SingleUser 
						userData = {user} 
						follow = {() => props.follow(user.id)}
						unfollow = {() => props.unfollow(user.id)}
						key = {user.id}
						isFollowing = {props.isFollowing}>
					</SingleUser>)
				)
			}
		</div>
	)
}