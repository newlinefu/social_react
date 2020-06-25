import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './login.module.css';
import ValidatedInput from '../../validatedComponents/ValidatedInput';
import {validators} from '../../validators/validators';

const maxSymbolsLenght40 = validators.maxSymbolsLenght(40);

function LoginForm(props) {
	return (
		<form onSubmit = {props.handleSubmit} className = {styles.form}>
			<div>
				<Field 
					component = {ValidatedInput} 
					name = 'login' 
					className = {styles.login_input} 
					placeholder = 'Enter login'
					validate = {maxSymbolsLenght40}></Field>
			</div>
			<div>
				<Field 
					component = {ValidatedInput} 
					name = 'password' 
					className = {styles.pass_input} 
					placeholder = 'Enter password'
					validate = {maxSymbolsLenght40}></Field>
			</div>
			<div className = {styles.checkbox_wrapper}>
				<Field component = 'input' name = 'rememberMe' type = 'checkbox' className = {styles.remember_me}></Field>
				<p>Remember me</p>
			</div>
			{props.error ? <div className = {styles.common_error}>{props.error}</div> : undefined}
			{props.captcha && <img src={props.captcha} alt=""/>}
			{props.captcha && (
				<Field 
					component = 'input' 
					name = 'captcha' 
					className = {styles.login_input}
					placeholder = 'Enter captcha'></Field>
			)}
			<button type = 'submit' className = 'standart_btn'>LOGIN</button>
		</form>
	)
}

export default reduxForm({

	form: 'login'

})(LoginForm);