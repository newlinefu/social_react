import React from 'react';
import singleDialogStyle from './singleDialogsPart.module.css';
import {Route} from 'react-router-dom';
import SingleDialog from './singleDialog/SingleDialog';

export default function SingleDialogsPart(props) {
	const textAreaLink = React.createRef();

	function addMessage(id) {
		const valueOfElement = textAreaLink.current.value;
		props.addMessage(id, valueOfElement);
	}

	function changeMessageData(id) {
		const valueOfElement = textAreaLink.current.value;
		props.changeMessageData(id, valueOfElement);
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
											<textarea 
												className={singleDialogStyle.write_message} 
												ref = {textAreaLink} 
												value = {value.textAreaData}
												onChange = {() => changeMessageData(value.id)}
											></textarea>
											<button 
												className = 'standart_btn'
												onClick = {() => addMessage(value.id)}
											>SEND MESSAGE</button>
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