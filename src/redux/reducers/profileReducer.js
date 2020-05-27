const ADD_POST = 'ADD-POST';
const CHANGE_POST_AREA = 'CHANGE-POST-AREA';
const ADD_PROFILE_INFO = 'ADD-PROFILE-INFO';
const TOGGLE_LOADING = 'TOGGLE-LOADING';

const defaultState = {
	profileInfo: null,
	postsData: [
		{id: 1, content: 'Hey. Its my first post', likes: 14},
		{id: 2, content: 'Hey. Its my second post', likes: 11},
		{id: 3, content: 'Hey. Its my third post', likes: 4},
	],
	
	postAreaData: '',
	isLoading: false
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
				}],
				postAreaData: ''
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

export {
	addPostDelegate, 
	changeAreaDelegate,
	addProfileInfoDelegate,
	toggleLoadingDelegate
};