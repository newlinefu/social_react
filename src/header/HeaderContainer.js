import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {requests} from '../API/api';
import {logout} from '../redux/reducers/authReducer';

function HeaderAPIContainer(props) {

	return (
		<Header
			headerLogo = {props.headerLogo}
			logoText = {props.logoText}
			login = {props.login}
			id = {props.id}
			isLoading = {props.isLoading}
			isAuthorized = {props.isAuthorized}
			logout = {props.logout}>
		</Header>
	)
}

function mapStateToProps(state) {
	return {
		headerLogo: state.header.headerLogo,
		logoText: state.header.logoText,
		login: state.auth.login,
		id: state.auth.id,
		isLoading: state.auth.isLoading,
		isAuthorized: state.auth.isAuthorized
	}
}

const HeaderContainer = connect(mapStateToProps, {logout: logout})(HeaderAPIContainer);

export default HeaderContainer;