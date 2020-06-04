import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './postsForm.module.css';
import {validators} from '../../../../validators/validators';
import ValidatedTextArea from '../../../../validatedComponents/ValidatedTextArea';

const maxLenght15 = validators.maxSymbolsLenght(50);
	
function PostsForm(props) {

	return (
		<form onSubmit = {props.handleSubmit}>
			<Field 
				placeholder = 'Write new post'
				className = {styles.post_enter}
				name = 'postsTextArea'
				component = {ValidatedTextArea}
				validate = {maxLenght15}>
			</Field>
			<button className = 'standart_btn'>ADD POST</button>
		</form>
	)
}

export default reduxForm({

	form: 'postsForm'

})(PostsForm);