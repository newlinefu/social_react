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
			link: '/dialogs/JohnSmith',
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
			link: '/dialogs/LiliyaSimonova',
			textAreaData: ''
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
			link: '/dialogs/AlexandraLight',
			textAreaData: ''
		}
	],

	actualId: 4
};


export default function dialogsReducer(state = defaultState, action) {
	let newState;
	switch(action.type) {
		case('CHANGE-MESSAGE-AREA'):

			//При изменении поля ввода сообщения для каждого из пользователей необходимо скопировать состояние,
			//изменить dialogsData, из-за его связи с перерисовкой в react-redux.

			newState = {
				...state, 
				dialogsData: []
			};
			for(let dialog of state.dialogsData) {
				if(dialog.id === action.id)
					newState.dialogsData.push({...dialog, textAreaData: action.newAreaData});
				else
					newState.dialogsData.push({...dialog});
			}
			return newState;


		case('ADD-MESSAGE'):

			//Аналогично change-message-area, при этом происходит полное копирование массива сообщений с дальнейшим
			//добавлением в него нового сообщения

			newState = {
				...state, 
				dialogsData: []
			};
			for(let dialog of state.dialogsData) {
				if(dialog.id === action.idOfDialog)
					newState.dialogsData.push({
						...dialog, 
						textAreaData: '', 
						messages: [
							...dialog.messages, 
							{sender: 'am', message: action.value}
						]
					});
				else
					newState.dialogsData.push({...dialog});
			}
			return newState;
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