import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
	followDelegate, 
	unfollowDelegate, 
	setUsersDelegate, 
	setTotalCountDelegate, 
	setActivePageDelegate,
	toggleLoadingDelegate,
	toggleFollowingDelegate} from '../../redux/reducers/usersReducer';
import {requests} from '../../API/api';


class UsersAPIComponent extends React.Component {

	insertPagesLinks = () => {
		const countAllPages = Math.ceil(this.props.totalCount / this.props.pageCount);
		let pages = [];
		for(let i = 1; i <= countAllPages; i++) {
			pages.push(i);
		}
		return pages;
	}

	componentDidMount = () => {
		this.props.toggleLoading(true);
		this.props.setUsers([]);
		requests.getUsers(this.props.pageCount, this.props.activePage)
			.then(response => {
				this.props.setTotalCount(response.totalCount);
				this.props.setUsers(response.items);
				this.props.toggleLoading(false);
			});
	}

	onActiveChanged = (num) => {
		this.props.setActivePage(num);
		this.props.toggleLoading(true);
		this.props.setUsers([]);
		requests.getUsers(this.props.pageCount, num)
			.then(response => {
				this.props.setTotalCount(response.totalCount);
				this.props.setUsers(response.items);
				this.props.toggleLoading(false);
			});
	}

	render() {
		return (<Users
			follow = {this.props.follow}
			unfollow = {this.props.unfollow}
			setUsers = {this.props.setUsers}
			listOfUsers = {this.props.listOfUsers}
			pages = {this.insertPagesLinks()}
			onActiveChanged = {this.onActiveChanged}
			activePage = {this.props.activePage}
			isLoading = {this.props.isLoading}
			isFollowing = {this.props.isFollowing}
			toggleFollowing = {this.props.toggleFollowing}
		></Users>)
	}
}


function mapStateToProps(state) {
	return {
		listOfUsers: state.users.listOfUsers,
		totalCount: state.users.totalCount,
		activePage: state.users.activePage,
		pageCount: state.users.pageCount,
		isLoading: state.users.isLoading,
		isFollowing: state.users.isFollowing
	}
}

const UsersContainer = connect(mapStateToProps, {
	follow: followDelegate,
	unfollow: unfollowDelegate,
	setUsers: setUsersDelegate,
	setTotalCount: setTotalCountDelegate,
	setActivePage: setActivePageDelegate,
	toggleLoading: toggleLoadingDelegate,
	toggleFollowing: toggleFollowingDelegate
})(UsersAPIComponent);

export default UsersContainer;