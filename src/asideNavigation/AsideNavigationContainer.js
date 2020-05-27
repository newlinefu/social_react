import React from 'react';
import AsideNavigation from './AsideNavigation';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		asideData: state.aside.asideData
	}
}

const AsideNavigationContainer = connect(mapStateToProps, {})(AsideNavigation);

export default AsideNavigationContainer;