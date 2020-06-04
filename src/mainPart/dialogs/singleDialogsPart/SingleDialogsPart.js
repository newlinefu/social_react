import React from 'react';
import singleDialogStyle from './singleDialogsPart.module.css';
import {Route} from 'react-router-dom';
import SingleDialog from './singleDialog/SingleDialog';
import SendMessageForm from './sendMessageForm/SendMessageForm';

export default function SingleDialogsPart(props) {

	function sendMessage(id) {
		return (formData) => {
			props.addMessage(id, formData.sendMessageArea);
		}
	}

	return(
		<div className={singleDialogStyle.wrapper}>
			{
				props.dialogsData.map((value, key) => {
					return <Route 
							path = {value.link} 
							render = { 
								() => {
									return (
										<div>
											<SingleDialog person = {value.messages}></SingleDialog>
											<SendMessageForm onSubmit = {sendMessage(value.id)}></SendMessageForm>
										</div>
									)}
							} 
							key = {key}
							></Route>
				})
			}
		</div>
	);
}