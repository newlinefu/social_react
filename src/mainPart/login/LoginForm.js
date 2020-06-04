import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './login.module.css';
import ValidatedInput from '../../validatedComponents/ValidatedInput';
import {validators} from '../../validators/validators';

const maxSymbolsLenght10 = validators.maxSymbolsLenght(10);

function LoginForm(props) {
	return (
		<form onSubmit = {props.handleSubmit} className = {styles.form}>
			<div>
				<Field 
					component = {ValidatedInput} 
					name = 'login' 
					className = {styles.login_input} 
					placeholder = 'Enter login'
					validate = {maxSymbolsLenght10}></Field>
			</div>
			<div>
				<Field 
					component = {ValidatedInput} 
					name = 'password' 
					className = {styles.pass_input} 
					placeholder = 'Enter password'
					validate = {maxSymbolsLenght10}></Field>
			</div>
			<div className = {styles.checkbox_wrapper}>
				<Field component = 'input' name = 'rememberMe' type = 'checkbox' className = {styles.remember_me}></Field>
				<p>Remember me</p>
			</div>
			<button type = 'submit' className = 'standart_btn'>LOGIN</button>
		</form>
	)
}

export default reduxForm({

	form: 'login'

})(LoginForm);