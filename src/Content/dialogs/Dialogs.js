import React from 'react';
import dialogsStyles from './dialogs.module.css';
import ListOfDialogsContainer from './listOfDialogs/ListOfDialogsContainer';
import SingleDialogContainer from './singleDialog/SingleDialogContainer';
import {BrowserRouter} from 'react-router-dom';

export default function Dialogs(props) {

	return (
		<div className={dialogsStyles.wrapper}>
			<ListOfDialogsContainer></ListOfDialogsContainer>
			<SingleDialogContainer></SingleDialogContainer>
		</div>
	);
}
