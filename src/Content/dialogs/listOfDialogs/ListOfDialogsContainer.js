import React from 'react';
import {connect} from 'react-redux';
import ListOfDialogs from './ListOfDialogs';

function mapStateToProps(state) {
	return {
		dialogs: state.dialogs
	}
}

function mapDispatchToProps(dispatch) {
	return {};
}

const ListOfDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfDialogs);

export default ListOfDialogsContainer;