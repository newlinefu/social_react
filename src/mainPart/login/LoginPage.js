import React from 'react'
import LoginForm from './LoginForm'
import styles from './login.module.css'
import {connect} from 'react-redux'
import {login, logout, getCapthcaUrl} from '../../redux/reducers/authReducer'
import {Redirect} from 'react-router-dom'



function LoginPage(props) {

	function authorizate(formData) {
		props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
	}

	if(props.isAuthorized)
		return <Redirect to = '/profile'></Redirect>
	else
		return (
			<div className = {styles.main_wrapper}>
				<h1 className = {styles.login_head_text}>authorization</h1>
				<LoginForm onSubmit = {authorizate} captcha = {props.captcha}></LoginForm>
			</div>
		) 
}
function mapStateToProps(state) {
	return {
		isAuthorized: state.auth.isAuthorized,
		captcha: state.auth.captcha
	}
}

export default connect(mapStateToProps, {

	login: login,
	logout: logout

})(LoginPage)
