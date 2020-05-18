import React from 'react';
import singleDialogStyle from './singleDialog.module.css';
import {Route} from 'react-router-dom';
import CreateSingleDialog from './CreateSingleDialog';
import {changeMessageAreaDelegate, addMessageDelegate} from '../../../redux/dialogsReducer';

function SingleDialog(props) {

	const textAreaLink = React.createRef();

	function addMessage(id) {
		const valueOfElement = textAreaLink.current.value;
		props.dispatch(addMessageDelegate(id, valueOfElement));
	}

	function changeMessageData(id) {
		const valueOfElement = textAreaLink.current.value;
		props.dispatch(changeMessageAreaDelegate(id, valueOfElement));
	}

	return(
		<div className={singleDialogStyle.wrapper}>
			{
				props.dialogs.dialogsData.map( value => {
					return <Route 
							path = {value.link} 
							render = { 
								() => {
									return (
										<div>
											<CreateSingleDialog person = {value.messages}></CreateSingleDialog>
											<textarea 
												className={singleDialogStyle.write_message} 
												ref = {textAreaLink} 
												value = {value.textAreaData}
												onChange = {() => changeMessageData(value.id)}
											></textarea>
											<button 
												className = 'post_but'
												onClick = {() => addMessage(value.id)}
											>Some text</button>
										</div>
									)}
							} 
							key = {value.link}
							></Route>
				})
			}
		</div>
	);
}

export default SingleDialog;