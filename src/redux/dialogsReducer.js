const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';

const defaultState = {
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
};


export default function dialogsReducer(state = defaultState, action) {
	switch(action.type) {

		case('CHANGE-MESSAGE-AREA'): 
			for(let dialog of state.dialogsData) {
				if(action.id === dialog.id) {
					dialog.textAreaData = action.newAreaData;
				}
			}
			return state;
		case('ADD-MESSAGE'):
			for(let dialog of state.dialogsData) {
				if(action.idOfDialog === dialog.id) {
					dialog.messages.push( {sender: 'am', message: action.value} );
					dialog.textAreaData = '';
				}
			}
			return state;
		default:
			return state;
	}
}

function changeMessageAreaDelegate(id, newAreaData) {
	return {
		type: CHANGE_MESSAGE_AREA,
		id: id,
		newAreaData: newAreaData
	}
}

function addMessageDelegate(idOfDialog, value) {
	return {
		type: ADD_MESSAGE,
		idOfDialog: idOfDialog,
		value: value
	}
}

export {
	changeMessageAreaDelegate, 
	addMessageDelegate
};