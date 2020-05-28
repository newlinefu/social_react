import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
	getAllUsers,
	followTo,
	unfollowTo} from '../../redux/reducers/usersReducer';
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
		this.props.getAllUsers(this.props.pageCount, this.props.activePage);
	}

	onActiveChanged = (num) => {
		this.props.getAllUsers(this.props.pageCount, num);
	}

	render() {
		return (<Users
			follow = {this.props.followTo}
			unfollow = {this.props.unfollowTo}
			listOfUsers = {this.props.listOfUsers}
			pages = {this.insertPagesLinks()}
			onActiveChanged = {this.onActiveChanged}
			activePage = {this.props.activePage}
			isLoading = {this.props.isLoading}
			isFollowing = {this.props.isFollowing}
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
	getAllUsers: getAllUsers,
	followTo: followTo,
	unfollowTo: unfollowTo
})(UsersAPIComponent);

export default UsersContainer;