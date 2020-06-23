import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import asideReducer from './reducers/asideReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';
import headerReducer from './reducers/headerReducer';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import initializeReducer from './reducers/initializeReducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	auth: authReducer,

	header: headerReducer,
	aside: asideReducer,
	
	dialogs: dialogsReducer,
	profile: profileReducer,
	users: usersReducer,
	initialize: initializeReducer,

	form: formReducer
});

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export {store};