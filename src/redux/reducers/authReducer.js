const SET_AUTH = 'SET-AUTH';
const TOGGLE_LOADING = 'TOGGLE-LOADING';
const TOGGLE_AUTHORIZED = 'TOGGLE-AUTHORIZED';

const defaultState = {
	login: null,
	email: null,
	id: null,
	isLoading: false,
	isAuthorized: false
}

export default function authReducer(state = defaultState, action) {
	switch(action.type) {
		case('SET-AUTH'):
			return {
				...state,
				login: action.login,
				email: action.email,
				id: action.id
			}
		case('TOGGLE-LOADING'):
			return {
				...state,
				isLoading: action.value
			}
		case('TOGGLE-AUTHORIZED'):
			return {
				...state,
				isAuthorized: action.value
			}
		default:
			return state;
	}
}

function setAuthDelegate(data) {
	return {
		type: SET_AUTH,
		...data
	}
}

function toggleLoadingDelegate(value) {
	return {
		type: TOGGLE_LOADING,
		value: value
	}
}	

function toggleAuthorizedDelegate(value) {
	return {
		type: TOGGLE_AUTHORIZED,
		value: value
	}
}
export {
	setAuthDelegate,
	toggleLoadingDelegate,
	toggleAuthorizedDelegate
}