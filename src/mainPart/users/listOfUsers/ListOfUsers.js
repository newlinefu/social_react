import React from 'react';
import SingleUser from './singleUser/SingleUser';
import * as axios from 'axios';

export default class ListOfUsers extends React.Component {
	
	render() {
		return (
			<div className="list_of_users_wrapper">
				{
					this.props.listOfUsers.map(user => (
						<SingleUser 
							userData = {user} 
							follow = {() => this.props.follow(user.id)}
							unfollow = {() => this.props.unfollow(user.id)}
							key = {user.id}
							isFollowing = {this.props.isFollowing}
							toggleFollowing = {this.props.toggleFollowing}>
						</SingleUser>)
					)
				}
			</div>
		)
	}
}