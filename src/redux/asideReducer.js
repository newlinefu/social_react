const defaultState = {
	asideData: [
		{signature: 'Main', link: '/main'}, 
		{signature: 'Messages', link: '/messages'}, 
		{signature: 'News', link: '/news'}
	]
};

export default function asideReducer(state = defaultState) {
	return state;
}