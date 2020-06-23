import React from 'react';
import dialogsStyles from './dialogs.module.css';
import ListOfDialogsPartContainer from './listOfDialogsPart/ListOfDialogsPartContainer';
import SingleDialogsPartContainer from './singleDialogsPart/SingleDialogsPartContainer';
import {BrowserRouter} from 'react-router-dom';
import withAuthComponent from '../../hocs/withAuthComponent';

function Dialogs(props) {

	return (
		<div className={dialogsStyles.wrapper}>
			<ListOfDialogsPartContainer></ListOfDialogsPartContainer>
			<SingleDialogsPartContainer></SingleDialogsPartContainer>
		</div>
	);
}

export default withAuthComponent(React.memo(Dialogs));

