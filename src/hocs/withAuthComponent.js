import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		isAuthorized: state.auth.isAuthorized
	}
}

function withAuthComponent(Component) {
	function ConnectedComponent(props){
		if(!props.isAuthorized) return <Redirect to = '/login'></Redirect>
		else return <Component {...props}></Component>;
	}

	const ResultedComponent = connect(mapStateToProps, {})(ConnectedComponent);

	return ResultedComponent;
}

export default withAuthComponent;