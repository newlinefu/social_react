import {requests} from '../../API/api';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const CHANGE_POST_AREA = 'CHANGE-POST-AREA';
const ADD_PROFILE_INFO = 'ADD-PROFILE-INFO';
const TOGGLE_LOADING = 'TOGGLE-LOADING';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTO = 'SET-PHOTO';

const defaultState = {
	profileInfo: null,
	postsData: [
		{id: 1, content: 'Hey. Its my first post', likes: 14},
		{id: 2, content: 'Hey. Its my second post', likes: 11},
		{id: 3, content: 'Hey. Its my third post', likes: 4},
	],
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
		case('SET-PHOTO'):
			return {
				...state,
				profileInfo: {...state.profileInfo, photos: {...action.photos.photos}}
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

function setPhotoDelegate(photos) {
	return {
		type: SET_PHOTO,
		photos: photos
	}
}

function setProfile(id) {
	return async (dispatch) => {
		dispatch(toggleLoadingDelegate(true));
		const response = await requests.getProfile(id)
		dispatch(addProfileInfoDelegate(response));
		dispatch(toggleLoadingDelegate(false));
	}
}

function updateStatus(status) {
	return async (dispatch) => {
		const response = await requests.updateStatus(status);
		if(!response.resultCode)
			dispatch(setStatusDelegate(status))
	}
}

function getStatus(id) {
	return async (dispatch) => {
		const response = await requests.getStatus(id)
		dispatch(setStatusDelegate(response.data)) 
	}
}

function setPhotos(photoFile) {
	return async (dispatch) => {
		const response = await requests.setPhoto(photoFile)
		if(!response.resultCode)
			dispatch(setPhotoDelegate(response.data.data))
	}
}

function sendFormDataValues(profile) {
	return async (dispatch, getState) => {
		const userId = getState().auth.id
		const name = getState().auth.login
		const response = await requests.sendFormValues(name, profile)
		if(!response.data.resultCode){
			debugger
			dispatch(setProfile(userId))
		}
		else {
			debugger
			const error = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
			dispatch(stopSubmit('infoDataForm', {_error: error}))
			return Promise.reject(error)
		}
	}
}

export {
	addPostDelegate, 
	changeAreaDelegate,
	setProfile,
	getStatus,
	updateStatus,
	setPhotos,
	sendFormDataValues
};