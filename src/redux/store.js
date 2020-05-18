import postsReducer from './postsReducer';
import dialogsReducer from './dialogsReducer';

const store = {

	getState() {
		return this._state;
	},

	setState(newState) {
		this._state = newState;
	},

	rerender() {
		console.log('is empty');
	},

	subscribe(obs) {
		this.rerender = obs;
	},


	dispatch(action) {
		this._state.posts = postsReducer(this._state.posts, action);
		this._state.dialogs = dialogsReducer(this._state.dialogs, action);

		this._rerenderWithActualState();
	}
}

Object.defineProperty(store, '_state', {
	value: {
		aside: {
			asideData: [
				{signature: 'Main', link: '/main'}, 
				{signature: 'Messages', link: '/messages'}, 
				{signature: 'News', link: '/news'}
			]
		},


		posts: {
			postsData: [
				{id: 1, content: 'Hey. Its my first post', likes: 14},
				{id: 2, content: 'Hey. Its my second post', likes: 11},
				{id: 3, content: 'Hey. Its my third post', likes: 4},
			],
			
			postAreaData: ''
		},


		dialogs: {
			dialogsData: [
				{
					id: 1,
					name:'John Smith', 
					messages: 
					[
						{sender: 'am', message: 'hey'},
						{sender: 'locutor', message: 'hello'},
						{sender: 'am', message: 'how are yo'},
						{sender: 'am', message: 'you*'}
					], 
					link: '/messages/JohnSmith',
					textAreaData: ''
				},

				{
					id: 2,
					name: 'Liliya Simonova', 
					messages:
					[
						{sender: 'am', message: 'Where is my money?'},
						{sender: 'locutor', message: 'oops'},
						{sender: 'locutor', message: 'I did not turn off the stove'},
						{sender: 'locutor', message: 'POOF'}
					], 
					link: '/messages/LiliyaSimonova',
					textAreaData: 'Lil'
				},

				{
					id: 3,
					name: 'Alexandra Light',
					messages: 
					[
						{sender: 'am', message: 'Lily does not return my money'},
						{sender: 'am', message: 'It smells like bad things'},
						{sender: 'locutor', message: 'Going to'},
						{sender: 'Locutor', message: 'Take a bat or an iron?'},
						{sender: 'am', message: 'Both that and that'},
					],
					link: '/messages/AlexandraLight',
					textAreaData: ''
				}
			],

			actualId: 4
		},
	},

	writable: true,
	enumerable: false,
	configurable: false
});

Object.defineProperty(store, '_rerenderWithActualState', {
	value: function() {
		this.rerender(this);
	},
	writable: false, 
	enumerable: false,
	configurable: false
});


export {
	store
};