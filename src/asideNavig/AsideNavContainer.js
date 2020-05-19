import React from 'react';
import AsideNavigation from './AsideNavig';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		aside: state.aside
	}
}
function mapDispatchToProps(dispatch) {
	return {};
}

const AsideNavContainer = connect(mapStateToProps, mapDispatchToProps)(AsideNavigation);

export default AsideNavContainer;