const ADD_POST = 'ADD-POST';
const CHANGE_POST_AREA = 'CHANGE-POST-AREA';

const defaultState = {
	postsData: [
		{id: 1, content: 'Hey. Its my first post', likes: 14},
		{id: 2, content: 'Hey. Its my second post', likes: 11},
		{id: 3, content: 'Hey. Its my third post', likes: 4},
	],
	
	postAreaData: ''
};


export default function postsReducer(state = defaultState, action) {

	switch(action.type) {
		case('ADD-POST'): 
			state.postsData.push({
				id: 4,
				content: action.contentOfPost,
				likes: 0
			});
			return state;
		case('CHANGE-POST-AREA'):
			state.postAreaData = action.newAreaText;
			return state;
		default:
			return state;
	}
}

function addPostDelegate(content) {
	return {
		type: ADD_POST,
		contentOfPost: content
	}
}

function changeAreaDelegate(newText) {
	return {
		type: CHANGE_POST_AREA,
		newAreaText: newText
	}
}

export {
	addPostDelegate, 
	changeAreaDelegate
};