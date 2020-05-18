import React from 'react';
import dialogsStyles from './dialogs.module.css';
import ListOfDialogs from './listOfDialogs/ListOfDialogs';
import SingleDialog from './singleDialog/SingleDialog';
import {BrowserRouter} from 'react-router-dom';

export default function Dialogs(props) {

	return (
		<div className={dialogsStyles.wrapper}>
			<ListOfDialogs dialogs = {props.dialogs}></ListOfDialogs>
			<SingleDialog dialogs = {props.dialogs} dispatch = {props.dispatch}></SingleDialog>
		</div>
	);
}
