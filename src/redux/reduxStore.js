import {combineReducers, createStore} from 'redux';
import asideReducer from './asideReducer';
import postsReducer from './postsReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
	aside: asideReducer,
	dialogs: dialogsReducer,
	posts: postsReducer
});

let store = createStore(reducers);

export {store};