import React from 'react';
import LoginForm from './LoginForm';
import styles from './login.module.css';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/reducers/authReducer';
import {Redirect} from 'react-router-dom';



function LoginPage(props) {

	function authorizate(formData) {
		props.login(formData.login, formData.password, formData.rememberMe);
	}

	if(props.isAuthorized)
		return <Redirect to = '/profile'></Redirect>
	else
		return (
			<div className = {styles.main_wrapper}>
				<h1 className = {styles.login_head_text}>authorization</h1>
				<LoginForm onSubmit = {authorizate}></LoginForm>
			</div>
		) 
}
function mapStateToProps(state) {
	return {
		isAuthorized: state.auth.isAuthorized
	};
}

export default connect(mapStateToProps, {

	login: login,
	logout: logout

})(LoginPage)
