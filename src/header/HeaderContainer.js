import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {requests} from '../API/api';
import {setAuthDelegate, toggleLoadingDelegate, toggleAuthorizedDelegate} from '../redux/reducers/authReducer';

class HeaderAPIContainer extends React.Component {
	componentDidMount() {
		this.props.toggleLoading(true);
		requests
			.getAuth()
			.then(response => {
				this.props.setAuth(response);
				this.props.toggleLoading(false);
				this.props.toggleAuthorized(true);
			})
	}

	render() {
		return (
			<Header
				headerLogo = {this.props.headerLogo}
				logoText = {this.props.logoText}
				login = {this.props.login}
				id = {this.props.id}
				isLoading = {this.props.isLoading}
				isAuthorized = {this.props.isAuthorized}>
			</Header>
		)
	}
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

const HeaderContainer = connect(mapStateToProps, {

	setAuth: setAuthDelegate,
	toggleLoading: toggleLoadingDelegate,
	toggleAuthorized: toggleAuthorizedDelegate

})(HeaderAPIContainer);

export default HeaderContainer;