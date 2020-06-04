import {combineReducers, createStore, applyMiddleware} from 'redux';
import asideReducer from './reducers/asideReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';
import headerReducer from './reducers/headerReducer';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	auth: authReducer,

	header: headerReducer,
	aside: asideReducer,
	
	dialogs: dialogsReducer,
	profile: profileReducer,
	users: usersReducer,

	form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export {store};