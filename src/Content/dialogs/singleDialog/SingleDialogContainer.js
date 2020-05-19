import React from 'react';
import {changeMessageAreaDelegate, addMessageDelegate} from '../../../redux/dialogsReducer';
import SingleDialog from './SingleDialog';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {
		dialogsData: state.dialogs.dialogsData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeMessageData: (id, text) => {dispatch(changeMessageAreaDelegate(id, text));},
		addMessage: (id, text) => {dispatch(addMessageDelegate(id, text));}
	}
}

const SingleDialogContainer = connect(mapStateToProps, mapDispatchToProps)(SingleDialog);

export default SingleDialogContainer;
