import React from 'react';
import singleDialogStyle from '../singleDialogsPart.module.css';

export default function CreateSingleDialog(props) {
	return(
		<div>
			{
				props.person.map( (singleMessage, key) => {
					return (
						<div className={singleDialogStyle.message + ' ' + (singleMessage.sender === 'am' ? singleDialogStyle.am : singleDialogStyle.locutor)} key={key}>
							{singleMessage.message}
						</div>
					)
				})
			}
		</div>
	);
}