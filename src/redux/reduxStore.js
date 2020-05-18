import {combineReducers, createStore} from 'redux';
import asideReducer from './asideReducer';
import postsReducer from './postsReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
	aside: asideReducer,
	posts: postsReducer,
	dialogs: dialogsReducer
});

let store = createStore(reducers);

export {store};