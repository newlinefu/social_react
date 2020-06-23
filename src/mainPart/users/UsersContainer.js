import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
	getAllUsers,
	followTo,
	unfollowTo} from '../../redux/reducers/usersReducer';
import {requests} from '../../API/api';
import withRouter from '../../hocs/withAuthComponent';
import {compose} from 'redux';


function UsersAPIComponent(props) {

	function insertPagesLinks() {
		const countAllPages = Math.ceil(props.totalCount / props.pageCount);
		let pages = [];
		for(let i = 1; i <= countAllPages; i++) {
			pages.push(i);
		}
		return pages;
	}

	useEffect(()=> {
		props.getAllUsers(props.pageCount, props.activePage);
	}, [props.pageCount, props.activePage])

	function onActiveChanged(num) {
		props.getAllUsers(props.pageCount, num);
	}

	return (<Users
		follow = {props.follow}
		unfollow = {props.unfollow}
		listOfUsers = {props.listOfUsers}
		pages = {insertPagesLinks()}
		onActiveChanged = {onActiveChanged}
		activePage = {props.activePage}
		isLoading = {props.isLoading}
		isFollowing = {props.isFollowing}
	></Users>)
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


export default compose(
	withRouter,
	connect(mapStateToProps, {getAllUsers: getAllUsers, follow: followTo, unfollow: unfollowTo})
)(UsersAPIComponent);