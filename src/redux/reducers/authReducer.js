import {requests} from '../../API/api'
import {stopSubmit} from 'redux-form'

const SET_AUTH = 'SET-AUTH'
const TOGGLE_LOADING = 'TOGGLE-LOADING'
const TOGGLE_AUTHORIZED = 'TOGGLE-AUTHORIZED'
const GET_CAPTCHA_URL = 'GET-CAPTCHA-URL'

const defaultState = {
	login: null,
	email: null,
	id: null,
	isLoading: false,
	isAuthorized: false,
	captcha: null
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
		case('GET-CAPTCHA-URL'):
			return {
				...state,
				captcha: action.captcha
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

function getCapthcaUrlDelegate(url) {
	return {
		type: GET_CAPTCHA_URL,
		captcha: url
	}
}

function setAuth() {
	return async (dispatch) => {
		dispatch(toggleLoadingDelegate(true))
		return requests
			.getAuth()
			.then(response => {
				dispatch(setAuthDelegate(response.data))
				dispatch(toggleLoadingDelegate(false))
				if(!response.resultCode)
					dispatch(toggleAuthorizedDelegate(true))
			});
	}
}

function login(email, password, rememberMe, captcha) {
	return async (dispatch) => {
		const response = await requests.login(email, password, rememberMe, captcha);
		if(!response.data.resultCode)
			dispatch(setAuth())
		else {
			if(response.data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
			const error = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', {_error: error}))
		}
	}
}

function logout() {
	return async (dispatch) => {
		const response = await requests.logout()
		if(!response.data.resultCode){
			dispatch(setAuthDelegate({login: null, email: null, id: null}))
			dispatch(toggleAuthorizedDelegate(false))
		}
	}
}

function getCaptchaUrl() {
	return async (dispatch) => {
		const response = await requests.getCaptcha()
		dispatch(getCapthcaUrlDelegate(response.data.url))
	}
}
export {setAuth, login, logout}