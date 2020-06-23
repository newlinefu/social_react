import {setAuth} from './authReducer';

const SET_INITIALIZE = 'SET-INITIALIZE';

const defaultState = {
	initialize: false
}

export default function initializeReducer(state = defaultState, action) {
	switch(action.type) {
		case('SET-INITIALIZE'): 
			return {
				...state,
				initialize: true
			}
		default:
			return state;
	}
}

function setInitializeDelegate() {
	return {
		type: SET_INITIALIZE
	}
}

function setInitialize() {
	return (dispatch) => {
		const authPromise = setAuth()(dispatch);
		Promise.all([authPromise])
			.then(() => dispatch(setInitializeDelegate()));
	}
}

export {setInitialize};