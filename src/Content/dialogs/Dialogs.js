import React from 'react';
import dialogsStyles from './dialogs.module.css';
import ListOfDialogs from './listOfDialogs/ListOfDialogs';
import SingleDialog from './singleDialog/SingleDialog';
import {BrowserRouter} from 'react-router-dom';

const locutorData = [
	{
		name:'John Smith', 
		messages: 
		[
			{sender: 'am', message: 'hey'},
			{sender: 'locutor', message: 'hello'},
			{sender: 'am', message: 'how are yo'},
			{sender: 'am', message: 'you*'}
		], 
		link: '/messages/JohnSmith'
	},

	{
		name: 'Liliya Simonova', 
		messages: 
		[
			{sender: 'am', message: 'Where is my money?'},
			{sender: 'locutor', message: 'oops'},
			{sender: 'locutor', message: 'I did not turn off the stove'},
			{sender: 'locutor', message: 'POOF'}
		], 
		link: '/messages/LiliyaSimonova'
	},

	{
		name: 'Alexandra Light',
		messages: 
		[
			{sender: 'am', message: 'Lily does not return my money'},
			{sender: 'am', message: 'It smells like bad things'},
			{sender: 'locutor', message: 'Going to'},
			{sender: 'Locutor', message: 'Take a bat or an iron?'},
			{sender: 'am', message: 'Both that and that'},
		],
		link: '/messages/AlexandraLight'
	}
];

export default function Dialogs(props) {
	return (
		<div className={dialogsStyles.wrapper}>
			<ListOfDialogs locutorData = {locutorData}></ListOfDialogs>
			<SingleDialog locutorData = {locutorData}></SingleDialog>
		</div>
	);
}