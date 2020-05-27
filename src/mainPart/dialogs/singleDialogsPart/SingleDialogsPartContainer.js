import React from 'react';
import {changeMessageAreaDelegate, addMessageDelegate} from '../../../redux/reducers/dialogsReducer';
import SingleDialogsPart from './SingleDialogsPart';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		dialogsData: state.dialogs.dialogsData
	}
}
const SingleDialogsPartContainer = connect(mapStateToProps, {
	changeMessageData: changeMessageAreaDelegate,
	addMessage: addMessageDelegate
})(SingleDialogsPart);

export default SingleDialogsPartContainer;
