import {requests} from '../../API/api';

const ADD_POST = 'ADD-POST';
const CHANGE_POST_AREA = 'CHANGE-POST-AREA';
const ADD_PROFILE_INFO = 'ADD-PROFILE-INFO';
const TOGGLE_LOADING = 'TOGGLE-LOADING';
const SET_STATUS = 'SET-STATUS';
//const UPDATE_STATUS = 'UPDATE-STATUS';

const defaultState = {
	profileInfo: null,
	postsData: [
		{id: 1, content: 'Hey. Its my first post', likes: 14},
		{id: 2, content: 'Hey. Its my second post', likes: 11},
		{id: 3, content: 'Hey. Its my third post', likes: 4},
	],
	
	postAreaData: '',
	isLoading: false,
	status: ''
};


export default function profileReducer(state = defaultState, action) {
	switch(action.type) {
		case('ADD-POST'):
			return {
				...state,
				postsData: [...state.postsData, {
					id: 4,
					content: action.contentOfPost,
					likes: 0
				}]
			}
		case('CHANGE-POST-AREA'):
			return {
				...state,
				postAreaData: action.newAreaText
			}
		case('ADD-PROFILE-INFO'):
			return {
				...state,
				profileInfo: action.profileInfo
			}
		case('TOGGLE-LOADING'):
			return {
				...state,
				isLoading: action.value
			}
		case('SET-STATUS'):
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}
}

function addPostDelegate(content) {
	return {
		type: ADD_POST,
		contentOfPost: content
	}
}

function changeAreaDelegate(newText) {
	return {
		type: CHANGE_POST_AREA,
		newAreaText: newText
	}
}

function addProfileInfoDelegate(profileInfo) {
	return {
		type: ADD_PROFILE_INFO,
		profileInfo: profileInfo
	}
}

function toggleLoadingDelegate(value) {
	return {
		type: TOGGLE_LOADING,
		value: value
	}
}

function setStatusDelegate(status) {
	return {
		type: SET_STATUS,
		status: status
	}
}

function setProfile(id) {
	return (dispatch) => {
		dispatch(toggleLoadingDelegate(true));
		requests
			.getProfile(id)
			.then( response => {
				dispatch(addProfileInfoDelegate(response));
				dispatch(toggleLoadingDelegate(false));
			});	
	}
}

function updateStatus(status) {
	return (dispatch) => {
		requests
			.updateStatus(status)
			.then(response => !response.resultCode ? dispatch(setStatusDelegate(status)) : null)
	}
}

function getStatus(id) {
	return (dispatch) => {
		requests
			.getStatus(id)
			.then( response => 	{
				dispatch(setStatusDelegate(response.data)) 
			})
	}
}

export {
	addPostDelegate, 
	changeAreaDelegate,
	setProfile,
	getStatus,
	updateStatus
};