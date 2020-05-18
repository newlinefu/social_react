import * as serviceWorker from './serviceWorker';
import {store} from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function rerender(state) {
	debugger;
	ReactDOM.render(
	  <React.StrictMode>
	    <App state = {state} dispatch = {store.dispatch.bind(store)}/>
	  </React.StrictMode>,
	  document.getElementById('root')
	);	
}

rerender(store.getState());

store.subscribe( () => {
	rerender(store.getState());
});

serviceWorker.unregister();