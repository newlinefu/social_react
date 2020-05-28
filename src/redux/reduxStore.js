import {combineReducers, createStore, applyMiddleware} from 'redux';
import asideReducer from './reducers/asideReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';
import headerReducer from './reducers/headerReducer';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
	auth: authReducer,

	header: headerReducer,
	aside: asideReducer,
	
	dialogs: dialogsReducer,
	profile: profileReducer,
	users: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export {store};