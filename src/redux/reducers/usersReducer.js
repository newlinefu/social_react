import {requests} from '../../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';
const TOGGLE_LOADING = 'TOGGLE-LOADING';
const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';


let defaultState = {
	listOfUsers: [],
	totalCount: 0,
	activePage: 1,
	pageCount: 4,
	isLoading: false,
	isFollowing: []
}

export default function usersReducer(state = defaultState, action) {
	let newState;

	switch(action.type) {
		case('FOLLOW'):
			newState = {...state, listOfUsers: []};
			for(let user of state.listOfUsers) {
				if(user.id === action.id)
					newState.listOfUsers.push({...user, followed: true});
				else 
					newState.listOfUsers.push({...user})
			}
			return newState;
		case('UNFOLLOW'):
			newState = {...state, listOfUsers: []};
			for(let user of state.listOfUsers) {
				if(user.id === action.id)
					newState.listOfUsers.push({...user, followed: false});
				else 
					newState.listOfUsers.push({...user})
			}
			return newState;
		case('SET-USERS'):
			return {
				...state,
				listOfUsers: [...action.users]
			}
		case('SET-TOTAL-COUNT'):
			return {
				...state,
				totalCount: action.count
			}
		case('SET-ACTIVE-PAGE'):
			return {
				...state,
				activePage: action.active
			}
		case('TOGGLE-LOADING'):
			return {
				...state,
				isLoading: action.value
			}
		case('TOGGLE-FOLLOWING'):
			return{
				...state,
				isFollowing: action.isFollow
				? [...state.isFollowing, action.id]
				: state.isFollowing.filter(id => id !== action.id)
			}
		default:
			return state;
	}
}

function followDelegate(id) {
	return {
		type: FOLLOW,
		id: id
	}
}

function unfollowDelegate(id) {
	return {
		type: UNFOLLOW,
		id: id
	}
}

function setUsersDelegate(users) {
	return {
		type: SET_USERS,
		users: users
	}
}

function setTotalCountDelegate(count) {
	return {
		type: SET_TOTAL_COUNT,
		count: count
	}
}

function setActivePageDelegate(active) {
	return {
		type: SET_ACTIVE_PAGE,
		active: active
	}
}

function toggleLoadingDelegate(value) {
	return {
		type: TOGGLE_LOADING,
		value: value
	}
}

function toggleFollowingDelegate(isFollow, id) {
	return {
		type: TOGGLE_FOLLOWING,
		id: id,
		isFollow: isFollow
	}
}

function getAllUsers(pageCount, activePage) {

	return (dispatch) => {
		dispatch(setActivePageDelegate(activePage));
		dispatch(toggleLoadingDelegate(true));
		dispatch(setUsersDelegate([]));
		requests
			.getUsers(pageCount, activePage)
			.then(response => {
				dispatch(setTotalCountDelegate(response.totalCount));
				dispatch(setUsersDelegate(response.items));
				dispatch(toggleLoadingDelegate(false));
			});
	}
}

function followTo(id) {

	return (dispatch) => {
		dispatch(toggleFollowingDelegate(true, id));
		requests
			.getUserForFollow(id)
			.then(response => {
				if(!response) 
					dispatch(followDelegate(id));
				dispatch(toggleFollowingDelegate(false, id));
			})
	}
}

function unfollowTo(id) {

	return (dispatch) => {
		dispatch(toggleFollowingDelegate(true, id));
		requests
			.getUserForUnfollow(id)
			.then(response => {
				if(!response) 
					dispatch(unfollowDelegate(id));
				dispatch(toggleFollowingDelegate(false, id));
			})
	}
}

export {
	getAllUsers,
	followTo,
	unfollowTo
}