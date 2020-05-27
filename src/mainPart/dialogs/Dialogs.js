import React from 'react';
import dialogsStyles from './dialogs.module.css';
import ListOfDialogsPartContainer from './listOfDialogsPart/ListOfDialogsPartContainer';
import SingleDialogsPartContainer from './singleDialogsPart/SingleDialogsPartContainer';
import {BrowserRouter} from 'react-router-dom';

export default function Dialogs(props) {

	return (
		<div className={dialogsStyles.wrapper}>
			<ListOfDialogsPartContainer></ListOfDialogsPartContainer>
			<SingleDialogsPartContainer></SingleDialogsPartContainer>
		</div>
	);
}
