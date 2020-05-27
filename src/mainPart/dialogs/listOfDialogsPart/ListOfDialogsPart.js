import React from 'react';
import listOfDialogsStyle from './listOfDialogsPart.module.css';
import {NavLink} from 'react-router-dom';

export default function ListOfDialogsPart(props) {
	return (
		<div className={listOfDialogsStyle.wrapper}>
			{
				props.dialogs.dialogsData.map( value => {
					return <NavLink to = {value.link} className={listOfDialogsStyle.dialog} key = {value.link}>{value.name}</NavLink>
				})
			}
		</div>
	);
}