import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './sendMessageForm.module.css';
import ValidatedTextArea from '../../../../validatedComponents/ValidatedTextArea';
import {validators} from '../../../../validators/validators';

const maxSymbolsLenght50 = validators.maxSymbolsLenght(50);

function SendMessageForm(props) {

	return (
		<form onSubmit = {props.handleSubmit}>
			<Field 
				className={styles.write_message}
				component = {ValidatedTextArea}
				name = 'sendMessageArea'
				validate = {maxSymbolsLenght50}
				placeholder = 'Write message'
			></Field>
			<button 
				className = 'standart_btn'
				type = 'submit'
			>SEND MESSAGE</button>
		</form>
	)
}

export default reduxForm({

	form: 'sendMessage'

})(SendMessageForm)