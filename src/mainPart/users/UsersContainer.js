import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
	followDelegate, 
	unfollowDelegate, 
	setUsersDelegate, 
	setTotalCountDelegate, 
	setActivePageDelegate,
	toggleLoadingDelegate} from '../../redux/reducers/usersReducer';
import * as axios from 'axios';


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
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${this.props.activePage}`)
			.then(response => {
				this.props.setTotalCount(response.data.totalCount);
				this.props.setUsers(response.data.items);
				this.props.toggleLoading(false);
			});
	}

	onActiveChanged = (num) => {
		this.props.setActivePage(num);
		this.props.toggleLoading(true);
		this.props.setUsers([]);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${num}`)
			.then(response => {
				this.props.setTotalCount(response.data.totalCount);
				this.props.setUsers(response.data.items);
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
		></Users>)
	}
}


function mapStateToProps(state) {
	return {
		listOfUsers: state.users.listOfUsers,
		totalCount: state.users.totalCount,
		activePage: state.users.activePage,
		pageCount: state.users.pageCount,
		isLoading: state.users.isLoading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		follow: id => dispatch(followDelegate(id)),
		unfollow: id => dispatch(unfollowDelegate(id)),
		setUsers: users => dispatch(setUsersDelegate(users)),
		setTotalCount: count => dispatch(setTotalCountDelegate(count)),
		setActivePage: active => dispatch(setActivePageDelegate(active)),
		toggleLoading: value => dispatch(toggleLoadingDelegate(value))
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;