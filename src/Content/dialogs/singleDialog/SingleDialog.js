import React from 'react';
import singleDialogStyle from './singleDialog.module.css';
import {Route} from 'react-router-dom';


function CreateSingleDialog(props) {
	return(
		<div>
			{
				props.person.map((value) => {
					return (
						<div className={singleDialogStyle.message + ' ' + (value.sender === 'am' ? singleDialogStyle.am : singleDialogStyle.locutor)} key={value.sender + value.message}>
							{value.message}
						</div>
					)
				})
			}
		</div>
	);
}

export default function SingleDialog(props) {
	return(
		<div className={singleDialogStyle.wrapper}>
			{
				props.locutorData.map( value => {
					console.log(value);
					const SingleComponent = () => <CreateSingleDialog person = {value.messages}></CreateSingleDialog>;
					return <Route path = {value.link} component = {SingleComponent} key = {value.link}></Route>
				})
			}
			<textarea id = "enter_message" className={singleDialogStyle.write_message} placeholder = 'Write message'></textarea>
		</div>
	);
}