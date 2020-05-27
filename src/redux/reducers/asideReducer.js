const defaultState = {
	asideData: [
		{signature: 'Profile', link: '/profile'}, 
		{signature: 'Dialogs', link: '/dialogs'}, 
		{signature: 'Users', link: '/users'},
		{signature: 'News', link: '/news'}
	]
};

export default function asideReducer(state = defaultState) {
	const newState = {...state};
	return newState;
}