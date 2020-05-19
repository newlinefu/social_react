import * as serviceWorker from './serviceWorker';
import {store} from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

function rerender(store) {
	ReactDOM.render(
	  <React.StrictMode>
	    <Provider store = {store}>
			<App/>	
		</Provider>
	  </React.StrictMode>,
	  document.getElementById('root')
	);	
}

rerender(store);

store.subscribe(() => {
	rerender(store);
});

serviceWorker.unregister();