import React from 'react';
import LoginForm from './LoginForm';
import styles from './login.module.css';

export default function LoginPage(props) {

	function showFormData(formData) {
		console.log(formData);
	}

	return (
		<div className = {styles.main_wrapper}>
			<h1 className = {styles.login_head_text}>authorization</h1>
			<LoginForm onSubmit = {showFormData}></LoginForm>
		</div>
	)
}