import React from 'react';
import {connect} from 'react-redux';
import ListOfDialogsPart from './ListOfDialogsPart';

function mapStateToProps(state) {
	return {
		dialogs: state.dialogs
	}
}

const ListOfDialogsPartContainer = connect(mapStateToProps, {})(ListOfDialogsPart);

export default ListOfDialogsPartContainer;